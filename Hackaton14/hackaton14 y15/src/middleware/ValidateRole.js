export const ValidateRole = (req, res, next) => {
    try {
        const user = req.user;
        if(user.rol !== 'admin') {
            return res.status(401).json({message: 'Access Denied'});
        } 
        
        next();
    } catch (error) {
        return res.status(400).json({message: 'Error en el middleware', error});
    }
}   