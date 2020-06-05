const express = require('express');


const router = express.Router();



router.get('/', (req,res) => {
   return res.render(`index.njk`);
});

router.get('/create-point', (req,res) => {
   return res.render(`create-point.njk`);
});

router.get('/search', (req,res) => {
   return res.render(`search.njk`);
});


module.exports = router;