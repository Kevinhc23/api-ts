import getEmployees from "../controllers/getEmployees.js";
import express from "express";
import postEmployees from "../controllers/postEmployees.js";
import putEmployees from "../controllers/putEmployees.js";
import deleteEmployees from "../controllers/deleteEmployees.js";


const route = express.Router();

route.use("/employees", getEmployees);
route.use("/employees", postEmployees);
route.use("/employees", putEmployees);
route.use("/employees", deleteEmployees);

export default route;