import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        // Extract token from request headers
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: 'Not Authorized. Login Again.' });
        }

        // Decode and verify the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET || "secret_key");
        
        // Attach the user ID to the request body for the next controller function
        req.body.userId = token_decode.id;
        
        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default authUser;