var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');

module.exports = (function (argument) {
    var config;
    if (!argument) {
        // return default
        config = requireIfExist('./config.js');
    } else {
        // use specific config
        var configPath = './config_' + argument + '.js';
        config = requireIfExist(configPath);
    }

    return config;
})(argv.config);

function requireIfExist(path) {
    if (!path) return;
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (err) {
        console.log('Please create config using \'create command\'');
        return;
    }
    return require(path);
}