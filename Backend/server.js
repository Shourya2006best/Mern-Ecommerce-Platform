import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import adminRouter from "./routes/adminRoute.js";

const app=express();
const port = process.env.PORT || 4400
connectDB();
connectCloudinary();


app.use(express.json());
app.use(cookieParser());


app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ 
      success: false, 
      message: "The JSON you sent has a syntax error! Check your formatting." 
    });
  }
  next();
});
app.use(cors({
    origin: [
      "https://admin-dashboard-nine-roan-90.vercel.app",
      "https://frontend-dashboard-gamma-ashy.vercel.app",
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    credentials: true
}));

app.use('/api/users',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order', orderRouter);
app.use('/api/admin', adminRouter);

app.get('/',(req,res)=>{
    res.send("API working");
});

app.listen(port,()=>console.log('server started on port  '+ port));