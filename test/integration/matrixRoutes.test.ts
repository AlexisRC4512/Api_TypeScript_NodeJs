import jwt from 'jsonwebtoken';
import request from 'supertest';
import app from '../../src/app';

const generateFakeToken = () => {
    const token = jwt.sign({ userId: 'test-user' }, '5a2e441e03c08b7a15619fd0df6f347d', { expiresIn: '1h' });
    return token;
};

describe('POST /stats', () => {
    it('debe calcular estadísticas de la matriz que le llega', async () => {
        const token = generateFakeToken();

        const response = await request(app)
            .post('/stats')
            .set('Authorization', `Bearer ${token}`)
            .send({
                Q: [
                    [-0.5025707110324165, 0.7620734962887138, 0.4082482904638624],
                    [-0.5743665268941904, 0.058621038176054796, -0.8164965809277259],
                    [-0.6461623427559643, -0.6448314199366038, 0.4082482904638633]
                ],
                R: [
                    [-13.928388277184121, -8.759089535136406, -3.5897907930886896],
                    [0, -0.5275893435844937, -1.0551786871689883],
                    [0, 0, 6.661338147750939e-16]
                ]
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            max: 0.7620734962887138,
            min: -13.928388277184121,
            average: -1.6337373945731726,
            totalSum: -29.407273102317106,
            isDiagonal: false
        });
    });

    it('debe devolver un 400 si los datos son inválidos', async () => {
        const token = generateFakeToken();

        const response = await request(app)
            .post('/stats')
            .set('Authorization', `Bearer ${token}`)
            .send({ invalid: 'data' });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid input' });
    });
});