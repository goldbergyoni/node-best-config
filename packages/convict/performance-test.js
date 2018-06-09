const benchmark = require('benchmark');
let convict;

const suite = new benchmark.Suite();

suite
	.add('Run default performance test', () => {
		// Load convict
		convict = require('convict')('./config.json');

		// Read key for first time
		console.log(convict.get('db.host'));

		// Read the same key for the second time
		console.log(convict.get('db.host'));

		// Read overriden key
		console.log(convict.get('ip'));

		// Read key overriden by environment variables
		console.log(convict.get('port'));
	})
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.run({ async: true });
