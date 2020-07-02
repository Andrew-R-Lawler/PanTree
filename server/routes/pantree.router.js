const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

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

module.exports = router;