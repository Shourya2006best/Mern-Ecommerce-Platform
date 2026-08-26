import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized. Login Again.",
            });
        }

        const [scheme, token] =
            authHeader.split(" ");


        if (
            scheme !== "Bearer" ||
            !token
        ) {
            return res.status(401).json({
                success: false,
                message: "Invalid authorization format.",
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET
        );

        if (decoded.userId !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Admin access required.",
            });
        }

        req.adminId = decoded.userId;


        next();

    } catch (error) {

        console.log("Admin Auth Error:", error);

        return res.status(401).json({
            success: false,
            message: "Invalid or expired admin access token.",
        });
    }
};

export default adminAuth;