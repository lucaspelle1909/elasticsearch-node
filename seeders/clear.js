const client = require('../elastic/client');

client.indices.delete({
    index: '_all',
}, function (err, response) {
    if (err) {
        console.log("Failed Delete operation", err)
    } else {
        console.log("Successfully delete operation", response);
    }
});