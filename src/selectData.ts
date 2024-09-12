import client, { connectDB, disconnectDB } from './db';

export async function getUserData(username: string) {
    const selectQuery = `SELECT * FROM users WHERE username = $1;`;

    try {
        await connectDB();
        const result = await client.query(selectQuery, [username]);
        return result.rows[0]; // Assuming one user is returned
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    } finally {
        await disconnectDB();
    }
}

// Example usage
// (async () => {
//     const user = await getUserData('Actual User');
//     console.log('Fetched user:', user);
// })();
