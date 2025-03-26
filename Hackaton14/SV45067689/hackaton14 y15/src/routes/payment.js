import {Router} from 'express';
import { ValidateToken } from '../middleware/ValidateToken.js';
import { payByCulqi, payByStripe } from '../controllers/paymentController.js';

const router = Router();

router.post('/culqi', ValidateToken, payByCulqi);
router.post('/stripe', ValidateToken, payByStripe);

export default router;