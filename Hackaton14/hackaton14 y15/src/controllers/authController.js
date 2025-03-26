import { User, Package, Location, sequelize} from '../models/db.js';
import { v4 as uuidv4 } from 'uuid';
import { HashPassword } from '../utils/HashPassword.js';
import { generateToken } from '../utils/jwt.js';
import { validatePassword } from '../utils/validatePassword.js';

export const register  = async(req, res) => {
    const {email, password, name, role} = req.body;
    try {
        const user = await User.findOne({where: {email: email}});
        if(user) {
            return res.status(300).json({message: 'User is alredy exit.'});
        }

        const newPass  = await HashPassword(password);        // Hash password
        const newUser = await User.create({
            oAuthId: uuidv4(),
            name: name,
            email: email,
            password: newPass,
            rol: role
        });

        newUser.password = undefined;


        const token  = generateToken(newUser)

        return res.status(200).json({message: 'User created successfully.', user: newUser, token});

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const login  = async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({where: {email: email}});
        if(!user) {
            return res.status(300).json({message: 'User is not exit.'});
        }


        const passIsValid  = validatePassword(password, user.password);        // Hash password
        
        if(!passIsValid) {
            return res.status(300).json({message: 'Password is not valid.'});
        }

        user.password = undefined;
        
        const token  = generateToken(user);

        return res.status(200).json({message: 'Login User successfully.', user: user, token});

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
