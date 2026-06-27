import express from "express";
import cors from 'cors';
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRoute.js";

const app=express();
const port = process.env.PORT || 4400
connectDB();
connectCloudinary();

// 1. Regular body parser
app.use(express.json());

// 2. THIS WILL STOP NODEMON FROM CRASHING WHEN A BAD REQUEST IS SENT
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ 
      success: false, 
      message: "The JSON you sent has a syntax error! Check your formatting." 
    });
  }
  next();
});
app.use(cors());

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
    res.send("API working");
});

app.listen(port,()=>console.log('server started on port  '+ port));