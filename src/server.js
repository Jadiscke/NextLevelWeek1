const express = require('express');

const server = express();

server.use(express.urlencoded({extended:true}));




const port = process.env.PORT || 3000

server.listen(port, () => {

});