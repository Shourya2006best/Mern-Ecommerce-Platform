import express from 'express';
import { 
    placeOrder, 
    placeOrderStripe, 
    verifyStripe,
    placeOrderRazorpay, 
    verifyRazorpay,
    allOrders, 
    userOrders, 
    updateStatus 
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// --- Admin Panel Routes ---
// Fetches all orders from the database for the admin dashboard panel
orderRouter.post('/list', adminAuth, allOrders);
// Updates order status (e.g., Packing, Shipped, Delivered) from admin select dropdowns
orderRouter.post('/status', adminAuth, updateStatus);

// --- Checkout & Payment Intialization Routes ---
// Endpoint for standard Cash on Delivery (COD) payment processing
orderRouter.post('/place', authUser, placeOrder);
// Endpoint to initialize a Stripe checkout session link
orderRouter.post('/stripe', authUser, placeOrderStripe);
// Endpoint to initialize a Razorpay order entity object
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);

// --- Payment Verification Routes ---
// Validates whether a Stripe webhook redirect session was completed successfully
orderRouter.post('/verifyStripe', authUser, verifyStripe);
// Validates cryptographic signature payload match responses from Razorpay checkouts
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay);

// --- User Profile Routes ---
// Fetches all orders belonging specifically to the logged-in customer profile
orderRouter.post('/userorders', authUser, userOrders);

export default orderRouter;