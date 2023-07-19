import dotenv from 'dotenv';
dotenv.config();

const config = {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.PORT,
    }


export default config;