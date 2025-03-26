import jwt from 'jsonwebtoken'

export const ValidateToken = (req, res, next) => {  
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if(!token) {
            return res.status(401).json({message: 'Access Denied'});
        }

        const decoded = jwt.verify(token, process.env.SECRET);

        
        if(!decoded) {
            return res.status(401).json({message: 'Invalid Token'});
        }
        
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(400).json({message: 'Error en el middleware', error});
    }
}