let express = require('express');
const { builtinModules } = require('module');
let routes = express.Router();

routes.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(JSON.stringify({
        users:[{
            name: 'Juan',
            email: 'juanribeirofx@gmail.com',
            id: 1
        }]
        
    }));

});

routes.get('/admin', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(JSON.stringify({
        users:[]
        
    }));

});

module.exports = routes;