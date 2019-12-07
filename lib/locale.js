
const fs = require('fs');
const path = require('path');
const osLocale = require('os-locale');
const locales = fs.readdirSync(path.join(__dirname, "..", "locales")).map(i => path.basename(i, ".json"));

String.prototype.format = function(...args) {
    return this.replace(/{(\d+)}/g, (s, n) => {
        return args[n];
    });
};

Array.prototype.contains = function(e) {
    return this.indexOf(e) >= 0;
}

class Locale {

    constructor() {

        let locale = (osLocale.sync() || "en").slice(0, 2);
        
        if(locales.indexOf(locale) === -1) {
            this._locale = "en";
        } else {
            this._locale = locale;
        }

        this._data = require(path.join(__dirname, "..", "locales", `${this._locale}.json`)) || {};
        
    }

    getLocale() {
        return this._locale;
    }

    /**
     * @param {String} type 
     * @param  {...any} args 
     */
    getString(type, ...args) {
        let data = this._data[type];
        return data.format(...args);
    }

}

module.exports = Locale;