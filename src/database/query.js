import connect from './database.js';

const query = async (query, params) => {
    const connection = await connect();
    try {
        const [rows] = await connection.execute(query, params);
        return rows;
    } catch (error) {
        console.log(error);
        return null; // Opcional: puedes manejar el error como prefieras
    } finally {
        connection.release();
    }
};

export default query;
