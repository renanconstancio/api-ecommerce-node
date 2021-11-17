import { Client, createClientAsync } from 'soap';

const correiosURL = (type: string) =>
  `https://${type}.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl`;

export default class Api {
  static async clientSoap(): Promise<Client> {
    let url;
    if (!process.env.APPHOM) {
      url = correiosURL('apphom');
    } else {
      url = correiosURL('apps');
    }
    return await createClientAsync(url);
  }
}
