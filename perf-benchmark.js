const benchmark = require('benchmark');

let convict;
let config;
let nconf;

const suite = new benchmark.Suite();

suite
	.add('Run convict benchmark', () => {
		// Load convict
		convict = require('convict')('./config/default.json');

		// Load override file
		convict.loadFile('./config/overrides.json');

		// Read key for first time
		console.log(convict.get('db.host'));

		// Read the same key for the second time
		console.log(convict.get('db.host'));

		// Read overriden key
		console.log(convict.get('ip'));

		// Read key overriden by environment variables
		console.log(convict.get('port'));
	})
	.add('Run config benchmark', () => {
		config = require('config');

		// Read key for first time
		console.log(config.get('db.host'));

		// Read the same key again
		console.log(config.get('db.host'));

		// Read overriden key
		// TODO Add

		// Read key overriden by environment variables
		// TODO Add
	})
	.add('Run nconf benchmark', () => {
		// TODO Add nconf benchmark
	})
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.run({ async: true });
