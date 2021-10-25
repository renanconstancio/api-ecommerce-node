declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    connect: string;
  }
}
