const convict = require("convict")('./config.json');
convict.validate({allowed: 'strict'});
config.loadFile(
console.log(convict.get("db.host"));