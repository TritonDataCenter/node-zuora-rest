'use strict';

/**
 * Wrapper for request to be used as a (almost) drop-in replacement for restify.createJsonClient that was used in prior versions
 */

var _ = require('lodash');
var request = require('request');

var JSONClient = function(opts) {
    if (!(this instanceof JSONClient)) {
        return new JSONClient(opts);
    }
    this.baseUrl = opts.url;

    this.defaultOpts = _.omit(opts, ['url']);
    _.defaults(this.defaultOpts, {
        json: true
    });

    this.call = function(path, opts, callback) {
        _.defaults(opts, this.defaultOpts);
        opts.url = this.baseUrl + path;
        request(opts, function(err, message, response) {
            var req = opts, res = message;
            callback(err, req, res, response);
        });
    };
};

JSONClient.prototype.basicAuth = function(user, password) {
    this.defaultOpts.auth = {
        user: user,
        password: password
    };
};

JSONClient.prototype.get = function(path, callback) {
    this.call(path, { method: 'GET' }, callback);
};

JSONClient.prototype.post = function(path, object, callback) {
    this.call(path, { method: 'POST', body: object }, callback);
};

JSONClient.prototype.put = function(path, object, callback) {
    this.call(path, { method: 'PUT', body: object }, callback);
};

JSONClient.prototype.del = function(path, callback) {
    this.call(path, { method: 'PUT' }, callback);
};

module.exports = JSONClient;