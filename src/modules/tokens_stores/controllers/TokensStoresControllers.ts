import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import AppError from '@shared/errors/AppError';
import CreateTokenStoreService from '../services/CreateTokenStoreService';
import ShowTokenStoreService from '../services/ShowTokenStoreService';

export default class TokensStoresControllers {
  public async index(request: Request, response: Response): Promise<Response> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError('JWT Token is missing.');
    }
    // Bearer sdlkfjsldkfjlsjfffdklfjdflksjflkjfdlk3405905
    const [, token] = authHeader.split(' ');

    const showTokenStore = new ShowTokenStoreService();
    const showToken = await showTokenStore.execute({ token: token });

    return response.json(showToken);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { connect } = request.body;

    const createTokenStore = new CreateTokenStoreService();

    const tokenStore = await createTokenStore.execute({
      connect,
    });

    return response.json(classToClass(tokenStore));
  }
}
