const express = require('express');


const router = express.Router();



router.get('/', (req,res) => {
   return res.render(`index.html`);
});

router.get('/create-point', (req,res) => {
   return res.render(`create-point.html`);
});

router.get('/search', (req,res) => {
   return res.render(`search.html`);
});


module.exports = router;