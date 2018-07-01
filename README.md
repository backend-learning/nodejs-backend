# nodejs-backend

A simple backend for learning backend technology.

## install dependencies
```bash
npm install
```

## Start server
```bash
npm start
```


## Add API
Add api in `src/server.js` file, here is an example:
```javascript
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
```

that implement `GET` all `heroes`.
