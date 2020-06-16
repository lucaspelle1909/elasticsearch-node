const client = require('../elastic/client');
const cities = require('../cities.json');

var bulk = [];

cities.forEach(city => {
    bulk.push({
        index: {
            _index: "cities-index",
            _type: "cities-list",
        }
    })
    bulk.push(city)
})
//perform bulk indexing of the data passed
client.bulk({ body: bulk }, function (err, response) {
    if (err) {
        console.log("Failed Bulk operation".red, err)
    } else {
        console.log("Successfully imported %s".green, cities.length);
    }
}); 