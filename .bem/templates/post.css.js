'use strict';

var EOL = require('os').EOL;

module.exports = function (entity, naming) {
    return [
        ":block(" + entity.block + "){",
        "",
        "   &:elem(" + entity.elem + "){",
        "   }",
        "}",
        "",
        ":block(" + entity.block + "):mod(key val){",
        "}",
        ""
    ].join(EOL);
};
