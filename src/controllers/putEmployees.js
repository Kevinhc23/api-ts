import express from 'express';
import query from '../database/query.js';

const router = express.Router();

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {first_name, last_name, email, phone_number, job_title, department, salary, hire_date, termination_date} = req.body;

        const result = await query(`UPDATE employees SET first_name = '${first_name}', last_name = '${last_name}', email = '${email}', phone_number = '${phone_number}', job_title = '${job_title}', department = '${department}', salary = '${salary}', hire_date = '${hire_date}', termination_date = '${termination_date}' WHERE id = ${id};`);
        res.status(200).json({message: `Employee with id ${id} updated successfully!`});
        
    } catch (error) {
        res.status(500).json({error: error.message});
    
    }
});

export default router;
