const client = require('../elastic/client');

client.indices.create({
    index: 'cities-index'
}, function (error, response, status) {
    if (error) {
        console.log(error);
    } else {
        console.log("created a new index", response);
    }
});