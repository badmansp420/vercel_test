import express from "express";
import 'dotenv/config'
import { pool } from './config.js';
import { sql } from "@vercel/postgres";


await pool.connect();
const app = express();


app.get('/', async (req, res) => {
    try {
        const result = await pool.sql`select * from admin ORDER BY ID ASC`
        if (!result) {
            res.status(404).json({ message: "Network Error" });
        }
        res.status(200).json(result.rows);
    } catch (error) {
        // console.log(error);
        res.status(404).json({ message: "Network Error" });
    }
    finally {
        pool.release();
    }
})

app.get('/admin', async (req, res) => {
    try {
        const result = await pool.sql`select * from admin `
        if (!result) {
            res.status(404).json({ message: "Network Error" });
        }
        res.status(200).json(result.rows);
    } catch (error) {
        // console.log(error);
        res.status(404).json({ message: "Network Error" });
    } finally {
        pool.release();
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server Start on : " + process.env.PORT);
});