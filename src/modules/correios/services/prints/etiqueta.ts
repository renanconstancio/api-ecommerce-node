import path from 'path';
import ejs from 'ejs';
import pdf from 'html-pdf';
import { Request, Response } from 'express';

export function printEtiquetas(request: Request, response: Response): void {
  const ejsTemplate = path.resolve(__dirname, '..', '..', 'services', 'prints');

  const htmlTemplate = `${ejsTemplate}/etiqueta.ejs`;

  ejs.renderFile(htmlTemplate, { variavel: 'teste' }, (error, html) => {
    if (error) {
      return response.status(505).json({ deu: 'asdfsd', dir: ejsTemplate });
    } else {
      // https://www.correios.com.br/enviar/encomendas/arquivo/nacional/guia-tecnico-embalagens-rpc_v1-1.pdf
      pdf
        .create(html, { format: 'A4', height: '138.11mm', width: '106.36mm' })
        .toBuffer((err, buffer) => {
          if (err) return response.status(505).json(err);

          response.contentType('application/pdf');
          response.end(buffer);
        });
    }
  });

  // console.log('Estou aqui');
  // pdf.create('asdfasd').toBuffer((err, buffer) => {
  //   if (err) return response.status(505).json(err);

  //   response.contentType('application/pdf');
  //   response.end(buffer);
  // });
}
