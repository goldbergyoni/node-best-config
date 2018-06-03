# Node Config Battle

A scientific comparison of Node.js config packages ::

## Compared packages

*   [convict](https://www.npmjs.com/package/convict)
*   [config](https://www.npmjs.com/package/config)
*   [nconf](https://www.npmjs.com/package/nconf)

## Selected requirements

All tests/comparisons should include the following steps we selected as requirements to represent a reasonable workflow.

1.  Define a hierarchical configuration file
2.  Override one value with an environment variable
3.  Override another key with provided command arguments
4.  Override a few keys with additional file contents (for example local development environment definitions)
5.  One key should be a password and its value should not be set within the JSON, but rather through an environment variable, if a supplied key is missing or has an incorrect value, fail fast with exception
6. Fail fast if one mandatoiry config key wasn't provided
7. Cast keys to specific pre-defined types
8. Define default values for keys
