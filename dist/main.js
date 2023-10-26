/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: aquamarine;
}

main {
  padding: 2rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

fieldset {
    border: none;
}

legend {
    font-size: 2rem;
    margin-bottom: 2rem;
}

label,
input {
  display: block;
}

label {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
}

input {
  font-size: 1.5rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.02);
  border: none;
  border-bottom: 1px solid black;
  outline: none;
}

input:focus {
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid black;
}

button {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 5px 5px;
    transition: all 200ms;
}

button:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 2px 2px;
    transform: translate(3px, 3px);
}

.field {
    padding: 0.5rem;
    border: 1rem solid black;
    box-shadow: rgba(0, 0, 0, 0.35) 5px 5px;
}

.flex-row {
  display: flex;
  gap: 2rem;
}

.flex-col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.upper {
    text-transform: uppercase;
}

.center {
    align-self: center;
}

.small {
    font-size: 0.75em;
}

.divider {
  font-weight: bold;
  width: 2.25rem;
  height: 2.25rem;
  display: grid;
  place-content: center;
  color: white;
  border-radius: 50%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,gDAAgD;EAChD,aAAa;EACb,aAAa;EACb,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,4CAA4C;AAC9C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,qCAAqC;EACrC,YAAY;EACZ,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,uCAAuC;IACvC,qBAAqB;AACzB;;AAEA;IACI,uCAAuC;IACvC,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,uCAAuC;AAC3C;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["html {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  height: 100vh;\n  display: grid;\n  place-content: center;\n  background-color: aquamarine;\n}\n\nmain {\n  padding: 2rem;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\nfieldset {\n    border: none;\n}\n\nlegend {\n    font-size: 2rem;\n    margin-bottom: 2rem;\n}\n\nlabel,\ninput {\n  display: block;\n}\n\nlabel {\n    font-size: 0.75rem;\n    margin-bottom: 0.25rem;\n}\n\ninput {\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.02);\n  border: none;\n  border-bottom: 1px solid black;\n  outline: none;\n}\n\ninput:focus {\n  background-color: rgba(0, 0, 0, 0.05);\n  border: 1px solid black;\n}\n\nbutton {\n    font-size: 1.5rem;\n    padding: 0.5rem 1rem;\n    color: white;\n    background-color: black;\n    border: none;\n    outline: none;\n    box-shadow: rgba(0, 0, 0, 0.35) 5px 5px;\n    transition: all 200ms;\n}\n\nbutton:hover {\n    box-shadow: rgba(0, 0, 0, 0.35) 2px 2px;\n    transform: translate(3px, 3px);\n}\n\n.field {\n    padding: 0.5rem;\n    border: 1rem solid black;\n    box-shadow: rgba(0, 0, 0, 0.35) 5px 5px;\n}\n\n.flex-row {\n  display: flex;\n  gap: 2rem;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.upper {\n    text-transform: uppercase;\n}\n\n.center {\n    align-self: center;\n}\n\n.small {\n    font-size: 0.75em;\n}\n\n.divider {\n  font-weight: bold;\n  width: 2.25rem;\n  height: 2.25rem;\n  display: grid;\n  place-content: center;\n  color: white;\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const displayController = () => {
  // Initialize page structure
  const _main = (() => {
    const main = document.createElement("main");
    main.classList.add("flex-row");
    return main;
  })();

  const getMain = () => _main;

  // Initialize form elements
  const _mainForm = (() => {
    const container = document.createElement("form");
    container.classList.add("flex-col");
    return container;
  })();

  const getMainForm = () => _mainForm;

  const _formFieldset = (() => {
    const container = document.createElement("fieldset");
    container.classList.add("flex-col");

    const legend = document.createElement("legend");
    legend.textContent = "Search For The Weather";

    container.append(legend);
    return container;
  })();

  const getFormFieldset = () => _formFieldset;

  const _cityNameInput = (() => {
    const label = document.createElement("label");
    label.textContent = "City Name";
    label.classList.add("upper");
    label.setAttribute("for", "city");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "city";

    const container = document.createElement("div");
    container.classList.add("field");
    container.append(label, param);
    return container;
  })();

  const getCityNameInput = () => _cityNameInput;

  const _areaCodeInput = (() => {
    const label = document.createElement("label");
    label.textContent = "Area Code";
    label.classList.add("upper");
    label.setAttribute("for", "area");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "area";

    const container = document.createElement("div");
    container.classList.add("field");
    container.append(label, param);
    return container;
  })();

  const getAreaCodeInput = () => _areaCodeInput;

  const _coordinatesContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("flex-row", "field");
    return container;
  })();

  const getCoordinatesContainer = () => _coordinatesContainer;

  const _longitudeInput = (() => {
    const label = document.createElement("label");
    label.textContent = "Longitude";
    label.classList.add("upper");
    label.setAttribute("for", "lon");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "lon";
    param.pattern =
      "^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$";

    const container = document.createElement("div");
    container.append(label, param);
    return container;
  })();

  const getLongitudeInput = () => _longitudeInput;

  const _latitudeInput = (() => {
    const label = document.createElement("label");
    label.textContent = "Latitude";
    label.classList.add("upper");
    label.setAttribute("for", "lat");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "lat";
    param.pattern =
      "^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$";

    const container = document.createElement("div");
    container.append(label, param);
    return container;
  })();

  const getLatitudeInput = () => _latitudeInput;

  const _formSubmitContainer = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getFormSubmitContainer = () => _formSubmitContainer;

  const _formSubmit = (() => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Forecast";
    button.classList.add("upper");
    return button;
  })();

  const getFormSubmit = () => _formSubmit;

  // Order form elements
  const _createMainForm = () => {

    // Create elements for styling
    const makeDivider = (content, color) => {
        const divider = document.createElement("div");
        divider.textContent = content;
        divider.style.background = color;
        divider.classList.add("divider", "upper", "center", "small");
        return divider;
    }

    // Create DOM tree
    _coordinatesContainer.append(
        _longitudeInput,
        makeDivider("and", "green"),
        _latitudeInput
    );

    _formFieldset.append(
      _cityNameInput,
      makeDivider("or", "orange"),
      _areaCodeInput,
      makeDivider("or", "orange"),
      _coordinatesContainer,
    );

    _formSubmitContainer.append(_formSubmit);
    _mainForm.append(_formFieldset, _formSubmitContainer);

    return _mainForm;
  };

  // Initialize response elements
  const _mainResponse = (() => {
    const container = document.createElement("div");
    container.classList.add("flex-col");
    return container;
  })();

  const getMainResponse = () => _mainResponse;

  const _responseHeaderContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("flex-row");
    return container;
  })();

  const getResponseHeaderContainer = () => _responseHeaderContainer;

  const _responseLocation = (() => {
    const container = document.createElement("h1");
    return container;
  })();

  const getResponseLocation = () => _responseLocation;

  const _responseDate = (() => {
    const container = document.createElement("h2");
    return container;
  })();

  const getResponseDate = () => _responseDate;

  const _responseContentContainer = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseContentContainer = () => _responseContentContainer;

  const _responseConditionIcon = (() => {
    const container = document.createElement("img");
    return container;
  })();

  const getResponseConditionIcon = () => _responseConditionIcon;

  const _responseConditionText = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseConditionText = () => _responseConditionText;

  const _responseTemperature = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseTemperature = () => _responseTemperature;

  const _responseFeelsLike = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseFeelsLike = () => _responseFeelsLike;

  const _responseWind = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseWind = () => _responseWind;

  const _responseForecastContainer = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastContainer = () => _responseForecastContainer;

  const _responseForecastedConditionIcon = (() => {
    const container = document.createElement("img");
    return container;
  })();

  const getResponseForecastedConditionIcon = () => _responseForecastedConditionIcon;

  const _responseForecastedConditionText = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedConditionText = () => _responseForecastedConditionText;

  const _responseForecastedMaxTemperature = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedMaxTemperature = () => _responseForecastedMaxTemperature;

  const _responseForecastedMinTemperature = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedMinTemperature = () => _responseForecastedMinTemperature;

  const _responseForecastedWind = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedWind = () => _responseForecastedWind;

  // Order response elements
  const renderMainResponse = () => {

    // Create DOM tree
    _responseHeaderContainer.replaceChildren(
        _responseLocation,
        _responseDate
    );

    _responseContentContainer.replaceChildren(
      _responseConditionIcon,
      _responseTemperature,
      _responseConditionText,
      _responseFeelsLike,
      _responseWind
  );

  _responseForecastContainer.replaceChildren(
    _responseForecastedConditionIcon,
    _responseForecastedConditionText,
    _responseForecastedMaxTemperature,
    _responseForecastedMinTemperature,
    _responseForecastedWind
);

    _mainResponse.replaceChildren(
      _responseHeaderContainer,
      _responseContentContainer,
      _responseForecastContainer
    );

    return _mainResponse;
  };

  const build = () => {

    const form = _createMainForm();
    const response = renderMainResponse();

    _main.append(
      form,
      response
    );

    return _main;
  }

  return {
    getMain,
    getMainForm,
    getFormFieldset,
    getCityNameInput,
    getAreaCodeInput,
    getCoordinatesContainer,
    getLongitudeInput,
    getLatitudeInput,
    getFormSubmitContainer,
    getFormSubmit,
    getMainResponse,
    getResponseHeaderContainer,
    getResponseLocation,
    getResponseDate,
    getResponseContentContainer,
    getResponseConditionIcon,
    getResponseConditionText,
    getResponseTemperature,
    getResponseFeelsLike,
    getResponseWind,
    getResponseForecastContainer,
    getResponseForecastedConditionIcon,
    getResponseForecastedConditionText,
    getResponseForecastedMaxTemperature,
    getResponseForecastedMinTemperature,
    getResponseForecastedWind,
    renderMainResponse,
    build,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);


/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_KEY = "adda6ef8fba24dea8d610815232410";

const FORECAST_QUERY_BASE =
  "https://api.weatherapi.com/v1/forecast.json?key=" + API_KEY;

async function getForecast(location) {
  const response = await fetch(FORECAST_QUERY_BASE + "&q=" + location + "&days=1", {
    mode: "cors",
  });
  const weatherData = await response.json();

  // Today's weather information
  const cityName = weatherData.location.name;
  const countryName = weatherData.location.country;
  const currentWeatherData = weatherData.current;
  const lastUpdated = currentWeatherData.last_updated;
  // Metric measurements
  const currentTempC = currentWeatherData.temp_c;
  const feelsLikeC = currentWeatherData.feelslike_c;
  const currentWindKph = currentWeatherData.wind_kph;
  // Imperial measurements
  const currentTempF = currentWeatherData.temp_f;
  const feelsLikeF = currentWeatherData.feelslike_f;
  const currentWindMph = currentWeatherData.wind_mph;
  // Today's conditions
  const isDay = !!currentWeatherData.is_day;
  const currentConditionText = currentWeatherData.condition.text;
  const currentConditionIcon = currentWeatherData.condition.icon;

  // Tomorrow's weather information
  const tomorrowWeatherData = weatherData.forecast.forecastday[0].day;
  // Metric measurements
  const tomorrowMaxTempC = tomorrowWeatherData.maxtemp_c;
  const tomorrowMinTempC = tomorrowWeatherData.mintemp_c;
  const tomorrowMaxWindKph = tomorrowWeatherData.maxwind_kph;
  // Imperial measurements
  const tomorrowMaxTempF = tomorrowWeatherData.maxtemp_f;
  const tomorrowMinTempF = tomorrowWeatherData.mintemp_f;
  const tomorrowMaxWindMph = tomorrowWeatherData.maxwind_mph;
  // Tomorrows's conditions
  const tomorrowConditionText = tomorrowWeatherData.condition.text;
  const tomorrowConditionIcon = tomorrowWeatherData.condition.icon;
  return {
    cityName,
    countryName,
    lastUpdated,
    currentTempC,
    feelsLikeC,
    currentWindKph,
    currentTempF,
    feelsLikeF,
    currentWindMph,
    isDay,
    currentConditionText,
    currentConditionIcon,
    tomorrowMaxTempC,
    tomorrowMinTempC,
    tomorrowMaxWindKph,
    tomorrowMaxTempF,
    tomorrowMinTempF,
    tomorrowMaxWindMph,
    tomorrowConditionText,
    tomorrowConditionIcon,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getForecast);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");

/* import addEventListeners from "./control"; */



const addEventListeners = () => {

    async function getResponse(cursor, query) {

        const response = await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(query);
        console.log(response);
    
        const location = cursor.getResponseLocation();
        const date = cursor.getResponseDate();
    
        const conditionIcon = cursor.getResponseConditionIcon();
        const conditionText = cursor.getResponseConditionText();
        const temperature = cursor.getResponseTemperature();
        const feelsLike = cursor.getResponseFeelsLike();
        const wind = cursor.getResponseWind();
    
        const forecastConditionIcon = cursor.getResponseForecastedConditionIcon();
        const forecastConditionText = cursor.getResponseForecastedConditionText();
        const forecastMaxTemperature = cursor.getResponseForecastedMaxTemperature();
        const forecastMinTemperature = cursor.getResponseForecastedMinTemperature();
        const forecastWind = cursor.getResponseForecastedWind();
    
        location.textContent = `${response.cityName}, ${response.countryName}`;
        date.textContent = response.lastUpdated;
    
        conditionIcon.src = `https:${response.currentConditionIcon}`;
        conditionText.textContent = response.currentConditionText;
        // TODO: Implement imperial as alternative to metric
        temperature.textContent = response.currentTempC;
        feelsLike.textContent = response.feelsLikeC;
        wind.textContent = response.currentWindKph;
    
        forecastConditionIcon.src = `https:${response.tomorrowConditionIcon}`;
        forecastConditionText.textContent = response.tomorrowConditionText;
        // TODO: Implement imperial as alternative to metric
        forecastMaxTemperature.textContent = response.tomorrowMaxTempC;
        forecastMinTemperature.textContent = response.tomorrowMinTempC;
        forecastWind.textContent = response.tomorrowMaxWindKph;
    
    }

    const displayCursor = (0,_display__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const formSubmit = displayCursor.getFormSubmit();

    formSubmit.addEventListener("click", () => {
    
        const cityNameField = displayCursor.getCityNameInput();
        const areaCodeField = displayCursor.getAreaCodeInput();
        const longitudeField = displayCursor.getLongitudeInput();
        const latitudeField = displayCursor.getLatitudeInput();
    
        const cityName = cityNameField.lastChild.value;
        const areaCode = areaCodeField.lastChild.value;
        const longitude = longitudeField.lastChild.value;
        const latitude = latitudeField.lastChild.value;
    
        let query;
    
        if (cityName) {
            query = cityName;
        } else if (areaCode) {
            query = areaCode;
        } else if (longitude && latitude) {
            query = `${longitude},${latitude}`;
        } else {
            query = "Toronto";
        }
    
        getResponse(displayCursor, query);
    
        displayCursor.renderMainResponse();
    
    });

    const main = displayCursor.build();
    document.body.append(main);

};

/* const cursor = displayController();
const main = cursor.build();
document.body.append(main); */
addEventListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeFdqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUNsRTNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQzFDLDhDQUE4Qzs7QUFFWjs7QUFFbEM7O0FBRUE7O0FBRUEsK0JBQStCLGtEQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCLElBQUkscUJBQXFCO0FBQzdFO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLG9EQUFpQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1YsdUJBQXVCLFVBQVUsR0FBRyxTQUFTO0FBQzdDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xufVxuXG5maWVsZHNldCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5sZWdlbmQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5sYWJlbCxcbmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSA1cHggNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDJweCAycHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAzcHgpO1xufVxuXG4uZmllbGQge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFyZW0gc29saWQgYmxhY2s7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSA1cHggNXB4O1xufVxuXG4uZmxleC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG59XG5cbi5mbGV4LWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbn1cblxuLnVwcGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbi5kaXZpZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyLjI1cmVtO1xuICBoZWlnaHQ6IDIuMjVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDRDQUE0QztBQUM5Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHVDQUF1QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmxlZ2VuZCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxubGFiZWwsXFxuaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDVweCA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAycHggMnB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDNweCk7XFxufVxcblxcbi5maWVsZCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkIGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDVweCA1cHg7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi51cHBlciB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyLjI1cmVtO1xcbiAgaGVpZ2h0OiAyLjI1cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCkgPT4ge1xuICAvLyBJbml0aWFsaXplIHBhZ2Ugc3RydWN0dXJlXG4gIGNvbnN0IF9tYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiZmxleC1yb3dcIik7XG4gICAgcmV0dXJuIG1haW47XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0TWFpbiA9ICgpID0+IF9tYWluO1xuXG4gIC8vIEluaXRpYWxpemUgZm9ybSBlbGVtZW50c1xuICBjb25zdCBfbWFpbkZvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleC1jb2xcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRNYWluRm9ybSA9ICgpID0+IF9tYWluRm9ybTtcblxuICBjb25zdCBfZm9ybUZpZWxkc2V0ID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmbGV4LWNvbFwiKTtcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJTZWFyY2ggRm9yIFRoZSBXZWF0aGVyXCI7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGxlZ2VuZCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRGb3JtRmllbGRzZXQgPSAoKSA9PiBfZm9ybUZpZWxkc2V0O1xuXG4gIGNvbnN0IF9jaXR5TmFtZUlucHV0ID0gKCgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ2l0eSBOYW1lXCI7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInVwcGVyXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNpdHlcIik7XG5cbiAgICBjb25zdCBwYXJhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwYXJhbS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcGFyYW0uaWQgPSBcImNpdHlcIjtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWVsZFwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBwYXJhbSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRDaXR5TmFtZUlucHV0ID0gKCkgPT4gX2NpdHlOYW1lSW5wdXQ7XG5cbiAgY29uc3QgX2FyZWFDb2RlSW5wdXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJBcmVhIENvZGVcIjtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidXBwZXJcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiYXJlYVwiKTtcblxuICAgIGNvbnN0IHBhcmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBhcmFtLnR5cGUgPSBcInRleHRcIjtcbiAgICBwYXJhbS5pZCA9IFwiYXJlYVwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpZWxkXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIHBhcmFtKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldEFyZWFDb2RlSW5wdXQgPSAoKSA9PiBfYXJlYUNvZGVJbnB1dDtcblxuICBjb25zdCBfY29vcmRpbmF0ZXNDb250YWluZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmbGV4LXJvd1wiLCBcImZpZWxkXCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZXNDb250YWluZXIgPSAoKSA9PiBfY29vcmRpbmF0ZXNDb250YWluZXI7XG5cbiAgY29uc3QgX2xvbmdpdHVkZUlucHV0ID0gKCgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiTG9uZ2l0dWRlXCI7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInVwcGVyXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvblwiKTtcblxuICAgIGNvbnN0IHBhcmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBhcmFtLnR5cGUgPSBcInRleHRcIjtcbiAgICBwYXJhbS5pZCA9IFwibG9uXCI7XG4gICAgcGFyYW0ucGF0dGVybiA9XG4gICAgICBcIl4oXFxcXCt8LSk/KD86MTgwKD86KD86XFxcXC4wezEsNn0pPyl8KD86WzAtOV18WzEtOV1bMC05XXwxWzAtN11bMC05XSkoPzooPzpcXFxcLlswLTldezEsNn0pPykpJFwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBwYXJhbSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRMb25naXR1ZGVJbnB1dCA9ICgpID0+IF9sb25naXR1ZGVJbnB1dDtcblxuICBjb25zdCBfbGF0aXR1ZGVJbnB1dCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkxhdGl0dWRlXCI7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInVwcGVyXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxhdFwiKTtcblxuICAgIGNvbnN0IHBhcmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBhcmFtLnR5cGUgPSBcInRleHRcIjtcbiAgICBwYXJhbS5pZCA9IFwibGF0XCI7XG4gICAgcGFyYW0ucGF0dGVybiA9XG4gICAgICBcIl4oXFxcXCt8LSk/KD86OTAoPzooPzpcXFxcLjB7MSw2fSk/KXwoPzpbMC05XXxbMS04XVswLTldKSg/Oig/OlxcXFwuWzAtOV17MSw2fSk/KSkkXCI7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIHBhcmFtKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldExhdGl0dWRlSW5wdXQgPSAoKSA9PiBfbGF0aXR1ZGVJbnB1dDtcblxuICBjb25zdCBfZm9ybVN1Ym1pdENvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldEZvcm1TdWJtaXRDb250YWluZXIgPSAoKSA9PiBfZm9ybVN1Ym1pdENvbnRhaW5lcjtcblxuICBjb25zdCBfZm9ybVN1Ym1pdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJGb3JlY2FzdFwiO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidXBwZXJcIik7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRGb3JtU3VibWl0ID0gKCkgPT4gX2Zvcm1TdWJtaXQ7XG5cbiAgLy8gT3JkZXIgZm9ybSBlbGVtZW50c1xuICBjb25zdCBfY3JlYXRlTWFpbkZvcm0gPSAoKSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgZWxlbWVudHMgZm9yIHN0eWxpbmdcbiAgICBjb25zdCBtYWtlRGl2aWRlciA9IChjb250ZW50LCBjb2xvcikgPT4ge1xuICAgICAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2aWRlci50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGRpdmlkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuICAgICAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXZpZGVyXCIsIFwidXBwZXJcIiwgXCJjZW50ZXJcIiwgXCJzbWFsbFwiKTtcbiAgICAgICAgcmV0dXJuIGRpdmlkZXI7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIERPTSB0cmVlXG4gICAgX2Nvb3JkaW5hdGVzQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgX2xvbmdpdHVkZUlucHV0LFxuICAgICAgICBtYWtlRGl2aWRlcihcImFuZFwiLCBcImdyZWVuXCIpLFxuICAgICAgICBfbGF0aXR1ZGVJbnB1dFxuICAgICk7XG5cbiAgICBfZm9ybUZpZWxkc2V0LmFwcGVuZChcbiAgICAgIF9jaXR5TmFtZUlucHV0LFxuICAgICAgbWFrZURpdmlkZXIoXCJvclwiLCBcIm9yYW5nZVwiKSxcbiAgICAgIF9hcmVhQ29kZUlucHV0LFxuICAgICAgbWFrZURpdmlkZXIoXCJvclwiLCBcIm9yYW5nZVwiKSxcbiAgICAgIF9jb29yZGluYXRlc0NvbnRhaW5lcixcbiAgICApO1xuXG4gICAgX2Zvcm1TdWJtaXRDb250YWluZXIuYXBwZW5kKF9mb3JtU3VibWl0KTtcbiAgICBfbWFpbkZvcm0uYXBwZW5kKF9mb3JtRmllbGRzZXQsIF9mb3JtU3VibWl0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBfbWFpbkZvcm07XG4gIH07XG5cbiAgLy8gSW5pdGlhbGl6ZSByZXNwb25zZSBlbGVtZW50c1xuICBjb25zdCBfbWFpblJlc3BvbnNlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleC1jb2xcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRNYWluUmVzcG9uc2UgPSAoKSA9PiBfbWFpblJlc3BvbnNlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUhlYWRlckNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXgtcm93XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VIZWFkZXJDb250YWluZXIgPSAoKSA9PiBfcmVzcG9uc2VIZWFkZXJDb250YWluZXI7XG5cbiAgY29uc3QgX3Jlc3BvbnNlTG9jYXRpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlTG9jYXRpb24gPSAoKSA9PiBfcmVzcG9uc2VMb2NhdGlvbjtcblxuICBjb25zdCBfcmVzcG9uc2VEYXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZURhdGUgPSAoKSA9PiBfcmVzcG9uc2VEYXRlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUNvbnRlbnRDb250YWluZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUNvbnRlbnRDb250YWluZXIgPSAoKSA9PiBfcmVzcG9uc2VDb250ZW50Q29udGFpbmVyO1xuXG4gIGNvbnN0IF9yZXNwb25zZUNvbmRpdGlvbkljb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUNvbmRpdGlvbkljb24gPSAoKSA9PiBfcmVzcG9uc2VDb25kaXRpb25JY29uO1xuXG4gIGNvbnN0IF9yZXNwb25zZUNvbmRpdGlvblRleHQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUNvbmRpdGlvblRleHQgPSAoKSA9PiBfcmVzcG9uc2VDb25kaXRpb25UZXh0O1xuXG4gIGNvbnN0IF9yZXNwb25zZVRlbXBlcmF0dXJlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VUZW1wZXJhdHVyZSA9ICgpID0+IF9yZXNwb25zZVRlbXBlcmF0dXJlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZlZWxzTGlrZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlRmVlbHNMaWtlID0gKCkgPT4gX3Jlc3BvbnNlRmVlbHNMaWtlO1xuXG4gIGNvbnN0IF9yZXNwb25zZVdpbmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZVdpbmQgPSAoKSA9PiBfcmVzcG9uc2VXaW5kO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0Q29udGFpbmVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdENvbnRhaW5lciA9ICgpID0+IF9yZXNwb25zZUZvcmVjYXN0Q29udGFpbmVyO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25JY29uID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uSWNvbiA9ICgpID0+IF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25JY29uO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25UZXh0ID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uVGV4dCA9ICgpID0+IF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25UZXh0O1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRNYXhUZW1wZXJhdHVyZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlRm9yZWNhc3RlZE1heFRlbXBlcmF0dXJlID0gKCkgPT4gX3Jlc3BvbnNlRm9yZWNhc3RlZE1heFRlbXBlcmF0dXJlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRNaW5UZW1wZXJhdHVyZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlRm9yZWNhc3RlZE1pblRlbXBlcmF0dXJlID0gKCkgPT4gX3Jlc3BvbnNlRm9yZWNhc3RlZE1pblRlbXBlcmF0dXJlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRXaW5kID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkV2luZCA9ICgpID0+IF9yZXNwb25zZUZvcmVjYXN0ZWRXaW5kO1xuXG4gIC8vIE9yZGVyIHJlc3BvbnNlIGVsZW1lbnRzXG4gIGNvbnN0IHJlbmRlck1haW5SZXNwb25zZSA9ICgpID0+IHtcblxuICAgIC8vIENyZWF0ZSBET00gdHJlZVxuICAgIF9yZXNwb25zZUhlYWRlckNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oXG4gICAgICAgIF9yZXNwb25zZUxvY2F0aW9uLFxuICAgICAgICBfcmVzcG9uc2VEYXRlXG4gICAgKTtcblxuICAgIF9yZXNwb25zZUNvbnRlbnRDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKFxuICAgICAgX3Jlc3BvbnNlQ29uZGl0aW9uSWNvbixcbiAgICAgIF9yZXNwb25zZVRlbXBlcmF0dXJlLFxuICAgICAgX3Jlc3BvbnNlQ29uZGl0aW9uVGV4dCxcbiAgICAgIF9yZXNwb25zZUZlZWxzTGlrZSxcbiAgICAgIF9yZXNwb25zZVdpbmRcbiAgKTtcblxuICBfcmVzcG9uc2VGb3JlY2FzdENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oXG4gICAgX3Jlc3BvbnNlRm9yZWNhc3RlZENvbmRpdGlvbkljb24sXG4gICAgX3Jlc3BvbnNlRm9yZWNhc3RlZENvbmRpdGlvblRleHQsXG4gICAgX3Jlc3BvbnNlRm9yZWNhc3RlZE1heFRlbXBlcmF0dXJlLFxuICAgIF9yZXNwb25zZUZvcmVjYXN0ZWRNaW5UZW1wZXJhdHVyZSxcbiAgICBfcmVzcG9uc2VGb3JlY2FzdGVkV2luZFxuKTtcblxuICAgIF9tYWluUmVzcG9uc2UucmVwbGFjZUNoaWxkcmVuKFxuICAgICAgX3Jlc3BvbnNlSGVhZGVyQ29udGFpbmVyLFxuICAgICAgX3Jlc3BvbnNlQ29udGVudENvbnRhaW5lcixcbiAgICAgIF9yZXNwb25zZUZvcmVjYXN0Q29udGFpbmVyXG4gICAgKTtcblxuICAgIHJldHVybiBfbWFpblJlc3BvbnNlO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZm9ybSA9IF9jcmVhdGVNYWluRm9ybSgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gcmVuZGVyTWFpblJlc3BvbnNlKCk7XG5cbiAgICBfbWFpbi5hcHBlbmQoXG4gICAgICBmb3JtLFxuICAgICAgcmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIF9tYWluO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRNYWluLFxuICAgIGdldE1haW5Gb3JtLFxuICAgIGdldEZvcm1GaWVsZHNldCxcbiAgICBnZXRDaXR5TmFtZUlucHV0LFxuICAgIGdldEFyZWFDb2RlSW5wdXQsXG4gICAgZ2V0Q29vcmRpbmF0ZXNDb250YWluZXIsXG4gICAgZ2V0TG9uZ2l0dWRlSW5wdXQsXG4gICAgZ2V0TGF0aXR1ZGVJbnB1dCxcbiAgICBnZXRGb3JtU3VibWl0Q29udGFpbmVyLFxuICAgIGdldEZvcm1TdWJtaXQsXG4gICAgZ2V0TWFpblJlc3BvbnNlLFxuICAgIGdldFJlc3BvbnNlSGVhZGVyQ29udGFpbmVyLFxuICAgIGdldFJlc3BvbnNlTG9jYXRpb24sXG4gICAgZ2V0UmVzcG9uc2VEYXRlLFxuICAgIGdldFJlc3BvbnNlQ29udGVudENvbnRhaW5lcixcbiAgICBnZXRSZXNwb25zZUNvbmRpdGlvbkljb24sXG4gICAgZ2V0UmVzcG9uc2VDb25kaXRpb25UZXh0LFxuICAgIGdldFJlc3BvbnNlVGVtcGVyYXR1cmUsXG4gICAgZ2V0UmVzcG9uc2VGZWVsc0xpa2UsXG4gICAgZ2V0UmVzcG9uc2VXaW5kLFxuICAgIGdldFJlc3BvbnNlRm9yZWNhc3RDb250YWluZXIsXG4gICAgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uSWNvbixcbiAgICBnZXRSZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25UZXh0LFxuICAgIGdldFJlc3BvbnNlRm9yZWNhc3RlZE1heFRlbXBlcmF0dXJlLFxuICAgIGdldFJlc3BvbnNlRm9yZWNhc3RlZE1pblRlbXBlcmF0dXJlLFxuICAgIGdldFJlc3BvbnNlRm9yZWNhc3RlZFdpbmQsXG4gICAgcmVuZGVyTWFpblJlc3BvbnNlLFxuICAgIGJ1aWxkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7XG4iLCJjb25zdCBBUElfS0VZID0gXCJhZGRhNmVmOGZiYTI0ZGVhOGQ2MTA4MTUyMzI0MTBcIjtcblxuY29uc3QgRk9SRUNBU1RfUVVFUllfQkFTRSA9XG4gIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9XCIgKyBBUElfS0VZO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEZPUkVDQVNUX1FVRVJZX0JBU0UgKyBcIiZxPVwiICsgbG9jYXRpb24gKyBcIiZkYXlzPTFcIiwge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICB9KTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgLy8gVG9kYXkncyB3ZWF0aGVyIGluZm9ybWF0aW9uXG4gIGNvbnN0IGNpdHlOYW1lID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgY29uc3QgY291bnRyeU5hbWUgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5sYXN0X3VwZGF0ZWQ7XG4gIC8vIE1ldHJpYyBtZWFzdXJlbWVudHNcbiAgY29uc3QgY3VycmVudFRlbXBDID0gY3VycmVudFdlYXRoZXJEYXRhLnRlbXBfYztcbiAgY29uc3QgZmVlbHNMaWtlQyA9IGN1cnJlbnRXZWF0aGVyRGF0YS5mZWVsc2xpa2VfYztcbiAgY29uc3QgY3VycmVudFdpbmRLcGggPSBjdXJyZW50V2VhdGhlckRhdGEud2luZF9rcGg7XG4gIC8vIEltcGVyaWFsIG1lYXN1cmVtZW50c1xuICBjb25zdCBjdXJyZW50VGVtcEYgPSBjdXJyZW50V2VhdGhlckRhdGEudGVtcF9mO1xuICBjb25zdCBmZWVsc0xpa2VGID0gY3VycmVudFdlYXRoZXJEYXRhLmZlZWxzbGlrZV9mO1xuICBjb25zdCBjdXJyZW50V2luZE1waCA9IGN1cnJlbnRXZWF0aGVyRGF0YS53aW5kX21waDtcbiAgLy8gVG9kYXkncyBjb25kaXRpb25zXG4gIGNvbnN0IGlzRGF5ID0gISFjdXJyZW50V2VhdGhlckRhdGEuaXNfZGF5O1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uVGV4dCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbkljb24gPSBjdXJyZW50V2VhdGhlckRhdGEuY29uZGl0aW9uLmljb247XG5cbiAgLy8gVG9tb3Jyb3cncyB3ZWF0aGVyIGluZm9ybWF0aW9uXG4gIGNvbnN0IHRvbW9ycm93V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXk7XG4gIC8vIE1ldHJpYyBtZWFzdXJlbWVudHNcbiAgY29uc3QgdG9tb3Jyb3dNYXhUZW1wQyA9IHRvbW9ycm93V2VhdGhlckRhdGEubWF4dGVtcF9jO1xuICBjb25zdCB0b21vcnJvd01pblRlbXBDID0gdG9tb3Jyb3dXZWF0aGVyRGF0YS5taW50ZW1wX2M7XG4gIGNvbnN0IHRvbW9ycm93TWF4V2luZEtwaCA9IHRvbW9ycm93V2VhdGhlckRhdGEubWF4d2luZF9rcGg7XG4gIC8vIEltcGVyaWFsIG1lYXN1cmVtZW50c1xuICBjb25zdCB0b21vcnJvd01heFRlbXBGID0gdG9tb3Jyb3dXZWF0aGVyRGF0YS5tYXh0ZW1wX2Y7XG4gIGNvbnN0IHRvbW9ycm93TWluVGVtcEYgPSB0b21vcnJvd1dlYXRoZXJEYXRhLm1pbnRlbXBfZjtcbiAgY29uc3QgdG9tb3Jyb3dNYXhXaW5kTXBoID0gdG9tb3Jyb3dXZWF0aGVyRGF0YS5tYXh3aW5kX21waDtcbiAgLy8gVG9tb3Jyb3dzJ3MgY29uZGl0aW9uc1xuICBjb25zdCB0b21vcnJvd0NvbmRpdGlvblRleHQgPSB0b21vcnJvd1dlYXRoZXJEYXRhLmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbkljb24gPSB0b21vcnJvd1dlYXRoZXJEYXRhLmNvbmRpdGlvbi5pY29uO1xuICByZXR1cm4ge1xuICAgIGNpdHlOYW1lLFxuICAgIGNvdW50cnlOYW1lLFxuICAgIGxhc3RVcGRhdGVkLFxuICAgIGN1cnJlbnRUZW1wQyxcbiAgICBmZWVsc0xpa2VDLFxuICAgIGN1cnJlbnRXaW5kS3BoLFxuICAgIGN1cnJlbnRUZW1wRixcbiAgICBmZWVsc0xpa2VGLFxuICAgIGN1cnJlbnRXaW5kTXBoLFxuICAgIGlzRGF5LFxuICAgIGN1cnJlbnRDb25kaXRpb25UZXh0LFxuICAgIGN1cnJlbnRDb25kaXRpb25JY29uLFxuICAgIHRvbW9ycm93TWF4VGVtcEMsXG4gICAgdG9tb3Jyb3dNaW5UZW1wQyxcbiAgICB0b21vcnJvd01heFdpbmRLcGgsXG4gICAgdG9tb3Jyb3dNYXhUZW1wRixcbiAgICB0b21vcnJvd01pblRlbXBGLFxuICAgIHRvbW9ycm93TWF4V2luZE1waCxcbiAgICB0b21vcnJvd0NvbmRpdGlvblRleHQsXG4gICAgdG9tb3Jyb3dDb25kaXRpb25JY29uLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGb3JlY2FzdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5XCI7XG4vKiBpbXBvcnQgYWRkRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vY29udHJvbFwiOyAqL1xuXG5pbXBvcnQgZ2V0Rm9yZWNhc3QgZnJvbSBcIi4vZmV0Y2hcIjtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZShjdXJzb3IsIHF1ZXJ5KSB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRGb3JlY2FzdChxdWVyeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBjdXJzb3IuZ2V0UmVzcG9uc2VMb2NhdGlvbigpO1xuICAgICAgICBjb25zdCBkYXRlID0gY3Vyc29yLmdldFJlc3BvbnNlRGF0ZSgpO1xuICAgIFxuICAgICAgICBjb25zdCBjb25kaXRpb25JY29uID0gY3Vyc29yLmdldFJlc3BvbnNlQ29uZGl0aW9uSWNvbigpO1xuICAgICAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gY3Vyc29yLmdldFJlc3BvbnNlQ29uZGl0aW9uVGV4dCgpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGN1cnNvci5nZXRSZXNwb25zZVRlbXBlcmF0dXJlKCk7XG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IGN1cnNvci5nZXRSZXNwb25zZUZlZWxzTGlrZSgpO1xuICAgICAgICBjb25zdCB3aW5kID0gY3Vyc29yLmdldFJlc3BvbnNlV2luZCgpO1xuICAgIFxuICAgICAgICBjb25zdCBmb3JlY2FzdENvbmRpdGlvbkljb24gPSBjdXJzb3IuZ2V0UmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uSWNvbigpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdENvbmRpdGlvblRleHQgPSBjdXJzb3IuZ2V0UmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uVGV4dCgpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdE1heFRlbXBlcmF0dXJlID0gY3Vyc29yLmdldFJlc3BvbnNlRm9yZWNhc3RlZE1heFRlbXBlcmF0dXJlKCk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TWluVGVtcGVyYXR1cmUgPSBjdXJzb3IuZ2V0UmVzcG9uc2VGb3JlY2FzdGVkTWluVGVtcGVyYXR1cmUoKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RXaW5kID0gY3Vyc29yLmdldFJlc3BvbnNlRm9yZWNhc3RlZFdpbmQoKTtcbiAgICBcbiAgICAgICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jaXR5TmFtZX0sICR7cmVzcG9uc2UuY291bnRyeU5hbWV9YDtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxhc3RVcGRhdGVkO1xuICAgIFxuICAgICAgICBjb25kaXRpb25JY29uLnNyYyA9IGBodHRwczoke3Jlc3BvbnNlLmN1cnJlbnRDb25kaXRpb25JY29ufWA7XG4gICAgICAgIGNvbmRpdGlvblRleHQudGV4dENvbnRlbnQgPSByZXNwb25zZS5jdXJyZW50Q29uZGl0aW9uVGV4dDtcbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGltcGVyaWFsIGFzIGFsdGVybmF0aXZlIHRvIG1ldHJpY1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmN1cnJlbnRUZW1wQztcbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZmVlbHNMaWtlQztcbiAgICAgICAgd2luZC50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmN1cnJlbnRXaW5kS3BoO1xuICAgIFxuICAgICAgICBmb3JlY2FzdENvbmRpdGlvbkljb24uc3JjID0gYGh0dHBzOiR7cmVzcG9uc2UudG9tb3Jyb3dDb25kaXRpb25JY29ufWA7XG4gICAgICAgIGZvcmVjYXN0Q29uZGl0aW9uVGV4dC50ZXh0Q29udGVudCA9IHJlc3BvbnNlLnRvbW9ycm93Q29uZGl0aW9uVGV4dDtcbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGltcGVyaWFsIGFzIGFsdGVybmF0aXZlIHRvIG1ldHJpY1xuICAgICAgICBmb3JlY2FzdE1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gcmVzcG9uc2UudG9tb3Jyb3dNYXhUZW1wQztcbiAgICAgICAgZm9yZWNhc3RNaW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLnRvbW9ycm93TWluVGVtcEM7XG4gICAgICAgIGZvcmVjYXN0V2luZC50ZXh0Q29udGVudCA9IHJlc3BvbnNlLnRvbW9ycm93TWF4V2luZEtwaDtcbiAgICBcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5Q3Vyc29yID0gZGlzcGxheUNvbnRyb2xsZXIoKTtcblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkaXNwbGF5Q3Vyc29yLmdldEZvcm1TdWJtaXQoKTtcblxuICAgIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBcbiAgICAgICAgY29uc3QgY2l0eU5hbWVGaWVsZCA9IGRpc3BsYXlDdXJzb3IuZ2V0Q2l0eU5hbWVJbnB1dCgpO1xuICAgICAgICBjb25zdCBhcmVhQ29kZUZpZWxkID0gZGlzcGxheUN1cnNvci5nZXRBcmVhQ29kZUlucHV0KCk7XG4gICAgICAgIGNvbnN0IGxvbmdpdHVkZUZpZWxkID0gZGlzcGxheUN1cnNvci5nZXRMb25naXR1ZGVJbnB1dCgpO1xuICAgICAgICBjb25zdCBsYXRpdHVkZUZpZWxkID0gZGlzcGxheUN1cnNvci5nZXRMYXRpdHVkZUlucHV0KCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNpdHlOYW1lID0gY2l0eU5hbWVGaWVsZC5sYXN0Q2hpbGQudmFsdWU7XG4gICAgICAgIGNvbnN0IGFyZWFDb2RlID0gYXJlYUNvZGVGaWVsZC5sYXN0Q2hpbGQudmFsdWU7XG4gICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IGxvbmdpdHVkZUZpZWxkLmxhc3RDaGlsZC52YWx1ZTtcbiAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBsYXRpdHVkZUZpZWxkLmxhc3RDaGlsZC52YWx1ZTtcbiAgICBcbiAgICAgICAgbGV0IHF1ZXJ5O1xuICAgIFxuICAgICAgICBpZiAoY2l0eU5hbWUpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gY2l0eU5hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJlYUNvZGUpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gYXJlYUNvZGU7XG4gICAgICAgIH0gZWxzZSBpZiAobG9uZ2l0dWRlICYmIGxhdGl0dWRlKSB7XG4gICAgICAgICAgICBxdWVyeSA9IGAke2xvbmdpdHVkZX0sJHtsYXRpdHVkZX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSBcIlRvcm9udG9cIjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBnZXRSZXNwb25zZShkaXNwbGF5Q3Vyc29yLCBxdWVyeSk7XG4gICAgXG4gICAgICAgIGRpc3BsYXlDdXJzb3IucmVuZGVyTWFpblJlc3BvbnNlKCk7XG4gICAgXG4gICAgfSk7XG5cbiAgICBjb25zdCBtYWluID0gZGlzcGxheUN1cnNvci5idWlsZCgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW4pO1xuXG59O1xuXG4vKiBjb25zdCBjdXJzb3IgPSBkaXNwbGF5Q29udHJvbGxlcigpO1xuY29uc3QgbWFpbiA9IGN1cnNvci5idWlsZCgpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbik7ICovXG5hZGRFdmVudExpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9