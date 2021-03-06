const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "pantry_items"
    WHERE "user_id" = $1
    ORDER BY "id" ASC`, [req.user.id])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/pantree', error);
        res.sendStatus(500);
    })
});

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    pool.query(`INSERT INTO "pantry_items" ("user_id", "item_name", "quantity")
    VALUES ($1, $2, $3)`, [req.user.id, req.body.pantry_item, req.body.quantity])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error POST /api/pantree', error);
        res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params);
    
    pool.query(`DELETE FROM "pantry_items"
    WHERE "id" = $1`, [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error DELETE /api/pantree', error);
        res.sendStatus(500);
    })
})

router.put('/:id', rejectUnauthenticated, (req, res) => {
    pool.query(`UPDATE "pantry_items"
    SET "item_name" = $1, "quantity" = $2
    WHERE "id" = $3`, [req.body.item_name, req.body.quantity, req.params.id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error POST /api/pantree', error);
        res.sendStatus(500);        
    })
})

module.exports = router;