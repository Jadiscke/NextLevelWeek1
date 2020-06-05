const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

router.get('/create-point', (req,res) => {
    res.sendFile(`${__dirname}/views/create-point.html`);
});

router.get('/search', (req,res) => {
    res.sendFile(`${__dirname}/views/search.html`);
});


module.exports = router;