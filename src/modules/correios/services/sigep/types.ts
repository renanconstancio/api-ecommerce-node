export interface ISIGEPCep {
  cep: string;
  bairro: string;
  cidade: string;
  complemento2: string;
  end: string;
  uf: string;
}

export interface ISIGEPCep2 {
  cep: string;
  bairro: string;
  cidade: string;
  comp: string;
  end: string;
  uf: string;
}

export interface ISIGEPSolicitaEtiqueta {
  tipoDestinatario: string;
  identificador: string;
  idServico: string;
  qtdEtiquetas: number;
  usuario: string;
  senha: string;
}

export interface ISIGEPVerificaServico {
  codAdministrativo: string;
  numeroServico: string;
  cepOrigem: string;
  cepDestino: string;
  usuario: string;
  senha: string;
}

export interface ISIGEPBuscaStatusCartaoPostagem {
  numeroCartaoPostagem: string;
  usuario: string;
  senha: string;
}

export interface ISIGEPFechaPlpVariosServicos {
  idPlpCliente: number;
  cartaoPostagem: string;
  listaEtiquetas: string[];
  usuario: string;
  senha: string;
}

export interface ISIGEPSolicitaXmlPlp {
  idPlpMaster: number;
  usuario: string;
  senha: string;
}

interface ISIGEPServicos {
  codigo: string;
  dataAtualizacao: string;
  datajAtualizacao: string;
  descricao: string;
  horajAtualizacao: string;
  id: string;
  servicoSigep: {
    categoriaServico: string;
    chancela: {
      chancela: string;
      dataAtualizacao: string;
      descricao: string;
      id: number;
    };
    descricao: string;
    exigeDimensoes: boolean;
    exigeValorCobrar: boolean;
    imitm: number;
    pagamentoEntrega: string;
    remessaAgrupada: string;
    restricao: string;
    servico: number;
    ssiCoCodigoPostal: string;
  };
  servicosAdicionais: string[];
  tipo1Codigo: string;
  tipo2Codigo: string;
  vigencia: {
    dataFinal: string;
    dataInicial: string;
    datajFim: number;
    datajIni: number;
    id: number;
  };
}

interface ISIGEPCartaoPostagem {
  codigoAdministrativo: string;
  dataAtualizacao: string;
  dataVigenciaFim: string;
  dataVigenciaInicio: string;
  datajAtualizacao: number;
  datajVigenciaFim: number;
  datajVigenciaInicio: number;
  horajAtualizacao: number;
  numero: string;
  servicos: ISIGEPServicos[];
  //TODO: Mapear resto dos campos
}

interface ISIGEPContrato {
  cartoesPostagem: ISIGEPCartaoPostagem[];
  //TODO: Mapear resto dos campos
}

export interface ISIGEPCliente {
  contratos: ISIGEPContrato[];
  dataAtualizacao: string;
  datajAtualizacao: number;
  descricaoStatusCliente: string;
  horajAtualizacao: number;
  inscricaoEstadual: string;
  statusCodigo: string;
  cnpj: string;
  nome: string;
  id: number;
}

export interface ISIGEPBuscaCliente {
  idCartaoPostagem: string;
  idContrato: string;
  usuario: string;
  senha: string;
}

export interface ISigepError {
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
