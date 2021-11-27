interface IMailConfig {
  driver: 'ethereal' | 'ses';
  host: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'dcisuporteitapolis@gmail.com',
    pass: 'd96857432e',
  },
  defaults: {
    from: {
      email: 'renanhconstancio@gmail.com',
      name: 'Renan Mail Teste',
    },
  },
} as IMailConfig;
