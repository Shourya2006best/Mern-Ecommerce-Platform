import express from "express"
import { adminLogin, adminLogout, adminRefreshAccessToken} from "../controllers/adminController.js";

const adminRouter=express.Router();

adminRouter.post('/login',adminLogin);
adminRouter.post('/logout',adminLogout);
adminRouter.post('/refresh',adminRefreshAccessToken);


export default adminRouter;