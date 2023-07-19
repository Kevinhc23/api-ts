import router from "../controllers/getEmployees.js";
import express from "express";
import cors from "cors";



const route = express.Router();

route.use("/employees", router);

export default route;