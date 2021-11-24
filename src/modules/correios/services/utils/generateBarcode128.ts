import bwipjs from 'bwip-js';

export const generateBarcode128 = async ({
  code,
  height = 18,
  width = null,
}: {
  code: string;
  height?: number;
  width?: null | string;
}): Promise<string> => {
  const opt = {
    bcid: `code128`,
    text: code,
    scale: 4,
    height: height,
    includetext: false,
  };

  if (width) {
    opt.width = width;
  }

  const barcode = await bwipjs.toBuffer(opt);

  return Buffer.from(barcode).toString('base64');
};
