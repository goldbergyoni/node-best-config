const path = require('path');
const config = require('config');

// Read nested configuration property
const dbConfig = config.get('db.host');
console.log(dbConfig);

// Read ip which should be overriden by the environment variable in the start script
console.log(config.get('ip'));
