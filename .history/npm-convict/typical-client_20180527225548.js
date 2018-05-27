const convict = require("convict")(;

class ConfigurationService {
  constructor(configFilePath) {
    this.convictInstance = convict(configFilePath);
    this.convictInstance.validate({allowed: 'strict'});
  }

  static factor(configFilePath){
    return new ConfigurationService(configFilePath);
  }


  getValue(keyName){
    return this.convictInstance.get(keyName);
  }
}

module.exports = ConfigurationService;