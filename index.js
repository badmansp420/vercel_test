import express from "express";
import 'dotenv/config'
import { pool } from './config.js';
const app = express();
import { sql } from "@vercel/postgres";


// app.get('/', (req, res) => {

//     res.status(200).json({ message: "OK" })
// })

app.get('/', async (req, res) => {
    const result = await pool.sql`select * from admin`
    if (!result) {
        return res.status(404).json({ message: "Network Error" });
    }
    res.status(200).json(result.rows);
})

app.get('/admin', async (req, res) => {
    const result = await pool.sql`select * from admin`
    if (!result) {
        return res.status(404).json({ message: "Network Error" });
    }
    res.status(200).json(result.rows);
})

app.listen(process.env.PORT, () => {
    console.log("Server Start on : " + process.env.PORT);
});