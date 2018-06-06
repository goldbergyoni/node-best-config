const fs = require('fs');
const nconf = require('nconf');

nconf
	.argv()
	.env() // Override all config values with environment
	.file({ file: 'config.json' }) // Load default configuration file
	.file({ file: 'overrides.json' }); // Load overrides

// Overriden by environment variable
console.log(nconf.get('database'));

// Overriden by overrides file
console.log(nconf.get('db'));
