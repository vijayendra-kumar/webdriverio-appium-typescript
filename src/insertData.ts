import client, { connectDB, disconnectDB } from './db';

async function insertUser(username: string, password: string) {
    const insertQuery = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id;`;

    try {
        await connectDB();
        const result = await client.query(insertQuery, [username, password]);
        console.log('User inserted with ID:', result.rows[0].id);
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        await disconnectDB();
    }
}

// Example usage
 insertUser('Actual User', 'Test@123');
