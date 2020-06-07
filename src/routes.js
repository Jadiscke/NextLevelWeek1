const express = require('express');


const router = express.Router();

const db = require('./database/db.js');



router.get('/', (req,res) => {
   return res.render(`index.njk`);
});

router.get('/create-point', (req,res) => {
   return res.render(`create-point.njk`);
});

router.get('/search', (req,res) => {

   

   db.all(`SELECT * FROM places`, function(err,rows) {
      if (err){
         return console.log(err);
      }

      console.log(rows);

      return res.render(`search.njk`, { places: rows } );

   });

   
});


module.exports = router;