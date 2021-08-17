/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/StyleSheet.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/StyleSheet.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #faf8ef;\\r\\n  font-family: Arial, sans-serif;\\r\\n  font-size: 17px;\\r\\n  color: #776e65;\\r\\n}\\r\\n#pageWrap {\\r\\n  width: 500px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n#header-container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n#header-container-left {\\r\\n  margin-top: 30px;\\r\\n  width: 50%;\\r\\n}\\r\\n#header-container-right {\\r\\n  margin-top: 30px;\\r\\n  width: 50%;\\r\\n}\\r\\nh1 {\\r\\n  font-size: 80px;\\r\\n  font-weight: bold;\\r\\n  margin: 0px;\\r\\n}\\r\\nhr {\\r\\n  opacity: 0.7;\\r\\n  margin-top: 35px;\\r\\n  margin-bottom: 35px;\\r\\n}\\r\\nspan {\\r\\n  font-weight: bold;\\r\\n  text-decoration-line: underline;\\r\\n  text-decoration-style: solid;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.scoreBox {\\r\\n  text-align: center;\\r\\n  font-weight: bold;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n.scoreData {\\r\\n  background-color: #b8a99f;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border-radius: 3px;\\r\\n  margin-left: 5px;\\r\\n  padding: 10px 10% 0px 10%;\\r\\n}\\r\\n.head {\\r\\n  color: #e9dfd5;\\r\\n  font-size: 12px;\\r\\n}\\r\\n.val {\\r\\n  color: white;\\r\\n  font-size: 25px;\\r\\n}\\r\\n#newGameButton {\\r\\n  margin-top: 52px;\\r\\n  background-color: #8a7766;\\r\\n  width: 110px;\\r\\n  color: #fefffb;\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n  border-radius: 3px;\\r\\n  cursor: pointer;\\r\\n  float: right;\\r\\n}\\r\\n.gridBox {\\r\\n  margin-top: 23px;\\r\\n  margin-bottom: 35px;\\r\\n  background-color: #b8aa9f;\\r\\n  text-align: center;\\r\\n  font-size: 55px;\\r\\n  font-weight: bolder;\\r\\n  line-height: 1.8;\\r\\n  width: 500px;\\r\\n  height: 500px;\\r\\n  border-radius: 5px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n.tRow {\\r\\n  z-index: 5;\\r\\n  width: 503px;\\r\\n  height: 21%;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n.tile {\\r\\n  z-index: 5;\\r\\n  width: 107px;\\r\\n  height: 107px;\\r\\n  background-color: #ccc0b4;\\r\\n  border-radius: 3pxS;\\r\\n}\\r\\n.gridElement {\\r\\n  position: absolute;\\r\\n  width: 107px;\\r\\n  height: 107px;\\r\\n  color: #f9f6f2;\\r\\n  background-color: #ccc0b4;\\r\\n  border-radius: 3px;\\r\\n  z-index: 5;\\r\\n}\\r\\na:link {\\r\\n  color: #7a6f6c;\\r\\n  font-weight: bolder;\\r\\n}\\r\\na:visited {\\r\\n  color: #7a6f6c;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n#line {\\r\\n  width: 300px;\\r\\n  background-color: #776e65;\\r\\n}\\r\\n.par {\\r\\n  line-height: 1.7;\\r\\n}\\r\\n#feedback {\\r\\n  position: fixed;\\r\\n  transform: rotate(90deg);\\r\\n  transform-origin: left;\\r\\n  top: 220px;\\r\\n  padding: 5px 8px 14px 8px;\\r\\n  background-color: #bbafa1;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  font-size: 13px;\\r\\n  font-stretch: expanded;\\r\\n  font-weight: bold;\\r\\n  letter-spacing: 0.08em;\\r\\n  border-top-left-radius: 4px;\\r\\n  border-top-right-radius: 4px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n#feedback:hover {\\r\\n  background-color: #8a7766;\\r\\n}\\r\\n#donate {\\r\\n  background-color: #8a7766;\\r\\n  width: 122px;\\r\\n  padding: 8px 0;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  margin-top: 30px;\\r\\n  border-radius: 3px;\\r\\n  position: relative;\\r\\n  left: 100px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n#donateBTC {\\r\\n  background-color: #8a7766;\\r\\n  width: 150px;\\r\\n  padding: 10px 0;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  border-radius: 3px;\\r\\n  position: relative;\\r\\n  left: 238px;\\r\\n  bottom: 39px;\\r\\n  cursor: pointer;\\r\\n}\\r\\nimg {\\r\\n  position: relative;\\r\\n  max-width: 15px;\\r\\n  top: 3px;\\r\\n}\\r\\nfooter {\\r\\n  text-align: center;\\r\\n  margin-bottom: 200px;\\r\\n}\\r\\n.gridElement-0 {\\r\\n  display: none;\\r\\n}\\r\\n.gridElement-2 {\\r\\n  color: #776e65;\\r\\n  background-color: #eee4da;\\r\\n}\\r\\n.gridElement-4 {\\r\\n  color: #776e65;\\r\\n  background-color: #eee1c9;\\r\\n}\\r\\n.gridElement-8 {\\r\\n  background-color: #f3b27a;\\r\\n}\\r\\n.gridElement-16 {\\r\\n  background-color: #f69664;\\r\\n}\\r\\n.gridElement-32 {\\r\\n  background-color: #f77c5f;\\r\\n}\\r\\n.gridElement-64 {\\r\\n  background-color: #f75f3b;\\r\\n}\\r\\n.gridElement-128 {\\r\\n  background-color: #edd073;\\r\\n  font-size: 46px;\\r\\n  line-height: 107.5px;\\r\\n}\\r\\n.gridElement-256 {\\r\\n  background-color: #edcc62;\\r\\n  font-size: 46px;\\r\\n  line-height: 107.5px;\\r\\n}\\r\\n.gridElement-512 {\\r\\n  background-color: #edc950;\\r\\n  font-size: 46px;\\r\\n  line-height: 107.5px;\\r\\n}\\r\\n.gridElement-1024 {\\r\\n  background-color: #edc53f;\\r\\n  font-size: 36px;\\r\\n  line-height: 107.5px;\\r\\n}\\r\\n.gridElement-2048 {\\r\\n  background-color: #edc22e;\\r\\n  font-size: 36px;\\r\\n  line-height: 107.5px;\\r\\n}\\r\\n.gridElement-higher {\\r\\n  background-color: #3c3a33;\\r\\n  font-size: 30px;\\r\\n  line-height: 107.5px;\\r\\n}\\r\\n\\r\\n#win {\\r\\n  z-index: 10;\\r\\n  width: 500px;\\r\\n  height: 500px;\\r\\n  background: rgba(200, 54, 54, 0.5);\\r\\n  font-size: 62px;\\r\\n  line-height: 500px;\\r\\n  color: white;\\r\\n  position: absolute;\\r\\n  top: 227px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n#continue {\\r\\n  line-height: 20px;\\r\\n  font-size: 18px;\\r\\n  position: absolute;\\r\\n  top: 300px;\\r\\n  left: 187px;\\r\\n  z-index: 12;\\r\\n  background-color: #8a7766;\\r\\n  width: 110px;\\r\\n  height: 20px;\\r\\n  color: #fefffb;\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n  border-radius: 3px;\\r\\n  cursor: pointer;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://maalemabdelmouaaz.github.io/./src/StyleSheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://maalemabdelmouaaz.github.io/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/StyleSheet.css":
/*!****************************!*\
  !*** ./src/StyleSheet.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./StyleSheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/StyleSheet.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://maalemabdelmouaaz.github.io/./src/StyleSheet.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://maalemabdelmouaaz.github.io/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/addNumber.js":
/*!**************************!*\
  !*** ./src/addNumber.js ***!
  \**************************/
/***/ ((module) => {

eval("function addNumber() {\r\n  let zeros = document.querySelectorAll('[data-value=\"0\"]');\r\n  let randomZero = [];\r\n  if (zeros.length > 0) {\r\n    randomZero = zeros[Math.floor(Math.random() * zeros.length)];\r\n  }\r\n  if (Math.random() > 0.1) {\r\n    randomZero.className = \"gridElement gridElement-2\";\r\n    randomZero.innerHTML = \"2\";\r\n    randomZero.setAttribute(\"data-value\", 2);\r\n  } else {\r\n    randomZero.className = \"gridElement gridElement-4\";\r\n    randomZero.innerHTML = \"4\";\r\n    randomZero.setAttribute(\"data-value\", 4);\r\n  }\r\n}\r\nmodule.exports = addNumber;\r\n\n\n//# sourceURL=webpack://maalemabdelmouaaz.github.io/./src/addNumber.js?");

/***/ }),

/***/ "./src/getAnimationsForRow.js":
/*!************************************!*\
  !*** ./src/getAnimationsForRow.js ***!
  \************************************/
/***/ ((module) => {

eval("function getAnimationsForRow(row, animations, vector) {\r\n  let zerosCount = 0;\r\n  let last = 0;\r\n  row.forEach((e) => {\r\n    if (e.value === 0) {\r\n      zerosCount++;\r\n    } else {\r\n      if (last === e.value) {\r\n        zerosCount++;\r\n        last = 0;\r\n      } else {\r\n        last = e.value;\r\n      }\r\n      if (zerosCount > 0) {\r\n        animations.push({ e, distance: zerosCount, direction: vector });\r\n      }\r\n    }\r\n  });\r\n}\r\nmodule.exports = getAnimationsForRow;\r\n\n\n//# sourceURL=webpack://maalemabdelmouaaz.github.io/./src/getAnimationsForRow.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleSheet.css */ \"./src/StyleSheet.css\");\n\r\n\r\nconst { reverseGrid, rotate } = __webpack_require__(/*! ./rotate.js */ \"./src/rotate.js\");\r\nconst addNumber = __webpack_require__(/*! ./addNumber.js */ \"./src/addNumber.js\");\r\nconst listToMatrix = __webpack_require__(/*! ./listToMatrix.js */ \"./src/listToMatrix.js\");\r\nconst getAnimationsForRow = __webpack_require__(/*! ./getAnimationsForRow.js */ \"./src/getAnimationsForRow.js\");\r\nlet mainGrid = [];\r\nconst scoreDisplay = document.getElementById(\"score\");\r\nconst bestScore = document.getElementById(\"best\");\r\nlet score = 0;\r\nlet winCondition = true;\r\nvar highScore = localStorage.getItem(\"highScore\") || 0;\r\nbestScore.innerHTML = highScore;\r\nconst ELEMENT_SIZE = 107;\r\nconst MARGIN = 15;\r\nconst TRANSITION_DURATION = 0.3;\r\nconst AFTER_TRANSITION_DURATION = 1 + TRANSITION_DURATION * 1000;\r\n\r\nfunction gridTemplate(logicalGrid) {\r\n  let mainContainer = document.getElementById(\"mainContainer\");\r\n  logicalGrid.forEach((row, i) => {\r\n    row.forEach((e, j) => {\r\n      mainContainer.insertAdjacentHTML(\r\n        \"beforeend\",\r\n        gridElementTemplate(i, j, e)\r\n      );\r\n    });\r\n  });\r\n}\r\nfunction gridElementStyle(i, j) {\r\n  const [et, el] = calcStyleCoords(i, j);\r\n  return `style=\"top: ${et}px; left: ${el}px\"`;\r\n}\r\n\r\nfunction calcStyleCoords(i, j) {\r\n  let mainContainer = document.getElementById(\"mainContainer\");\r\n  const t = mainContainer.offsetTop + MARGIN;\r\n  const l = mainContainer.offsetLeft + MARGIN;\r\n  const et = (ELEMENT_SIZE + MARGIN) * i + t;\r\n  const el = (ELEMENT_SIZE + MARGIN) * j + l;\r\n  return [et, el];\r\n}\r\n\r\nfunction gridElementTemplate(i, j, num) {\r\n  return `<div class=\"gridElement ${getClass(num)}\" ${gridElementStyle(\r\n    i,\r\n    j\r\n  )} data-i=\"${i}\" data-j=\"${j}\" data-value=\"${num}\">${\r\n    num === 0 ? \"\" : num\r\n  }</div>`;\r\n}\r\nfunction getClass(num) {\r\n  switch (num) {\r\n    case 0:\r\n      return \"gridElement-0\";\r\n    case 2:\r\n      return \"gridElement-2\";\r\n    case 4:\r\n      return \"gridElement-4\";\r\n    case 8:\r\n      return \"gridElement-8\";\r\n    case 16:\r\n      return \"gridElement-16\";\r\n    case 32:\r\n      return \"gridElement-32\";\r\n    case 64:\r\n      return \"gridElement-64\";\r\n    case 128:\r\n      return \"gridElement-128\";\r\n    case 256:\r\n      return \"gridElement-256\";\r\n    case 512:\r\n      return \"gridElement-512\";\r\n    case 1024:\r\n      return \"gridElement-1024\";\r\n    case 2048:\r\n      return \"gridElement-2048\";\r\n    default:\r\n      return \"gridElement-higher\";\r\n  }\r\n}\r\n\r\nfunction rand03() {\r\n  return Math.floor(Math.random() * 4);\r\n}\r\nfunction initGrid() {\r\n  let grid = [\r\n    [0, 0, 0, 0],\r\n    [0, 0, 0, 0],\r\n    [0, 0, 0, 0],\r\n    [0, 0, 0, 0],\r\n  ];\r\n  grid[rand03()][rand03()] = 2;\r\n  let sum = 0;\r\n  do {\r\n    grid[rand03()][rand03()] = Math.random() > 0.1 ? 2 : 4;\r\n    grid.forEach((row) => {\r\n      row.forEach((e) => {\r\n        if (e !== 0) {\r\n          sum++;\r\n        }\r\n      });\r\n    });\r\n  } while (sum === 1);\r\n  return grid;\r\n}\r\nfunction clearGrid() {\r\n  let mainContainer = document.getElementById(\"mainContainer\");\r\n  mainContainer.innerHTML = \"\";\r\n  mainContainer.innerHTML +=\r\n    '<div class=\"tRow\"><div class=\"tile\"></div><div class=\"tile\"></div><div class=\"tile\"></div><div class=\"tile\"></div></div><div class=\"tRow\"><div class=\"tile\"></div><div class=\"tile\"></div><div class=\"tile\"></div><div class=\"tile\"></div></div><div class=\"tRow\"><div class=\"tile\"></div><div class=\"tile\"></div><div class=\"tile\"></div><div class=\"tile\"></div></div><div class=\"tRow\"><div class=\"tile\"></div><div class=\"tile\"></div><div class=\"tile\"></div><div class=\"tile\"></div></div>';\r\n}\r\nmainGrid = initGrid();\r\ngridTemplate(mainGrid);\r\nlet newButton = document.getElementById(\"newGameButton\");\r\nnewButton.addEventListener(\"click\", (event) => {\r\n  clearGrid();\r\n  score = 0;\r\n  winCondition = true;\r\n  scoreDisplay.innerHTML = 0;\r\n  mainGrid = initGrid();\r\n  gridTemplate(mainGrid);\r\n});\r\n\r\ndocument.addEventListener(\"keydown\", play);\r\n\r\nfunction play(event) {\r\n  if (\r\n    ![\"ArrowUp\", \"ArrowDown\", \"ArrowLeft\", \"ArrowRight\"].includes(event.key)\r\n  ) {\r\n    return;\r\n  }\r\n  event.preventDefault();\r\n  let grid = extractDataGrid(event.key);\r\n  let animations = getAnimations(grid, event.key);\r\n  animations.forEach((a) => execAnimations(a));\r\n  if (score > highScore) {\r\n    highScore = score;\r\n    bestScore.innerHTML = highScore;\r\n    localStorage.setItem(\"highScore\", highScore);\r\n  }\r\n  if (animations.length > 0) {\r\n    setTimeout(updateElement, AFTER_TRANSITION_DURATION);\r\n  }\r\n  // checkWin();\r\n  checkGameOver();\r\n}\r\n\r\nfunction extractDataGrid(arrow) {\r\n  let list = document.getElementsByClassName(\"gridElement\");\r\n\r\n  let grid = listToMatrix(list, 4);\r\n\r\n  switch (arrow) {\r\n    case \"ArrowRight\":\r\n      grid = reverseGrid(grid);\r\n      break;\r\n    case \"ArrowLeft\":\r\n      break;\r\n    case \"ArrowDown\":\r\n      grid = rotate(grid, \"r\");\r\n      break;\r\n    case \"ArrowUp\":\r\n      grid = rotate(grid, \"l\");\r\n      break;\r\n  }\r\n  return grid;\r\n}\r\n\r\nfunction getAnimations(grid, vector) {\r\n  let animations = [];\r\n  grid.forEach((row) => {\r\n    getAnimationsForRow(row, animations, vector);\r\n  });\r\n  return animations;\r\n}\r\n\r\nfunction execAnimations(a) {\r\n  if (a.distance === 0) {\r\n    return;\r\n  }\r\n  let vx, vy;\r\n  switch (a.direction) {\r\n    case \"ArrowLeft\":\r\n      vx = -a.distance;\r\n      vy = 0;\r\n      break;\r\n    case \"ArrowRight\":\r\n      vx = a.distance;\r\n      vy = 0;\r\n      break;\r\n    case \"ArrowUp\":\r\n      vx = 0;\r\n      vy = -a.distance;\r\n      break;\r\n    case \"ArrowDown\":\r\n      vx = 0;\r\n      vy = a.distance;\r\n      break;\r\n    default:\r\n      alert(\"nothing to do \");\r\n  }\r\n  let elem = a.e.e;\r\n  let style = elem.style;\r\n  style.transitionDuration = `${TRANSITION_DURATION}s`;\r\n  style.transform = `translate(${vx * (ELEMENT_SIZE + MARGIN)}px,${\r\n    vy * (ELEMENT_SIZE + MARGIN)\r\n  }px)`;\r\n  let oldI = a.e.i;\r\n  let oldJ = a.e.j;\r\n  let newI = oldI + vy;\r\n  let newJ = oldJ + vx;\r\n  let swap = document.querySelector(`[data-i='${newI}'][data-j='${newJ}']`);\r\n  elem.setAttribute(\"data-i\", newI);\r\n  elem.setAttribute(\"data-j\", newJ);\r\n  swap.setAttribute(\"data-i\", oldI);\r\n  swap.setAttribute(\"data-j\", oldJ);\r\n  let elemValue = parseInt(elem.getAttribute(\"data-value\"));\r\n  let swapValue = parseInt(swap.getAttribute(\"data-value\"));\r\n  if (elemValue === swapValue) {\r\n    elem.className = `${elem.className} merge`;\r\n    elem.setAttribute(\"data-value\", elemValue * 2);\r\n    swap.className = `${swap.className} swap`;\r\n    swap.setAttribute(\"data-value\", 0);\r\n    score += elemValue * 2;\r\n    scoreDisplay.innerHTML = score;\r\n  }\r\n}\r\n\r\nfunction merge() {\r\n  let mergeList = document.getElementsByClassName(\"merge\");\r\n  let swapList = document.getElementsByClassName(\"swap\");\r\n  Array.from(mergeList).forEach((e) => {\r\n    e.innerHTML = e.getAttribute(\"data-value\");\r\n    e.className = `gridElement gridElement-${e.getAttribute(\"data-value\")}`;\r\n  });\r\n  Array.from(swapList).forEach((e) => {\r\n    e.innerHTML = \"\";\r\n    e.className = \"gridElement gridElement-0\";\r\n  });\r\n}\r\n\r\nfunction updateElement() {\r\n  merge();\r\n  let grid = extractDataGrid();\r\n  grid.forEach((row) => {\r\n    row.forEach((e) => {\r\n      const [newT, newL] = calcStyleCoords(e.i, e.j);\r\n      let style = e.e.style;\r\n      style.transitionDuration = \"0s\";\r\n      style.transform = \"\";\r\n      style.top = `${newT}px`;\r\n      style.left = `${newL}px`;\r\n    });\r\n  });\r\n  addNumber();\r\n}\r\n\r\nfunction checkWin() {\r\n  if (!winCondition) {\r\n    return;\r\n  }\r\n  let grid = extractDataGrid();\r\n  grid.forEach((row) => {\r\n    row.forEach((e) => {\r\n      if (e.value === 32) {\r\n        document.removeEventListener(\"keydown\", play);\r\n        document.getElementById(\"mainContainer\").innerHTML +=\r\n          '<div id = \"win\">You win!<div id = \"continue\">Continue</div></div>';\r\n        winCondition = false;\r\n      }\r\n      let Continue = document.getElementById(\"continue\");\r\n      Continue.addEventListener(\"click\", function (event) {\r\n        document.getElementById(\"win\").remove();\r\n        document.addEventListener(\"keydown\", play);\r\n      });\r\n    });\r\n  });\r\n}\r\n\r\nfunction checkGameOver() {\r\n  let grid = extractDataGrid();\r\n  let checkForAnimations = [2];\r\n\r\n  if (checkForAnimations.length === 0) {\r\n    console.log(\"game over\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://maalemabdelmouaaz.github.io/./src/index.js?");

/***/ }),

/***/ "./src/listToMatrix.js":
/*!*****************************!*\
  !*** ./src/listToMatrix.js ***!
  \*****************************/
/***/ ((module) => {

eval("function listToMatrix(list, matrixDimension) {\r\n    let matrix = [\r\n      [0, 0, 0, 0],\r\n      [0, 0, 0, 0],\r\n      [0, 0, 0, 0],\r\n      [0, 0, 0, 0],\r\n    ];\r\n\r\n    for (let i = 0; i< list.length; i++) {\r\n      const e = list[i]\r\n      const eI = parseInt(e.getAttribute(\"data-i\"))\r\n      const eJ = parseInt(e.getAttribute(\"data-j\"))\r\n      matrix[eI][eJ] = {e: list[i],  i: eI, j: eJ, value: getIntValue(list[i])};\r\n    }\r\n    return matrix;\r\n}\r\n\r\nfunction getIntValue(e) {\r\n  return e.innerHTML === \"\" ? 0 : parseInt(e.innerHTML)\r\n}\r\n\r\n\r\nmodule.exports= listToMatrix;\r\n\n\n//# sourceURL=webpack://maalemabdelmouaaz.github.io/./src/listToMatrix.js?");

/***/ }),

/***/ "./src/rotate.js":
/*!***********************!*\
  !*** ./src/rotate.js ***!
  \***********************/
/***/ ((module) => {

eval("function reverseGrid(arr) {\r\n  for (let i = 0; i < 4; i++) {\r\n    arr[i].reverse();\r\n  }\r\n  return arr;\r\n}\r\n\r\nfunction rotate(arr, direction = 'l') {\r\n  const height = arr.length;\r\n  const width = arr[0].length;\r\n  const total = height * width;\r\n  const rotated = [];\r\n\r\n  let i = direction === 'r' ? 0 : total - 1;\r\n\r\n  while (true) {\r\n    const y = i / width | 0;\r\n    const x = i % width;\r\n    const newY = direction === 'r' ? x : width - 1 - x;\r\n    const newX = direction === 'r' ? height - 1 - y : y;\r\n    const value = arr[y][x];\r\n\r\n    if (!rotated[newY]) rotated.push([]);\r\n    rotated[newY][newX] = value;\r\n\r\n    if (direction === 'r') {\r\n      if (++i >= total) {\r\n        break;\r\n      }\r\n    } else {\r\n      if (i-- <= 0) {\r\n        break;\r\n      }\r\n    }\r\n  }\r\n\r\n  return rotated;\r\n}\r\n\r\nmodule.exports = {rotate, reverseGrid};\r\n\n\n//# sourceURL=webpack://maalemabdelmouaaz.github.io/./src/rotate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;