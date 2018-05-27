const convict = require("convict")('./config.json');
convict.validate({allowed: 'strict'});
convict.loadFile('./my-local-config-overrides.json');

//Read from deep inside the config
console.log(convict.get("db.host"));
console.log(convict.get("ip"))