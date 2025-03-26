import {Router} from 'express';
import { ValidateToken } from '../middleware/ValidateToken.js';
import { createLocation, deleteLocation, getLocation, getLocationById, updateLocation } from '../controllers/locationController.js';
import { ValidateRole } from '../middleware/ValidateRole.js';

const router = Router();

// Adminsitracion de locaciones solo disponible para clientes admin
router.get('/getLocation', ValidateToken, getLocation);
router.get('/getLocation/:id', ValidateToken, getLocationById);
router.post('/createLocation', ValidateToken, createLocation);
router.put('/updateLocation/:id', ValidateToken, updateLocation);
router.delete('/deleteLocation/:id', ValidateToken, ValidateRole, deleteLocation);


export default router;