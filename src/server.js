/**
 * Created by qiyanzi on 16-8-4.
 */
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

const HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

app.get('/api/heroes', (req, res)=> {
    res.send(HEROES);
});


app.get('/query', (req, res)=> {
    res.send(req.query.name);
});

app.get('/params/:name', (req, res)=> {
    res.send(req.params);
});

app.post('/header', (req, res)=> {
    res.send(req.get('name'));
});

app.post('/user', (req, res)=> {
    res.send(req.body.name);
});

app.post('/json', (req, res)=> {
    res.send(req.body);
});

app.listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
});

module.exports = app;