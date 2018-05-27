const convict = require("convict")('./config.json');
convict.validate({allowed: 'strict'});
convict.loadFile(
console.log(convict.get("db.host"));