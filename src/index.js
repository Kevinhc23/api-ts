import express from 'express';
import connect from './database/database.js';
import route from './routes/Route.js';
import cors from 'cors';
import config from './config/config.js';
import morgan from 'morgan';

const app = express();
const connection = connect();
const port = config.port;
const configCors = {
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 200
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors(configCors));

// Routes
app.use('/api', route);

// Start the server
connection.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
