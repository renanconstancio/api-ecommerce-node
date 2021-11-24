// https://github.com/waldsonvital/sigep-node

import path from 'path';
import ejs from 'ejs';
import pdf from 'html-pdf';
import bwipjs from 'bwip-js';
import { Request, Response } from 'express';
import { generateBarcode128 } from '../utils/generateBarcode128';

export function printEtiquetas(request: Request, response: Response): void {
  const logoStoreTemplate = path.resolve(
    '..',
    '..',
    '..',
    '..',
    'services',
    'prints',
  );
  const ejsTemplate = path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    'views',
  );
  const htmlTemplate = `${ejsTemplate}/etiqueta.ejs`;

  const imgBase64 = 'data:image/png;base64,';

  const barCode128 = generateBarcode128({ code: 'PK405950706BR' });

  console.log(barcode);

  ejs.renderFile(
    htmlTemplate,
    {
      imgLogo: '/images/correios-logo.png',
      imgService: '/images/simbolo-sedex-expresso.png',
      codEtiqueta: `${imgBase64}${barCode128}`,
      qrCode: barcode,
      variavel: imgBase64,

      // Dados do destinatario
      destinatario: {
        destinatario: 'Renan Constancio',
        endereco: 'Nome da Rua',
        complemento: 'Nome da Rua',
        nr: '1010',
        cidade: 'Itápolis',
        uf: 'SP',
        cep: '14900-000',
      },

      // Dados do Remetente
      remetente: {
        remetente: 'asdf',
        cep: '14900-000',
      },
    },
    (error, html) => {
      if (error) {
        return response.status(505).json({ deu: 'asdfsd', dir: ejsTemplate });
      } else {
        response.end(html);

        // pdf
        //   .create(html, {
        //     format: 'A4',
        //     height: '138.11mm',
        //     width: '106.36mm',
        //     border: '5mm',
        //   })
        //   .toBuffer((err, buffer) => {
        //     if (err) return response.status(505).json('err');
        //     response.contentType('application/pdf');
        //     response.end(buffer);
        //   });
      }
    },
  );
}
