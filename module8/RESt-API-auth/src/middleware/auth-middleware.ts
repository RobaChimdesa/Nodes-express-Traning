
 import { Response, NextFunction } from 'express';

const jwt = require('jsonwebtoken');

import { Auth } from '../interface/auth-interface';
import { config } from '../config/env.config';

export function authMiddleware(req : Auth, res: Response, next : NextFunction) {
  const authHeader = req.headers.authorization;
  const { JWT_SECRET }= config;


  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    console.log(decoded);
    
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}
