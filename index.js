const client = require('./elastic/client');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');

client.ping({
    requestTimeout: 30000,
}, function (error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});

app.use(bodyParser.json())

// enable CORS 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/search', function (req, res) {

    let body = {
        size: 200,
        from: 0,
        query: {
            match: {
                name: req.query['q']
            }
        }
    }

    client.search({ index: 'cities-index', body, type: 'cities-list' })
        .then(results => {
            res.send(results.hits.hits);
        })
        .catch(err => {
            console.log(err)
            res.send([]);
        });

})

app.listen(3001, function () {
    console.log('Express server listening on port 3000');
});