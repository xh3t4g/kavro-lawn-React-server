import express from 'express'
import db from './db.js'

const router = express.Router();

router.post('/register', (req, res) => {

    const {login, passwor} = req.body;

    const sql = `INSERT INTO users (login, password) VALUES (?, ?)
    `;

    db.run(sql, [login, passwor], function(err) {
        if (err) {
            return res.status(500).json({
                error: err.message
            })
        }

        res.json({
            message: "пользователь создан",
            id: this.lastID
        })
    })
})

export default router;
