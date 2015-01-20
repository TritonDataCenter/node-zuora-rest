'use strict';

var validation = require('./validation');

/**
 * Wrapper for HMAC-signatures operations
 *
 * @param opts {Object} - initialization options
 * @param opts.client {Object} - restify client wrapper to use
 * @param [opts.validation] {Object} - options for validator initialization
 * @returns {Transaction}
 * @constructor
 */
function HMACSignature(opts) {
    if(!(this instanceof HMACSignature)) {
        return new HMACSignature(opts);
    }
    this.client = opts.client;
    this.validate = validation(opts.validation);
}

/**
 * Method for getting a new HMAC signature
 *
 * @param [opts=false] {Object} - refer to https://knowledgecenter.zuora.com/D_REST_API/B_REST_API_reference/HMAC_method

 * @param callback
 */
HMACSignature.prototype.get = function(opts, callback) {
    if (opts.uri.length > 0 && opts.uri[0] === '/') {
        opts.uri = this.client.baseUrl + opts.uri;
    }
    var errs = this.validate('hmacSignatureCreate', opts);
    if(errs) {
        setImmediate(function () {
            callback(errs);
        });
        return;
    }

    this.client.post('/hmac-signatures', opts, callback);
};

module.exports = HMACSignature;