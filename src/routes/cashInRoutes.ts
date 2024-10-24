import { Router } from 'express';
import { generateQRCode } from '../controllers/cashInController';

const router = Router();

//Rota para gerar QR Code
router.post('/generateQRCode', generateQRCode);

export default router;