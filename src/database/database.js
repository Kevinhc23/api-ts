import Pool from 'mysql2/promise'
import config from '../config/config.js'


const pool = Pool.createPool({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database,
    waitForConnections: true,
})

const connect = async () => {
    try {
        const connection = await pool.getConnection()
        // console.log('Database connected successfully!')
        return connection
    } catch (error) {
        console.log('Database connection failed!')
    }
}

export default connect
