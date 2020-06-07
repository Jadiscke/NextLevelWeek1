const express = require('express');


const router = express.Router();

const db = require('./database/db.js');

router.use(express.urlencoded({extended: true}));

router.get('/', (req,res) => {
   return res.render(`index.njk`);
});

router.get('/create-point', (req,res) => {
   return res.render(`create-point.njk`);
});

router.post('/create-point', (req,res)=>{
   console.log(req.body);
   res.redirect('/');
});

router.get('/search', (req,res) => {

   

   db.all(`SELECT * FROM places`, function(err,rows) {
      if (err){
         return console.log(err);
      }

      console.log(rows);
      const total = rows.length
      return res.render(`search.njk`, { places: rows, total } );

   });

   
});


module.exports = router;