import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import api, {
    setAccessToken,
} from "../api/api.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
   

    const delivery_fee = 10.00;
    const currency = "$";

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);

    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error(
                "Please Select Product Size before adding to cart!"
            );
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {

            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }

        } else {

            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);


        if (token) {

            try {

                await api.post(
                    "/cart/add",
                    {
                        itemId,
                        size,
                    }
                );

            } catch (error) {

                console.error(error);

                toast.error(
                    error.response?.data?.message ||
                    error.message
                );
            }
        }
    };



    const getCartCount = () => {

        let totalCount = 0;

        for (const items in cartItems) {

            for (const item in cartItems[items]) {

                try {

                    if (cartItems[items][item] > 0) {
                        totalCount +=
                            cartItems[items][item];
                    }

                } catch (error) {

                    console.error(
                        "Error calculating item count:",
                        error
                    );
                }
            }
        }

        return totalCount;
    };



    const updateQuantity = async (
        itemId,
        size,
        quantity
    ) => {

        let cartData = structuredClone(cartItems);

        if (quantity === 0) {

            delete cartData[itemId][size];

            if (
                Object.keys(cartData[itemId]).length === 0
            ) {
                delete cartData[itemId];
            }

        } else {

            cartData[itemId][size] = quantity;
        }

        setCartItems(cartData);


        if (token) {

            try {

                await api.post(
                    "/cart/update",
                    {
                        itemId,
                        size,
                        quantity,
                    }
                );

            } catch (error) {

                console.error(error);

                toast.error(
                    error.response?.data?.message ||
                    error.message
                );
            }
        }
    };



    const getCartAmount = () => {

        let totalAmount = 0;

        for (const items in cartItems) {

            const itemInfo = products.find(
                (product) =>
                    String(product._id) === String(items) ||
                    String(product.id) === String(items)
            );

            if (itemInfo) {

                for (const item in cartItems[items]) {

                    try {

                        if (
                            cartItems[items][item] > 0
                        ) {

                            totalAmount +=
                                Number(itemInfo.price) *
                                Number(cartItems[items][item]);
                        }

                    } catch (error) {

                        console.error(
                            "Error computing line items pricing:",
                            error
                        );
                    }
                }
            }
        }

        return totalAmount;
    };



    const getUserCart = async () => {

        if (!token) {
            return;
        }

        try {

            const response = await api.post(
                "/cart/get"
            );

            if (response.data.success) {

                setCartItems(
                    response.data.cartData
                );
            }

        } catch (error) {

            console.error(error);


            toast.error(
                error.response?.data?.message ||
                error.message
            );
        }
    };


    const getProductsData = async () => {

        try {

            const response = await api.get(
                "/product/list"
            );

            if (response.data.success) {

                setProducts(
                    response.data.products
                );

            } else {

                toast.error(
                    response.data.error
                );
            }

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                error.message
            );
        }
    };


  
    useEffect(() => {

        getProductsData();

    }, []);


   
    useEffect(() => {
          

        const restoreSession = async () => {

            try {


                const response = await api.post(
                    "/users/refresh"
                );
                    

                if (
                    response.data.accessToken
                ) {

                    const newAccessToken =
                        response.data.accessToken;

                    setAccessToken(
                        newAccessToken
                    );
                  
                    setToken(
                        newAccessToken
                    );

                    console.log(
                        "Session restored"
                    );
                }

            } catch (error) {

               

                console.log(
                    "No active session"
                );

                setAccessToken(null);
                setToken(null);
            }
        };


        restoreSession();

    }, []);



    useEffect(() => {

        if (token) {
            getUserCart();
        }

    }, [token]);


    const logout = async () => {

        try {

            await api.post(
                "/users/logout"
            );

        } catch (error) {

            console.error(
                "Logout error:",
                error
            );

        } finally {

            // Clear Axios token
            setAccessToken(null);

            // Clear React token
            setToken(null);

            // Clear cart
            setCartItems({});

            navigate("/login");
        }
    };




    const Value = {

        products,

        search,
        setSearch,

        showSearch,
        setShowSearch,

        addToCart,

        cartItems,
        setCartItems,

        getCartCount,

        updateQuantity,

        getCartAmount,

        delivery_fee,

        currency,

        navigate,

        backendUrl,

        token,
        setToken,

        getUserCart,

        logout,
    };


    return (
        <ShopContext.Provider value={Value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;