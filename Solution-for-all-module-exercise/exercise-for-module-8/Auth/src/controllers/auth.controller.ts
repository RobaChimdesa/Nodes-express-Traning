import { Request, Response } from 'express';
import { registerService, loginService } from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerService(req.body);
    res.status(201).json({
      status: 'success',
      message: 'User registered',
      data: user,
    });
  } catch (err: any) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { token, user } = await loginService(req.body.email, req.body.password);
    res.json({
      status: 'success',
      message: 'Login successful',
      token,
      user,
    });
  } catch (err: any) {
    res.status(401).json({ status: 'error', message: err.message });
  }
};