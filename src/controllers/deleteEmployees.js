import express from 'express';
import connect from '../database/database.js';

const router = express.Router();

router.delete('/:id', async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('DELETE FROM employees WHERE id = ?', [req.params.id]);
        res.json({
            message: 'Employee deleted',
            rows
        });
    } catch (error) {
        console.log(error);
    }
}
);

export default router;