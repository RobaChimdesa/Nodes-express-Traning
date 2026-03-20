const jwt = require('jsonwebtoken')
import { config } from '../config/env.config';
// import { User } from '../interface/user.interface';
import { User } from '../interface/user-interface'


const { JWT_SECRET }= config;

// Generate token
export function generateToken(user : User): string 
{

  const token =  jwt.sign({ id: user.id, email: user.email }, JWT_SECRET , 
   {
    expiresIn: '1h'
  });

  return token;
}