/**
 * Common Utils
 */

import _size from 'lodash/size';
import { getAddOnNotFound, findQitafPoints, isServer, isClient } from '@jsphkhan/esm-package';
var REGEX = {
  VALID_NAME: /^[\u0621-\u064A\u0660-\u0669a-zA-Z]+([\s][\u0621-\u064A\u0660-\u0669a-zA-Z]+)*$/
};
export var sum = function sum(a, b) {
  console.log('** sum');
  return a + b;
};
export var multiply = function multiply(a, b) {
  console.log('** multiply');
  return a * b;
};
export var subtract = function subtract(a, b) {
  console.log('** subtract');
  return a - b;
};

/**
 * return fixed number
 * @param {Number} value
 * @param {Number} fixedBy
 * @returns {Number}
 */

export var getFixedValue = function getFixedValue(value, fixedBy) {
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
export var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

/**
 * Checks length of passed text is it is more than 3
 * @param {string} text
 * @returns {boolean}
 */
export var checkLength = function checkLength(text) {
  return _size(text) >= 3;
};

/**
 * Checks if it is dev or prod environment
 * @returns {Boolean}
 */
export var isProdEnv = function isProdEnv() {
  // prod env can be dev, stage or prod server eg. npm start
  // local is local dev env eg. npm run dev
  return process.env.NODE_ENV === 'production';
};

/**
 * get URL from queryObject
 * @param {Object} queryObj
 * @returns {String}
 */
export var getUrlFromQuery = function getUrlFromQuery(queryObj) {
  return Object.keys(queryObj).map(function (k) {
    return "".concat(k, "=").concat(queryObj[k]);
  }).join('&');
};

/**
 * go to map location for specific map url
 * @param {String} mapUrl
 */

export var goToMapURL = function goToMapURL(mapUrl) {
  window.open(mapUrl);
};

/**
 * Return false is value is invalid.
 * @param {String} field
 * @returns {Boolean}
 */
export var isValidName = function isValidName(field) {
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
export var getCountryCodePrefix = function getCountryCodePrefix(countryCode, isArabic) {
  return isArabic ? "".concat(countryCode, "+") : "+".concat(countryCode);
};

/**
 * Runs functions from esm package
 * Prints logs
 * This is to test if tree shaking still works
 * when an ESM package is imported by a CommonJS package
 */
export var getLogsFromESMPackage = function getLogsFromESMPackage() {
  console.log('*** isServer: ', isServer());
  console.log('*** isClient: ', isClient());
  console.log('*** getAddOnNotFound', getAddOnNotFound());
  console.log('*** findQitafPoints', findQitafPoints(1000));
};