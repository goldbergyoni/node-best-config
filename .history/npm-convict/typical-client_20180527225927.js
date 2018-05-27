const convict = require("convict")('./config.json');
convict.validate({allowed: 'strict'});
console.log(convict.get("db.host"));