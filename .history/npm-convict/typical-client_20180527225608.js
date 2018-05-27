const convict = require("convict")('./config.json');
this.convictInstance.validate({allowed: 'strict'});

class ConfigurationService {
  constructor(configFilePath) {
    this.convictInstance = convict(configFilePath);
    
  }

  static factor(configFilePath){
    return new ConfigurationService(configFilePath);
  }


  getValue(keyName){
    return this.convictInstance.get(keyName);
  }
}

module.exports = ConfigurationService;