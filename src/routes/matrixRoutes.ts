import express from 'express';
import { handleMatrixStats } from '../controllers/matrixController';


const router = express.Router();

router.post('/', handleMatrixStats);

export default router;