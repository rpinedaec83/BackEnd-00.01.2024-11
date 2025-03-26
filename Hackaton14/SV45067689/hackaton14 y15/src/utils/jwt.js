import jwt from 'jsonwebtoken';

export const generateToken = (user) => {    
    console.log('secret', process.env.SECRET);
    const token  = jwt.sign({id: user.id, name: user.name, email: user.email}, process.env.SECRET, {
        expiresIn: 86400 // 24 hours
    }); 

    return token; 
}