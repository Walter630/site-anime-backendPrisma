import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import type {StringValue} from 'ms'

dotenv.config();
// (1) Se o env não existir, lance erro já na inicialização
if(!process.env.TOKEN_SECRET || !process.env.TOKEN_REFRESH_SECRET) {
   throw new Error('Faltam TOKEN_SECRET ou TOKEN_REFRESH_SECRET no .env');

}

const TOKEN_SECRET: jwt.Secret = process.env.TOKEN_SECRET;
const TOKEN_REFRESH_SECRET: jwt.Secret = process.env.TOKEN_REFRESH_SECRET;
const TOKEN_EXPIRES_IN = (process.env.TOKEN_EXPIRES_IN || '1m') as StringValue;
const TOKEN_REFRESH_EXPIRES_IN = (process.env.TOKEN_REFRESH_EXPIRES_IN || '7d') as StringValue;

interface payloadToken{
    id: string
    email: string
    role?: string
}


export function createAcessToken(payload: payloadToken): string{
    const options: jwt.SignOptions = {expiresIn: TOKEN_EXPIRES_IN}
    return jwt.sign({ ...payload }, TOKEN_SECRET, options);
}

export function createRefreshToken(payload: payloadToken): string{
    const options: jwt.SignOptions = {expiresIn: TOKEN_REFRESH_EXPIRES_IN}
    return jwt.sign({ ...payload }, TOKEN_REFRESH_SECRET, options);
}

export function verifyCreateToken(token: string): any{
    return jwt.verify(token, TOKEN_SECRET)
}   

export function refreshToken(payload: payloadToken): string {
    return jwt.sign(payload, TOKEN_REFRESH_SECRET, {expiresIn: TOKEN_REFRESH_EXPIRES_IN})
}

export function verifyRefreshToken(token: string): any {
    return jwt.verify(token, TOKEN_REFRESH_SECRET)
}