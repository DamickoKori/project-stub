'use strict';

var EOL = require('os').EOL;

module.exports = function (entity, naming) {
    return [
        "block('"+ entity.block + "').elem('"+ entity.elem + "')(",
        "    tag()(''),",
        "    addJs()(true)",
        ");",
        ""
    ].join(EOL);
};
