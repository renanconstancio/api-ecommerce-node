import bwipjs from 'bwip-js';
import { completeZeroNumber } from './completeZeroNumber';

export const generateDatamatrix = async ({
  postagem,
  remetente,
  plp,
}: {
  postagem: string[];
  remetente: string;
  plp: string;
}): Promise<string> => {
  const numero_remetente = completeZeroNumber(remetente.numero_remetente);
  let string = postagem.nacional.cep_destinatario;

  string =
    string + completeZeroNumber(postagem.destinatario.numero_end_destinatario);
  string = string + remetente.cep_remetente;
  string = string + numero_remetente;
  string =
    string + this._digitoVerificadorCEP(postagem.nacional.cep_destinatario);
  string = string + '51';
  string = string + postagem.numero_etiqueta;
  string =
    string +
    this._getServicosAdicionais(
      postagem.servico_adicional.codigo_servico_adicional,
    );
  string = string + plp.cartao_postagem;
  string = string + postagem.codigo_servico_postagem;
  string = string + '01';
  string = string + numero_remetente;
  string =
    string +
    completeZeroNumber(postagem.servico_adicional.valor_declarado).substr(1, 5);
  string =
    string + this._phoneLenght(postagem.destinatario.telefone_destinatario);
  string = string + '-00.000000';
  string = string + '-00.000000';
  string = string + '|';

  // datamatrix
  const qrcode = await bwipjs.toBuffer({
    bcid: 'datamatrix',
    text: string,
    rows: 48,
    columns: 48,
  });

  return Buffer.from(qrcode).toString('base64');
};
