import express from 'express';
import { 
    placeOrder, 
    placeOrderStripe, 
    verifyStripe,
    allOrders, 
    userOrders, 
    updateStatus 
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// --- Admin Panel Routes ---

orderRouter.post('/list', adminAuth, allOrders);

orderRouter.post('/status', adminAuth, updateStatus);

// --- Checkout & Payment Intialization Routes ---

orderRouter.post('/place', authUser, placeOrder);

orderRouter.post('/stripe', authUser, placeOrderStripe);


// --- Payment Verification Routes ---

orderRouter.post('/verifyStripe', authUser, verifyStripe);


// --- User Profile Routes ---

orderRouter.post('/userorders', authUser, userOrders);

export default orderRouter;