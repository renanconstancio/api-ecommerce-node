declare namespace Express {
  export interface Request {
    // string setada dentro do express
    user: {
      id: string;
    };
    // string setada dentro do express
    // vale de resaltar que pega a conexao do banco de dados
    connect: string;
  }
}
