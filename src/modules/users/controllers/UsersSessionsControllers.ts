import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import CreateSessionUserService from '../services/CreateSessionUserService';

export default class UsersSessionsControllers {
  public async create(request: Request, response: Response): Promise<Response> {
    const { connect, email, password } = request.body;

    const createSessionToken = new CreateSessionUserService();

    const session = await createSessionToken.execute({
      connect,
      email,
      password,
    });

    return response.json(classToClass(session));
  }
}
