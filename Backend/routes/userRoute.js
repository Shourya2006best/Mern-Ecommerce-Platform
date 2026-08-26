import express from "express"
import {  loginUser, registerUser, refreshAccessToken, logoutUser } from "../controllers/userController.js";

const userRouter=express.Router();

userRouter.post('/login',loginUser);
userRouter.post('/logout',logoutUser);
userRouter.post('/register',registerUser);
userRouter.post('/refresh',refreshAccessToken);


export default userRouter;