import {Router} from 'express';
import { createpackageSystem, deletepackageSystem, getpackageSystemById, getpackageSystems, updatepackageSystem } from '../controllers/packageController.js';
import { ValidateToken } from '../middleware/ValidateToken.js';

const router = Router();

router.get('/getPackage', ValidateToken ,getpackageSystems);
router.get('/getPackage/:id', ValidateToken , getpackageSystemById);
router.post('/createPackage', ValidateToken, createpackageSystem);
router.put('/updatePackage/:id', ValidateToken, updatepackageSystem);
router.delete('/deletePackage/:id', ValidateToken, deletepackageSystem);


export default router;