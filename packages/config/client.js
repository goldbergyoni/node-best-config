const path = require('path');
const config = require('config');

// Read nested configuration property
const dbConfig = config.get('Customer.dbConfig');
console.log(dbConfig);
