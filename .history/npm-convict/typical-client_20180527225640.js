const convict = require("convict")('./config.json');
this.convictInstance.validate({allowed: 'strict'});
console.log(convict.get(""))