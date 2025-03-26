import bcrypt from 'bcrypt';

export const validatePassword = async (password, hashedPassword) => {
    const isValid = await bcrypt.compare(password, hashedPassword);     
    return isValid;
}