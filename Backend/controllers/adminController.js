
import jwt from "jsonwebtoken"; 
import {
    generateAccessToken,
    generateRefreshToken,
} from "../utils/token.js";

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const adminId = "admin";
             
             const adminaccessToken = generateAccessToken(
            adminId
        );

        const adminrefreshToken = generateRefreshToken(
            adminId
        );

        res.cookie("adminRefreshToken", adminrefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000
});
            res.status(200).json({ success: true, accessToken: adminaccessToken });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const adminLogout = async (req, res) => {

    res.clearCookie("adminRefreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    return res.json({
        success: true,
        message: "Admin logged out successfully"
    });
};

export const adminRefreshAccessToken = async (req, res) => {
    try {

        const refreshToken =
            req.cookies.adminRefreshToken;


        if (!refreshToken) {
            return res.status(401).json({
                success: false,
                message: "Admin refresh token missing"
            });
        }

        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        if (decoded.userId !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Invalid admin refresh token"
            });
        }

        const accessToken =
            generateAccessToken("admin");


        return res.status(200).json({
            success: true,
            accessToken
        });


    } catch (error) {

        console.log(
            "Admin refresh error:",
            error
        );

        return res.status(401).json({
            success: false,
            message: "Invalid or expired admin refresh token"
        });
    }
};