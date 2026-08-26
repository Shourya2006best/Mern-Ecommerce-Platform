import userModel from "../models/userModel.js";


const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;
           const userId = req.userId;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData || {};

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

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


const updateCart = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body;
           const userId = req.userId;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData || {};

        if (quantity === 0) {
            // 1. Remove the size key if it exists
            if (cartData[itemId]) {
                delete cartData[itemId][size];

                // 2. Remove the itemId key if no sizes remain
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        } else {
            // Update quantity normally
            if (!cartData[itemId]) {
                cartData[itemId] = {};
            }
            cartData[itemId][size] = quantity;
        }



        await userModel.findByIdAndUpdate(userId, { cartData },{ new: true });
        res.json({ success: true, message: "Cart Updated" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


const getUserCart = async (req, res) => {
    try {
           const userId = req.userId;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData || {};

        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addToCart, updateCart, getUserCart };