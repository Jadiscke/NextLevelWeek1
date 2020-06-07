const express = require('express');


const router = express.Router();

const db = require('./database/db.js');

router.use(express.urlencoded({extended: true}));

router.get('/', (req,res) => {
   return res.render(`index.njk`);
});

router.get('/create-point', (req,res) => {

   return res.render(`create-point.njk`, {saved: false});
});

router.post('/create-point', (req,res)=>{


  const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
   `;

   ({ image, name, address, address2, state, city, items } = req.body);

   const values = [image,name,address, address2,state,city,items];
   console.log(values);
   db.run(query, values, function(err){
      if (err){
         return console.log(err);
     }

     console.log("cadastrado com sucesso");
     console.log(this);

     res.render('/create-point.njk', {saved: true});
   });
});

router.get('/search', (req,res) => {

   const search = req.query.search;

   if (search ===""){
      return res.render(`search.njk`, { places: [], total: 0 } )
   }

   db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows) {
      if (err){
         return console.log(err);
      }

      console.log(rows);
      const total = rows.length
      return res.render(`search.njk`, { places: rows, total } );

   });

   
});


module.exports = router;