import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = Router();

const users = [
    { username: 'user1', password: bcrypt.hashSync('password1', 8) },
    { username: 'user2', password: bcrypt.hashSync('password2', 8) },
];
/**
 *@openapi
 *  Inicia sesion con una cuenta preestablecida
 * 
 * @param Request - Se ingresa el usuario y password
 * @returns retorna un token de jwt
 */
router.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(400).send({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    res.send({ token });
});


export default router;