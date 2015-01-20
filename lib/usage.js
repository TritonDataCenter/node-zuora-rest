'use strict';

var validation = require('./validation');

/**
 * Wrapper for Usage operations
 *
 * @param opts {Object} - initialization options
 * @param opts.client {Object} - restify client wrapper to use
 * @param [opts.validation] {Object} - options for validator initialization
 * @returns {Transaction}
 * @constructor
 */
function Usage(opts) {
    if(!(this instanceof Usage)) {
        return new Usage(opts);
    }
    this.client = opts.client;
    this.validate = validation(opts.validation);
}

/**
 * Method for uploading usage as a CSV
 *
 * @param usage {Object} TBD
 * @param callback
 */
Usage.prototype.post = function(usage, callback) {
    // TODO: this.client.upload('/usage', 'usage.csv', 'text/csv', csvContent, callback);
};

module.exports = Usage;