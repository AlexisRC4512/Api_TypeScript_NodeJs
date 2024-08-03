import { Request, Response } from 'express';
import { getMatrixStatistics } from '../services/matrixService';

/**
 * Maneja la solicitud POST para calcular estadísticas de matrices.
 * 
 * @param req - Objeto de solicitud Express que contiene las matrices en el cuerpo
 * @param res - Objeto de respuesta Express para enviar las estadísticas calculadas
 */
export const handleMatrixStats = (req: Request, res: Response): void => {
    const { Q, R } = req.body;
    
    if (!Array.isArray(Q) || !Array.isArray(R) || !Q.every(Array.isArray) || !R.every(Array.isArray)) {
        console.log('Invalid input:', req.body);
        res.status(400).json({ error: 'Invalid input' });
        return;                             
    }

    console.log('Received matrices:', { Q, R });

    const stats = getMatrixStatistics({ Q, R });

    console.log(stats);
    res.json(stats);
};