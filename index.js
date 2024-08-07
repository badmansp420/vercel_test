import express from "express";
import 'dotenv/config'
import { pool } from './config.js';

const app = express();
await pool.connect();



app.get('/', async (req, res) => {
    try {
        const result = await pool.query(`select * from admin ORDER BY ID ASC`);
        if (!result) {
            res.status(404).json({ message: "Network Error" });
        }
        res.status(200).json(result.rows);


    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Server Error" });
    }


})

app.get('/admin', async (req, res) => {
    try {
        const result = await pool.query('select * from admin');
        if (!result) {
            res.status(404).json({ message: "Network Error" });
        }
        res.status(200).json(result.rows);

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Internal Server Error" });
    }


})



app.listen(process.env.PORT, () => {
    console.log("Server Start on : " + process.env.PORT);
});