const express = require('express');
const path = require('path');
const server = express();
const routes = require(`${__dirname}/routes.js`);

const nunjucks = require ("nunjucks");

nunjucks.configure("src/views", {
    express: server,
    noCache: true,
});



server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname,'..','public')));

server.use(routes);

const port = process.env.PORT || 3000

server.listen(port, () => {

});