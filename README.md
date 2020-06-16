# elasticsearch-node
Search engine from all cities in the world with ElasticSearch and Node

## How to run

### Download ElasticSearch Image and run the elastic server

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.7.1

docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.7.1
```

### Run seeders

```
node seeders/insert-index.js

node seeders/insert-data.js
```

### Start server

```
node index.js
```
