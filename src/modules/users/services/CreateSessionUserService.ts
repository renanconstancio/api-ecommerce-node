import AppError from '@shared/errors/AppError';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import authConfig from '@config/auth';
import Cliente from '../../cliente/typeorm/entities/Cliente';
import ClienteRepository from '../../cliente/typeorm/repositories/ClienteRepository';

interface IRequest {
  email: string;
  connect: string;
  password: string;
}

interface IResponse {
  user: Cliente;
  token: string;
}

class CreateSessionUserService {
  public async execute({
    connect = 'connect',
    email,
    password,
  }: IRequest): Promise<IResponse> {
    const clienteRepository = getCustomRepository(ClienteRepository);
    const user = await clienteRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordConfimed = await compare(password, user.senha);

    if (!passwordConfimed) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const token = sign(
      {
        id: user.id,
        email: user.email,
        name: user.nome,
        admin: user.admin,
        connect: connect,
        scope: [],
      },
      authConfig.jwt.secret,
    );

    return {
      user,
      token,
    };
  }
}

export default CreateSessionUserService;
