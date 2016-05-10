var path = require('path');
var fs = require('fs');
var ncp = require('ncp').ncp;

var argv = require('minimist')(process.argv.slice(2));

start();

function start() {
    resolveArgv();
}

function resolveArgv() {
    var command = argv._[0] || null;
    switch (command) {
        case 'init':
            init();
            break;
    }
}

function init() {
    ncp('./template', './test', {
        clobber: false
    }, function (err) {
        if (err) throw err;
    })
}