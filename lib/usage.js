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
 * @param [opts=false] {Object} - refer to https://knowledgecenter.zuora.com/D_REST_API/B_REST_API_reference/HMAC_method

 * @param callback
 */
Usage.prototype.post = function(usage, callback) {

};

module.exports = Usage;