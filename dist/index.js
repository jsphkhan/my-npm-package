"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = exports.subtract = exports.sleep = exports.multiply = exports.isValidName = exports.isProdEnv = exports.goToMapURL = exports.getUrlFromQuery = exports.getLogsFromESMPackage = exports.getFixedValue = exports.getCountryCodePrefix = exports.checkLength = void 0;
var _size2 = _interopRequireDefault(require("lodash/size"));
var _esmPackage = require("@jsphkhan/esm-package");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Common Utils
 */

var REGEX = {
  VALID_NAME: /^[\u0621-\u064A\u0660-\u0669a-zA-Z]+([\s][\u0621-\u064A\u0660-\u0669a-zA-Z]+)*$/
};
var sum = exports.sum = function sum(a, b) {
  console.log('** sum');
  return a + b;
};
var multiply = exports.multiply = function multiply(a, b) {
  console.log('** multiply');
  return a * b;
};
var subtract = exports.subtract = function subtract(a, b) {
  console.log('** subtract');
  return a - b;
};

/**
 * return fixed number
 * @param {Number} value
 * @param {Number} fixedBy
 * @returns {Number}
 */

var getFixedValue = exports.getFixedValue = function getFixedValue(value, fixedBy) {
  if (Number(value)) {
    return Number(value).toFixed(fixedBy);
  }
  return 0;
};

/**
 * return a resolve promise after given time interval
 * @param {Number} ms
 * @returns {Promise}
 */
var sleep = exports.sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

/**
 * Checks length of passed text is it is more than 3
 * @param {string} text
 * @returns {boolean}
 */
var checkLength = exports.checkLength = function checkLength(text) {
  return (0, _size2["default"])(text) >= 3;
};

/**
 * Checks if it is dev or prod environment
 * @returns {Boolean}
 */
var isProdEnv = exports.isProdEnv = function isProdEnv() {
  // prod env can be dev, stage or prod server eg. npm start
  // local is local dev env eg. npm run dev
  return process.env.NODE_ENV === 'production';
};

/**
 * get URL from queryObject
 * @param {Object} queryObj
 * @returns {String}
 */
var getUrlFromQuery = exports.getUrlFromQuery = function getUrlFromQuery(queryObj) {
  return Object.keys(queryObj).map(function (k) {
    return "".concat(k, "=").concat(queryObj[k]);
  }).join('&');
};

/**
 * go to map location for specific map url
 * @param {String} mapUrl
 */

var goToMapURL = exports.goToMapURL = function goToMapURL(mapUrl) {
  window.open(mapUrl);
};

/**
 * Return false is value is invalid.
 * @param {String} field
 * @returns {Boolean}
 */
var isValidName = exports.isValidName = function isValidName(field) {
  console.log('** isValidName');
  return REGEX.VALID_NAME.test(field);
};

/**
 * Return the country code prefix for selected language
 *  for en language eg: 966+
 * for ar language eg: +966
 * @param {String} countryCode
 * @param {Boolean} isArabic
 * @returns {String}
 */
var getCountryCodePrefix = exports.getCountryCodePrefix = function getCountryCodePrefix(countryCode, isArabic) {
  return isArabic ? "".concat(countryCode, "+") : "+".concat(countryCode);
};

/**
 * Runs functions from esm package
 * Prints logs
 * This is to test if tree shaking still works
 * when an ESM package is imported by a CommonJS package
 */
var getLogsFromESMPackage = exports.getLogsFromESMPackage = function getLogsFromESMPackage() {
  console.log('*** isServer: ', (0, _esmPackage.isServer)());
  console.log('*** isClient: ', (0, _esmPackage.isClient)());
  console.log('*** getAddOnNotFound', (0, _esmPackage.getAddOnNotFound)());
  console.log('*** findQitafPoints', (0, _esmPackage.findQitafPoints)(1000));
};