import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    // 1. FIXED: Moved environmental configuration variables to the top so they are globally defined for all functions
    const delivery_fee = 10.00; 
    const currency = "$"; 
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Please Select Product Size before adding to cart!");
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
                await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.error("Error calculating item count:", error);
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        
        if (quantity === 0) {
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        } else {
            cartData[itemId][size] = quantity;
        }
        
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => String(product._id) === String(items) || String(product.id) === String(items));
            if (itemInfo) {
                for (const item in cartItems[items]) {
                    try {
                        if (cartItems[items][item] > 0) {
                            totalAmount += Number(itemInfo.price) * Number(cartItems[items][item]);
                        }
                    } catch (error) {
                        console.error("Error computing line items pricing:", error);
                    }
                }
            }
        }
        return totalAmount;
    };

    const getUserCart = async (currentToken) => {
        // Fallback target initialization pattern
        const queryToken = currentToken || token;
        if (queryToken) {
            try {
                const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token: queryToken } });
                if (response.data.success) {
                    setCartItems(response.data.cartData);
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.error);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

   useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
        setToken(storedToken);
        getUserCart(storedToken);
    }
}, []);

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
        getUserCart
    };

    return (
        <ShopContext.Provider value={Value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;