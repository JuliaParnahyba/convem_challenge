import { Request, Response } from 'express';

//Função para gerar QR Code
export const generateQRCode = (req: Request, res: Response) => {
    //lógica para gerar QR Code
    const qrCodeData = { qrCode: 'QR Code gerado com sucesso!' };
    res.json(qrCodeData);
}