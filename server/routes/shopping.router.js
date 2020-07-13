const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', rejectUnauthenticated, (req, res) => {
    pool.query(`INSERT INTO "shopping_list" ("user_id", "list_item")
    VALUES ($1, $2)`, [req.user.id, req.body.text])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        })
})

router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "shopping_list"
    WHERE "user_id" = $1
    ORDER BY "id" ASC`, [req.user.id])
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error', error);
        res.sendStatus(500);
    })
})

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    pool.query(`DELETE FROM "shopping_list"
    WHERE "id" = $1`, [req.params.id])
    .then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error', error);
        res.sendStatus(500);
    })
})

router.put('/', rejectUnauthenticated, (req, res) => {
    pool.query(`UPDATE "shopping_list"
    SET "list_item" = $1
    WHERE "id" = $2`, [req.body.list_item, req.body.id])
    .then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error PUT /api/shopping', error);
        res.sendStatus(500);
    })
})

module.exports = router;