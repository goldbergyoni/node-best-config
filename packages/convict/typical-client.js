const convict = require('convict')('./config.json');
convict.validate({ allowed: 'strict' });
convict.loadFile('./my-local-config-overrides.json');

// Read from deep inside the config
console.log(convict.get('db.host'));

// Read from an override file
console.log(convict.get('ip'));

// Read key overriden by environment variable
console.log(convict.get('port'));
