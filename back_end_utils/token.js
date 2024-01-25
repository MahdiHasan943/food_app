import Jwt  from "jsonwebtoken";
export const generateToken = (payload) => {
    return Jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn:'1d'})
    
}
export const varifyToken = (token) => {
    return Jwt.verify(token, process.env.TOKEN_SECRET)
    
}