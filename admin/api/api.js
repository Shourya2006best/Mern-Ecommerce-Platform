import axios from "axios";

// const API_URL = "http://localhost:4400/api";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
    withCredentials: true,
});


// =====================================================
// ACCESS TOKEN
// =====================================================

let accessToken = null;

let refreshPromise = null;


export const setAccessToken = (token) => {
    accessToken = token;
};


export const getAccessToken = () => {
    return accessToken;
};


// =====================================================
// REQUEST INTERCEPTOR
// =====================================================

api.interceptors.request.use(
    (config) => {

        const token = getAccessToken();

        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;

        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);


// =====================================================
// RESPONSE INTERCEPTOR
// =====================================================

api.interceptors.response.use(

    // Normal response
    (response) => {
        return response;
    },


    // Error response
    async (error) => {

        const originalRequest = error.config;


        // Only handle 401 errors
        if (
            error.response?.status !== 401 ||
            originalRequest._retry ||
            originalRequest.url === "/admin/refresh"
        ) {
            return Promise.reject(error);
        }


        originalRequest._retry = true;


        try {

            // ==========================================
            // Prevent multiple refresh requests
            // ==========================================

            if (!refreshPromise) {

                refreshPromise = api
                    .post("/admin/refresh")

                    .then((response) => {

                        const newAccessToken =
                            response.data.accessToken;


                        if (!newAccessToken) {

                            throw new Error(
                                "No access token received"
                            );

                        }


                        // Store new access token
                        setAccessToken(
                            newAccessToken
                        );


                        return newAccessToken;

                    })

                    .finally(() => {

                        refreshPromise = null;

                    });
            }


            // Wait for refresh request
            const newAccessToken =
                await refreshPromise;


            // ==========================================
            // Retry original request
            // ==========================================

            originalRequest.headers.Authorization =
                `Bearer ${newAccessToken}`;


            return api(originalRequest);


        } catch (refreshError) {

            // Refresh token is invalid/expired
            setAccessToken(null);

            return Promise.reject(
                refreshError
            );
        }

    }
);


export default api;