String.prototype.format = function () {
    'use strict';

    var newString = this;

    function replace(string, search, replacement) {
        return string.replace(new RegExp(search.replace('{', '\\{').replace('}', '\\}'), 'g'), replacement.toString());
    }

    if (arguments[0] !== 'undefined') {
        switch (typeof arguments[0]) {
            case 'object':
                var key;

                for (key in arguments[0]) {
                    if (key in arguments[0]) {
                        newString = replace(newString, '{' + key + '}', arguments[0][key]);
                    }
                }
                break;
            default:
                if (arguments.length > 1) {
                    var i;

                    for (i = 0; i < arguments.length; i += 1) {
                        newString = replace(newString, '{' + i + '}', arguments[i]);
                    }
                } else {
                    newString = replace(newString, '{}', arguments[0]);
                }
                break;
        }
    }

    return newString;
};