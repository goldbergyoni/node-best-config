const convict = require("convict")('./config.json');
this.convictInstance.validate({allowed: 'strict'});

    return this.convictInstance.get(keyName);

module.exports = ConfigurationService;