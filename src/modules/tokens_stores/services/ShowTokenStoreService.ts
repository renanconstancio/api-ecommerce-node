import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface IRequest {
  token: string;
}

interface ITokenPayload {
  connect: string;
  iat: number;
}

class ShowTokenStoreService {
  public async execute({ token }: IRequest): Promise<ITokenPayload> {
    try {
      const decodedToken = verify(token, authConfig.jwt.secret);

      return decodedToken as ITokenPayload;
    } catch {
      throw new AppError('Invalid JWT Token s.');
    }
  }
}

export default ShowTokenStoreService;
