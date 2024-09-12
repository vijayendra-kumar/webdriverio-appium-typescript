import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();
// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_NAME:', process.env.DB_NAME);
// console.log('DB_PORT:', process.env.DB_PORT);

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
   });

export async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
    } catch (error) {
        console.error('Failed to connect to database:', error);
    }
}

export async function disconnectDB() {
    await client.end();
    console.log('Disconnected from PostgreSQL database');
}

export default client;
