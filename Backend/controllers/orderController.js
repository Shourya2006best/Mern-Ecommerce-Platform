import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import Razorpay from "razorpay";
import crypto from "crypto";


const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY
);


const currency = "usd";
const deliveryCharge = 10;


const placeOrder = async (req, res) => {
    try {
        const userId = req.userId;

        const {
            items,
            amount,
            address
        } = req.body;


        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized",
            });
        }


        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        };


        const newOrder =
            new orderModel(orderData);

        await newOrder.save();

        await userModel.findByIdAndUpdate(
            userId,
            {
                cartData: {}
            }
        );


        return res.status(200).json({
            success: true,
            message: "Order Placed Successfully",
        });

    } catch (error) {

        console.log(
            "Place COD order error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



const placeOrderStripe = async (req, res) => {
    try {

        const userId = req.userId;

        const {
            items,
            amount,
            address
        } = req.body;

        const { origin } = req.headers;


        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized",
            });
        }


        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now(),
        };


        const newOrder =
            new orderModel(orderData);

        await newOrder.save();

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,

                product_data: {
                    name: `${item.name} (${item.size})`,
                },

                unit_amount:
                    Math.round(
                        Number(item.price) * 100
                    ),
            },

            quantity: item.quantity,
        }));

        line_items.push({
            price_data: {
                currency: currency,

                product_data: {
                    name: "Delivery Charges",
                },

                unit_amount:
                    Math.round(
                        deliveryCharge * 100
                    ),
            },

            quantity: 1,
        });


        const session =
            await stripe.checkout.sessions.create({

                success_url:
                    `${origin}/verify?success=true&orderId=${newOrder._id}`,

                cancel_url:
                    `${origin}/verify?success=false&orderId=${newOrder._id}`,

                line_items,

                mode: "payment",
            });


        return res.status(200).json({
            success: true,
            session_url: session.url,
        });

    } catch (error) {

        console.log(
            "Stripe order error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


const verifyStripe = async (req, res) => {
    try {

        const {
            orderId,
            success
        } = req.body;

        const userId = req.userId;


        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized",
            });
        }

        if (success === "true") {

            const order =
                await orderModel.findOne({
                    _id: orderId,
                    userId,
                });


            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found",
                });
            }


            await orderModel.findByIdAndUpdate(
                orderId,
                {
                    payment: true
                }
            );


            await userModel.findByIdAndUpdate(
                userId,
                {
                    cartData: {}
                }
            );


            return res.status(200).json({
                success: true,
                message: "Payment Successful",
            });
        }


        await orderModel.findOneAndDelete({
            _id: orderId,
            userId,
        });


        return res.status(200).json({
            success: false,
            message: "Payment Failed",
        });

    } catch (error) {

        console.log(
            "Stripe verification error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


const allOrders = async (req, res) => {
    try {

        const orders =
            await orderModel.find({});


        return res.status(200).json({
            success: true,
            orders,
        });

    } catch (error) {

        console.log(
            "Get all orders error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


const userOrders = async (req, res) => {
    try {

        const userId = req.userId;


        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized",
            });
        }


        const orders =
            await orderModel.find({
                userId
            });


        return res.status(200).json({
            success: true,
            orders,
        });

    } catch (error) {

        console.log(
            "Get user orders error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


const updateStatus = async (req, res) => {
    try {

        const {
            orderId,
            status
        } = req.body;


        if (!orderId || !status) {
            return res.status(400).json({
                success: false,
                message: "Order ID and status are required",
            });
        }


        const updatedOrder =
            await orderModel.findByIdAndUpdate(
                orderId,
                {
                    status
                },
                {
                    new: true
                }
            );


        if (!updatedOrder) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }


        return res.status(200).json({
            success: true,
            message: "Status Updated Successfully",
        });

    } catch (error) {

        console.log(
            "Update order status error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export {
    placeOrder,
    placeOrderStripe,
    verifyStripe,
    allOrders,
    userOrders,
    updateStatus,
};