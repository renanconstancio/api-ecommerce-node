import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

interface IRequest {
  connect: string;
}

interface IResponse {
  token: string;
}

class CreateTokenStoreService {
  public async execute({
    connect = 'ecomnodedb2',
  }: IRequest): Promise<IResponse> {
    const token = sign({ connect: connect }, authConfig.jwt.secret);

    return {
      token,
    };
  }
}

export default CreateTokenStoreService;
