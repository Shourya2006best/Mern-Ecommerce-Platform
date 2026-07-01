import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import razorpay from "razorpay";
import crypto from "crypto";

// Gateway Initializations
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Global Currency Settings (Match this with your gateway configurations)
const currency = "usd"; 
const deliveryCharge = 10; // Fixed delivery fee in your store currency

// 1. Placing orders using Cash on Delivery (COD) Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Reset database cart upon successful order placement
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed Successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// 2. Placing orders using Stripe Method (Initializes checkout session)
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers; // Front-end base URL (e.g., http://localhost:5173)

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Map items structure to Stripe specifications
        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: `${item.name} (${item.size})`
                },
                unit_amount: item.price * 100 // Stripe accepts amount in cents
            },
            quantity: item.quantity
        }));

        // Push delivery fee as a separate line item
        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: deliveryCharge * 100
            },
            quantity: 1
        });

        // Initialize Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        });

        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// 3. Verify Stripe Payment Status
const verifyStripe = async (req, res) => {
    try {
        const { orderId, success, userId } = req.body;

        if (success === "true") {
            // Update order payment status flag and clear client cart data cache
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} });
            res.json({ success: true, message: "Payment Successful" });
        } else {
            // Remove incomplete authorization log from database cleanly
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Payment Failed" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// 4. Placing orders using Razorpay Method (Initializes Order Object)
const placeOrderRazorpay = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Razorpay",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Options configuration required by Razorpay API
        const options = {
            amount: amount * 100, // Razorpay processes amounts in subunits (paise/cents)
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString()
        };

        await razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.json({ success: false, message: error });
            }
            res.json({ success: true, order });
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// 5. Verify Razorpay Payment Signature
const verifyRazorpay = async (req, res) => {
    try {
        const { userId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Generate HMAC hex verification string following Razorpay security protocols
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (expectedSign === razorpay_signature) {
            // Get the order data relative to Razorpay order mapping record
            const orderInfo = await orderModel.findOne({ userId, paymentMethod: "Razorpay", payment: false }).sort({ date: -1 });
            
            if (orderInfo) {
                await orderModel.findByIdAndUpdate(orderInfo._id, { payment: true });
                await userModel.findByIdAndUpdate(userId, { cartData: {} });
                return res.json({ success: true, message: "Payment Successful" });
            }
        }
        
        res.json({ success: false, message: "Payment Verification Failed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// 6. Fetch All Orders (For Admin Dashboard View)
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// 7. Fetch Specific User Orders (For Customer Profile View)
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// 8. Update Order Status (From Admin Panel Select Dropdowns)
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: "Status Updated Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { 
    placeOrder, 
    placeOrderStripe, 
    verifyStripe,
    placeOrderRazorpay, 
    verifyRazorpay,
    allOrders, 
    userOrders, 
    updateStatus 
};