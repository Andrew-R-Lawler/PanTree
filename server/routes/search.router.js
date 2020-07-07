const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:query', (req, res) => {
    console.log('req params query', req.params);
    axios.get(`https://api.edamam.com/search?app_key=${process.env.EDAMAM_API_KEY}&app_id=${process.env.EDAMAM_API_ID}&q=${req.params.query}`)
    .then((response) => {
        console.log('response', response.data);
        res.send(response.data.hits);
    }).catch((err) => {
        console.log('error', err);
        res.sendStatus(500);
    })
})


module.exports = router;