const convict = require("convict")('./config.json');

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