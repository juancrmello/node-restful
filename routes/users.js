module.exports = app => {

    app.get('/users', (req, res) => {

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
    
    app.get('/users/admin', (req, res) => {
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(JSON.stringify({
            users:[]
            
        }));
    
    });

}