const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "pantry_items"
    WHERE "user_id" = $1`, [req.user.id])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/pantree', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

module.exports = router;