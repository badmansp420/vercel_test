import 'dotenv/config';
import { createPool } from '@vercel/postgres';

const pool = new createPool({
    connectionString: process.env.POSTGRES_URL,
})

export { pool };