import express from "express";
import connect from "../database/database.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query(
      "INSERT INTO employees (id, first_name, last_name, email, phone_number, job_title, department, salary, hire_date, termination_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [req.body.first_name, req.body.last_name, req.body.email, req.body.phone_number, req.body.job_title, req.body.department, req.body.salary, req.body.hire_date, req.body.termination_date]
    );
    res.json({
      id: rows.insertId,
      ...req.body,
    });
  } catch (error) {
    console.log(error);
  }
});
