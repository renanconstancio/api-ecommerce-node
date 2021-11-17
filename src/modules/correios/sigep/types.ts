export interface ICep {
  cep: string;
  bairro: string;
  cidade: string;
  complemento2: string;
  end: string;
  uf: string;
}

export interface ICep2 {
  cep: string;
  bairro: string;
  cidade: string;
  comp: string;
  end: string;
  uf: string;
}

export interface IError {
  root: {
    Envelope: {
      Body: {
        Fault: {
          faultcode: string;
          faultstring: string;
          detail: { SigepClienteException: string };
        };
      };
    };
  };
}
