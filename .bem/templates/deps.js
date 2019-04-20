'use strict';

var EOL = require('os').EOL;

module.exports = function (entity, naming) {
    return [
        "[{",
        "    mustDeps : { block : 'i-bem-dom' },",
        "    shouldDeps : ['radio', 'dom', 'jquery']",
        "}]",
        ""
    ].join(EOL);
};
