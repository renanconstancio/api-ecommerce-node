import { NextFunction, Request, Response } from 'express';
import { verify, Secret } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface ITokenPayload {
  connect: string;
  iat: number;
  exp: number;
  sub: string;
  id: string;
}

/**
 * Class para verificacao do usuario authenticado
 * NOTA:
 * @param request Request
 * @param response Response
 * @param next NexFunction
 * @returns Dados de connection e de usuario
 */
export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.');
  }

  // Bearer sdlkfjsldkfjlsjfffdklfjdflksjflkjfdlk3405905
  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret);

    const decode = decodedToken as ITokenPayload;

    // Adicionar um paramentro de conexao dentro do express
    request.connect = decode.connect;

    // Adicionar um paramentro de usuario dentro do express
    request.user = {
      id: decode.id,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token.');
  }
}
