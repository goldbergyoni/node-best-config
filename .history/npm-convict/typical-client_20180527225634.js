const convict = require("convict")('./config.json');
this.convictInstance.validate({allowed: 'strict'});
console.log(convict.g)

    return this.convictInstance.get(keyName);

module.exports = ConfigurationService;