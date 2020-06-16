const elasticsearch = require('elasticsearch');
const config = require('../config');

const client = new elasticsearch.Client({
    hosts: [config.url],
    requestTimeout: 120000
});

module.exports = client;