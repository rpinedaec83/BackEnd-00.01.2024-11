import User from "../model/User.Model.js"
import { EncryptPassword, ValidatePassword } from "../utils/hashPassword.js"; 
import { generateToken } from '../helpers/jwt.js';


export const createUser = async(req, res) => {
    try {
        const {username, email, password, role}  = req.body;
        
        const existingUser = await User.findOne({email})

        if(existingUser) {
            return res.status(404).json({msg: `El usuari con el email: ${email}, ya existe.`})
        }

     
        const hashPass = await EncryptPassword(password)
    
        const user = new User({username, email, password: hashPass, role: role || 'user'})
        const saveUser = await user.save()
    
        return res.status(200).json(saveUser)
    } catch (error) {
        return res.status(400).json({msg: 'Error al crear el usuario', error})
    }
}

export const loginUser = async(req, res) => {
    try {
        const {email, password}  = req.body;
        const existingUser = await User.findOne({email})

   
        if(!existingUser) {
            return res.status(404).json({msg: `El usuari con el email: ${email}, no existe.`})
        }
        const isValidate = await ValidatePassword(password, existingUser.password)
     
        if(!isValidate) {
            return res.status(404).json({msg: `La contrasena es incorrecta.`})    
        }
             
        const userForToken = {
            username: existingUser.username,
            email: existingUser.email,
            role: existingUser.role,
            id: existingUser._id
        }

        const token  = generateToken(userForToken)

        return res.status(200).json({msg: `sucessfully`, token})

    } catch (error) {
        return res.status(400).json({msg: 'Error al logearte a la aplicacion.', error})
    }
}