import client, { connectDB, disconnectDB } from './db';

async function createTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(50) NOT NULL
        );
    `;

    try {
        await connectDB();
        await client.query(createTableQuery);
        console.log('Table "users" created successfully');
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        await disconnectDB();
    }
}

createTable();
