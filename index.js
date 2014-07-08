var Cookie = require('cookies');
var LocalStore = require('local-store');
var SessionStore = window.sessionStorage;

exports.set = function (key, val, cookieOptions) {
    Cookie.set(key, val, cookieOptions);
    LocalStore.enabled && LocalStore.set(key, val);
    SessionStore && SessionStore.setItem(key, val);
};

exports.get = function (key) {
    if (SessionStore && SessionStore.getItem(key)) {
        return SessionStore.getItem(key);
    }

    if (LocalStore.enabled && LocalStore.get(key)) {
        return LocalStore.get(key);
    }

    if (Cookie.get(key)) {
        return Cookie.get(key);
    }

    return undefined;
};

exports.sync = function(key){

};

