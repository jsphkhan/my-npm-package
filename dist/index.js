"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = exports.subtract = exports.sleep = exports.multiply = exports.isValidName = exports.isProdEnv = exports.goToMapURL = exports.getUrlFromQuery = exports.getFixedValue = exports.getCountryCodePrefix = exports.checkLength = void 0;

var _size2 = _interopRequireDefault(require("lodash/size"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Common Utils
 */
var REGEX = {
  VALID_NAME: /^[\u0621-\u064A\u0660-\u0669a-zA-Z]+([\s][\u0621-\u064A\u0660-\u0669a-zA-Z]+)*$/
};

var sum = function sum(a, b) {
  console.log('** sum');
  return a + b;
};

exports.sum = sum;

var multiply = function multiply(a, b) {
  console.log('** multiply');
  return a * b;
};

exports.multiply = multiply;

var subtract = function subtract(a, b) {
  console.log('** subtract');
  return a - b;
};
/**
 * return fixed number
 * @param {Number} value
 * @param {Number} fixedBy
 * @returns {Number}
 */


exports.subtract = subtract;

var getFixedValue = function getFixedValue(value, fixedBy) {
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


exports.getFixedValue = getFixedValue;

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
/**
 * Checks length of passed text is it is more than 3
 * @param {string} text
 * @returns {boolean}
 */


exports.sleep = sleep;

var checkLength = function checkLength(text) {
  return (0, _size2["default"])(text) >= 3;
};
/**
 * Checks if it is dev or prod environment
 * @returns {Boolean}
 */


exports.checkLength = checkLength;

var isProdEnv = function isProdEnv() {
  // prod env can be dev, stage or prod server eg. npm start
  // local is local dev env eg. npm run dev
  return process.env.NODE_ENV === 'production';
};
/**
 * get URL from queryObject
 * @param {Object} queryObj
 * @returns {String}
 */


exports.isProdEnv = isProdEnv;

var getUrlFromQuery = function getUrlFromQuery(queryObj) {
  return Object.keys(queryObj).map(function (k) {
    return "".concat(k, "=").concat(queryObj[k]);
  }).join('&');
};
/**
 * go to map location for specific map url
 * @param {String} mapUrl
 */


exports.getUrlFromQuery = getUrlFromQuery;

var goToMapURL = function goToMapURL(mapUrl) {
  window.open(mapUrl);
};
/**
 * Return false is value is invalid.
 * @param {String} field
 * @returns {Boolean}
 */


exports.goToMapURL = goToMapURL;

var isValidName = function isValidName(field) {
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


exports.isValidName = isValidName;

var getCountryCodePrefix = function getCountryCodePrefix(countryCode, isArabic) {
  return isArabic ? "".concat(countryCode, "+") : "+".concat(countryCode);
};

exports.getCountryCodePrefix = getCountryCodePrefix;