 import { Request } from 'express';

 export type AuthUser = {

     id: number,
     email: string, 
     iat: number, 
     exp: number 
 }

export interface Auth extends Request
{
    user : AuthUser

}