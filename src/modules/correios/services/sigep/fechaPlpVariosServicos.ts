import Api from './api';
import { ISigepError, ISIGEPFechaPlpVariosServicos } from './types';
import { IPLP } from '../preListaDePostagem/plp';
import { IObjetoPostalItem } from '../preListaDePostagem';
import exportXml from './exportXml';

export default async function fechaPlpVariosServicos(
  plp: IPLP,
  objeto_postal: IObjetoPostalItem[],
  requestData: ISIGEPFechaPlpVariosServicos,
) {
  const client = await Api.clientSoap();

  const JS2XML = await exportXml(plp, objeto_postal);

  return new Promise((resolve, reject: any) => {
    client.fechaPlpVariosServicos(
      { xml: JS2XML, ...requestData },
      (error: ISigepError, result: { return: string }) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.return);
        }
      },
    );
  });
}
