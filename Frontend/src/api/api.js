import axios from "axios";

// const API_URL = "http://localhost:4400/api";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
    withCredentials: true,
});

let accessToken = null;
let refreshPromise = null;


// -----------------------------------
// TOKEN MANAGEMENT
// -----------------------------------

export const setAccessToken = (token) => {
    accessToken = token;
};

export const getAccessToken = () => {
    return accessToken;
};


// -----------------------------------
// REQUEST INTERCEPTOR
// -----------------------------------

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


// -----------------------------------
// RESPONSE INTERCEPTOR
// -----------------------------------

api.interceptors.response.use(

    // Successful response
    (response) => {
        return response;
    },

    // Error response
    async (error) => {

        const originalRequest = error.config;

        // If there is no response or it isn't 401
        if (
            !error.response ||
            error.response.status !== 401
        ) {
            return Promise.reject(error);
        }

        // Don't retry the same request twice
        if (originalRequest._retry) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {

            // -----------------------------------
            // REFRESH TOKEN
            // -----------------------------------

            if (!refreshPromise) {

                refreshPromise = api
                    .post("/users/refresh")
                    .then((response) => {

                        const newToken =
                            response.data.accessToken;

                        if (!newToken) {
                            throw new Error(
                                "No access token received"
                            );
                        }

                        setAccessToken(newToken);

                        return newToken;
                    })
                    .finally(() => {

                        refreshPromise = null;
                    });
            }

            // Wait for refresh to finish
            const newToken =
                await refreshPromise;


            // -----------------------------------
            // RETRY ORIGINAL REQUEST
            // -----------------------------------

            originalRequest.headers =
                originalRequest.headers || {};

            originalRequest.headers.Authorization =
                `Bearer ${newToken}`;

            return api(originalRequest);

        } catch (refreshError) {

            setAccessToken(null);

            return Promise.reject(refreshError);
        }
    }
);

export default api;