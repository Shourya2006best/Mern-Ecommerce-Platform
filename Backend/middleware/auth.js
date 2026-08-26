import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    try {
   
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized. Login Again.",
            });
        }

        const [scheme, token] = authHeader.split(" ");

        if (scheme !== "Bearer" || !token) {
            return res.status(401).json({
                success: false,
                message: "Invalid authorization format.",
            });
        }

        
        const decoded = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET
        );

        req.userId = decoded.userId;

        next();

    } catch (error) {

        console.error("Auth middleware error:", error);

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token expired.",
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                success: false,
                message: "Invalid access token.",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Authentication failed.",
        });
    }
};

export default authUser;