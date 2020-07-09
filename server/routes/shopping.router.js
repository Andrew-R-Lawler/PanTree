const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    pool.query(`INSERT INTO "shopping_list" ("user_id", "list_item")
    VALUES ($1, $2)`, [req.user.id, req.body.text])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        })
})

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "shopping_list"
    WHERE "user_id" = $1`, [req.user.id])
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error', error);
        res.sendStatus(500);
    })
})

module.exports = router;