import express from 'express';
import matrixRoutes from './routes/matrixRoutes';
import setupSwagger from './config/swaggerConfig';
import authMiddleware from './middlewares/authMiddleware';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';


dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 4000;
app.use(express.json());
setupSwagger(app);
/**
 * @openapi
 * /stats:
 *   post:
 *     summary: Calcular estadísticas para matrices
 *     description: Recibe matrices, calcula estadísticas y devuelve los resultados.
 *     requestBody:
 *       description: Las matrices que deben ser procesadas
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Q:
 *                 type: array
 *                 items:
 *                   type: array
 *                   items:
 *                     type: number
 *               R:
 *                 type: array
 *                 items:
 *                   type: array
 *                   items:
 *                     type: number
 *     responses:
 *       200:
 *         description: Estadísticas de las matrices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 max:
 *                   type: number
 *                 min:
 *                   type: number
 *                 average:
 *                   type: number
 *                 totalSum:
 *                   type: number
 *                 isDiagonal:
 *                   type: boolean
 *       400:
 *         description: Entrada inválida
 */


app.use('/stats', authMiddleware, matrixRoutes);
app.use('/auth', authRoutes);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    const nodeEnv = process.env.NODE_ENV
    console.log(nodeEnv)
});

export default app;