const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    pool.query(`INSERT INTO "favorites" ("user_id", "recipe_uri")
    VALUES ($1, $2)`, [req.user.id, req.body.uri])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
})

module.exports = router;