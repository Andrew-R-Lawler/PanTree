const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "favorites"
    WHERE "user_id" = $1`, [req.user.id])
    .then((result) => {
        let urls = result.rows.map(r => {
            return r.recipe_uri
        })
        let params = urls.map(url => {
            return { app_id: process.env.EDAMAM_API_ID, app_key: process.env.EDAMAM_API_KEY, r: url }
        })
        let promises = params.map(params => {
            return axios.get('https://api.edamam.com/search', {params})
        })
        Promise.all(promises)
        .then((results) => {
            const data = results.map(r => r.data)
            res.send(data);
        }).catch((err) => {
            console.log('error', err);
        })
    }).catch((err) => {
        console.log('error GET favorites', err);
        res.sendStatus(500);
    })
})

router.post('/', rejectUnauthenticated, (req, res) => {
    pool.query(`INSERT INTO "favorites" ("user_id", "recipe_uri")
    VALUES ($1, $2)`, [req.user.id, req.body.uri])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
})

router.delete('/', rejectUnauthenticated, (req, res) => {
    pool.query(`DELETE FROM "favorites"
    WHERE "recipe_uri" = $1`, [req.body.uri])
    .then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error', error);
        res.sendStatus(500);
    })
})

module.exports = router;