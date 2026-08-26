import userModel from "../models/userModel.js"; 
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 
import {
    generateAccessToken,
    generateRefreshToken,
} from "../utils/token.js";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || "secret_key");
}


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

    
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

   
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const accessToken = generateAccessToken(
            user._id.toString()
        );

        const refreshToken = generateRefreshToken(
            user._id.toString()
        );

        res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000
});

        res.status(200).json({ success: true, accessToken });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
       
        if (isMatch) {
            
        const accessToken = generateAccessToken(
            user._id.toString()
        );

        const refreshToken = generateRefreshToken(
            user._id.toString()
        );

        res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000
});

            res.status(200).json({ success: true, accessToken });

        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

const logoutUser = async (req, res) => {
    try {

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });

        return res.json({
            success: true,
            message: "Logged out successfully",
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


const refreshAccessToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token missing",
            });
        }


        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const user = await userModel.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({
                message: "User no longer exists",
            });
        }

        const newAccessToken = generateAccessToken(
            user._id.toString()
        );

        return res.status(200).json({
            accessToken: newAccessToken,
        });

    } catch (error) {
        console.error("Refresh token error:", error);

        return res.status(401).json({
            message: "Invalid or expired refresh token",
        });
    }
};



export { loginUser, registerUser, logoutUser, refreshAccessToken };