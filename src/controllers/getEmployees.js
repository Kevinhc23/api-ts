import express from 'express';
import connect from '../database/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM employees');
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
}
);

router.get('/:id', async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
}
);

export default router;