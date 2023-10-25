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
    const container = document.createElement("div");
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
  const _createMainResponse = () => {

    // Create DOM tree
    _responseHeaderContainer.append(
        _responseLocation,
        _responseDate
    );

    _responseContentContainer.append(
      _responseConditionIcon,
      _responseTemperature,
      _responseConditionText,
      _responseFeelsLike,
      _responseWind
  );

  _responseForecastContainer.append(
    _responseForecastedConditionIcon,
    _responseForecastedConditionText,
    _responseForecastedMaxTemperature,
    _responseForecastedMinTemperature,
    _responseForecastedWind
);

    _mainResponse.append(
      _responseHeaderContainer,
      _responseContentContainer,
      _responseForecastContainer
    );

    return _mainResponse;
  };

  const build = () => {

    const form = _createMainForm();
    const response = _createMainResponse();

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
/* harmony export */   getForecast: () => (/* binding */ getForecast)
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




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");



const cursor = (0,_display__WEBPACK_IMPORTED_MODULE_1__["default"])();
const main = cursor.build();
document.body.append(main);


const london = await (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.getForecast)("london");
console.log(london.lastUpdated);
console.log(london.tomorrowMinTempC);
console.log(london.currentConditionText);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0V2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDbEVlO0FBQ0k7O0FBRTFDLGVBQWUsb0RBQWlCO0FBQ2hDO0FBQ0E7OztBQUdBLHFCQUFxQixtREFBVztBQUNoQztBQUNBO0FBQ0E7Ozs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxzR0FBc0c7V0FDdEc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ2hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbn1cblxuZmllbGRzZXQge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxubGVnZW5kIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxubGFiZWwsXG5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgNXB4IDVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAycHggMnB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgM3B4KTtcbn1cblxuLmZpZWxkIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkIGJsYWNrO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgNXB4IDVweDtcbn1cblxuLmZsZXgtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xufVxuXG4uZmxleC1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG59XG5cbi51cHBlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4uZGl2aWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMi4yNXJlbTtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsYUFBYTtFQUNiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHVCQUF1QjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qix1Q0FBdUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbm1haW4ge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbmxhYmVsLFxcbmlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSA1cHggNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMnB4IDJweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAzcHgpO1xcbn1cXG5cXG4uZmllbGQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSA1cHggNXB4O1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4udXBwZXIge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc21hbGwge1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMi4yNXJlbTtcXG4gIGhlaWdodDogMi4yNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgpID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSBwYWdlIHN0cnVjdHVyZVxuICBjb25zdCBfbWFpbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImZsZXgtcm93XCIpO1xuICAgIHJldHVybiBtYWluO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldE1haW4gPSAoKSA9PiBfbWFpbjtcblxuICAvLyBJbml0aWFsaXplIGZvcm0gZWxlbWVudHNcbiAgY29uc3QgX21haW5Gb3JtID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXgtY29sXCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0TWFpbkZvcm0gPSAoKSA9PiBfbWFpbkZvcm07XG5cbiAgY29uc3QgX2Zvcm1GaWVsZHNldCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleC1jb2xcIik7XG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiU2VhcmNoIEZvciBUaGUgV2VhdGhlclwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChsZWdlbmQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0Rm9ybUZpZWxkc2V0ID0gKCkgPT4gX2Zvcm1GaWVsZHNldDtcblxuICBjb25zdCBfY2l0eU5hbWVJbnB1dCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNpdHkgTmFtZVwiO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ1cHBlclwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjaXR5XCIpO1xuXG4gICAgY29uc3QgcGFyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGFyYW0udHlwZSA9IFwidGV4dFwiO1xuICAgIHBhcmFtLmlkID0gXCJjaXR5XCI7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGRcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgcGFyYW0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0Q2l0eU5hbWVJbnB1dCA9ICgpID0+IF9jaXR5TmFtZUlucHV0O1xuXG4gIGNvbnN0IF9hcmVhQ29kZUlucHV0ID0gKCgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQXJlYSBDb2RlXCI7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInVwcGVyXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImFyZWFcIik7XG5cbiAgICBjb25zdCBwYXJhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwYXJhbS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcGFyYW0uaWQgPSBcImFyZWFcIjtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWVsZFwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBwYXJhbSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRBcmVhQ29kZUlucHV0ID0gKCkgPT4gX2FyZWFDb2RlSW5wdXQ7XG5cbiAgY29uc3QgX2Nvb3JkaW5hdGVzQ29udGFpbmVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleC1yb3dcIiwgXCJmaWVsZFwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldENvb3JkaW5hdGVzQ29udGFpbmVyID0gKCkgPT4gX2Nvb3JkaW5hdGVzQ29udGFpbmVyO1xuXG4gIGNvbnN0IF9sb25naXR1ZGVJbnB1dCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkxvbmdpdHVkZVwiO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ1cHBlclwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb25cIik7XG5cbiAgICBjb25zdCBwYXJhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwYXJhbS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcGFyYW0uaWQgPSBcImxvblwiO1xuICAgIHBhcmFtLnBhdHRlcm4gPVxuICAgICAgXCJeKFxcXFwrfC0pPyg/OjE4MCg/Oig/OlxcXFwuMHsxLDZ9KT8pfCg/OlswLTldfFsxLTldWzAtOV18MVswLTddWzAtOV0pKD86KD86XFxcXC5bMC05XXsxLDZ9KT8pKSRcIjtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgcGFyYW0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0TG9uZ2l0dWRlSW5wdXQgPSAoKSA9PiBfbG9uZ2l0dWRlSW5wdXQ7XG5cbiAgY29uc3QgX2xhdGl0dWRlSW5wdXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJMYXRpdHVkZVwiO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ1cHBlclwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsYXRcIik7XG5cbiAgICBjb25zdCBwYXJhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwYXJhbS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcGFyYW0uaWQgPSBcImxhdFwiO1xuICAgIHBhcmFtLnBhdHRlcm4gPVxuICAgICAgXCJeKFxcXFwrfC0pPyg/OjkwKD86KD86XFxcXC4wezEsNn0pPyl8KD86WzAtOV18WzEtOF1bMC05XSkoPzooPzpcXFxcLlswLTldezEsNn0pPykpJFwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBwYXJhbSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRMYXRpdHVkZUlucHV0ID0gKCkgPT4gX2xhdGl0dWRlSW5wdXQ7XG5cbiAgY29uc3QgX2Zvcm1TdWJtaXRDb250YWluZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRGb3JtU3VibWl0Q29udGFpbmVyID0gKCkgPT4gX2Zvcm1TdWJtaXRDb250YWluZXI7XG5cbiAgY29uc3QgX2Zvcm1TdWJtaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJGb3JlY2FzdFwiO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidXBwZXJcIik7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRGb3JtU3VibWl0ID0gKCkgPT4gX2Zvcm1TdWJtaXQ7XG5cbiAgLy8gT3JkZXIgZm9ybSBlbGVtZW50c1xuICBjb25zdCBfY3JlYXRlTWFpbkZvcm0gPSAoKSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgZWxlbWVudHMgZm9yIHN0eWxpbmdcbiAgICBjb25zdCBtYWtlRGl2aWRlciA9IChjb250ZW50LCBjb2xvcikgPT4ge1xuICAgICAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2aWRlci50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGRpdmlkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuICAgICAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXZpZGVyXCIsIFwidXBwZXJcIiwgXCJjZW50ZXJcIiwgXCJzbWFsbFwiKTtcbiAgICAgICAgcmV0dXJuIGRpdmlkZXI7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIERPTSB0cmVlXG4gICAgX2Nvb3JkaW5hdGVzQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgX2xvbmdpdHVkZUlucHV0LFxuICAgICAgICBtYWtlRGl2aWRlcihcImFuZFwiLCBcImdyZWVuXCIpLFxuICAgICAgICBfbGF0aXR1ZGVJbnB1dFxuICAgICk7XG5cbiAgICBfZm9ybUZpZWxkc2V0LmFwcGVuZChcbiAgICAgIF9jaXR5TmFtZUlucHV0LFxuICAgICAgbWFrZURpdmlkZXIoXCJvclwiLCBcIm9yYW5nZVwiKSxcbiAgICAgIF9hcmVhQ29kZUlucHV0LFxuICAgICAgbWFrZURpdmlkZXIoXCJvclwiLCBcIm9yYW5nZVwiKSxcbiAgICAgIF9jb29yZGluYXRlc0NvbnRhaW5lcixcbiAgICApO1xuXG4gICAgX2Zvcm1TdWJtaXRDb250YWluZXIuYXBwZW5kKF9mb3JtU3VibWl0KTtcbiAgICBfbWFpbkZvcm0uYXBwZW5kKF9mb3JtRmllbGRzZXQsIF9mb3JtU3VibWl0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBfbWFpbkZvcm07XG4gIH07XG5cbiAgLy8gSW5pdGlhbGl6ZSByZXNwb25zZSBlbGVtZW50c1xuICBjb25zdCBfbWFpblJlc3BvbnNlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleC1jb2xcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRNYWluUmVzcG9uc2UgPSAoKSA9PiBfbWFpblJlc3BvbnNlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUhlYWRlckNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXgtcm93XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VIZWFkZXJDb250YWluZXIgPSAoKSA9PiBfcmVzcG9uc2VIZWFkZXJDb250YWluZXI7XG5cbiAgY29uc3QgX3Jlc3BvbnNlTG9jYXRpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlTG9jYXRpb24gPSAoKSA9PiBfcmVzcG9uc2VMb2NhdGlvbjtcblxuICBjb25zdCBfcmVzcG9uc2VEYXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZURhdGUgPSAoKSA9PiBfcmVzcG9uc2VEYXRlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUNvbnRlbnRDb250YWluZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUNvbnRlbnRDb250YWluZXIgPSAoKSA9PiBfcmVzcG9uc2VDb250ZW50Q29udGFpbmVyO1xuXG4gIGNvbnN0IF9yZXNwb25zZUNvbmRpdGlvbkljb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUNvbmRpdGlvbkljb24gPSAoKSA9PiBfcmVzcG9uc2VDb25kaXRpb25JY29uO1xuXG4gIGNvbnN0IF9yZXNwb25zZUNvbmRpdGlvblRleHQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUNvbmRpdGlvblRleHQgPSAoKSA9PiBfcmVzcG9uc2VDb25kaXRpb25UZXh0O1xuXG4gIGNvbnN0IF9yZXNwb25zZVRlbXBlcmF0dXJlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VUZW1wZXJhdHVyZSA9ICgpID0+IF9yZXNwb25zZVRlbXBlcmF0dXJlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZlZWxzTGlrZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlRmVlbHNMaWtlID0gKCkgPT4gX3Jlc3BvbnNlRmVlbHNMaWtlO1xuXG4gIGNvbnN0IF9yZXNwb25zZVdpbmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZVdpbmQgPSAoKSA9PiBfcmVzcG9uc2VXaW5kO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0Q29udGFpbmVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdENvbnRhaW5lciA9ICgpID0+IF9yZXNwb25zZUZvcmVjYXN0Q29udGFpbmVyO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25JY29uID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uSWNvbiA9ICgpID0+IF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25JY29uO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25UZXh0ID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uVGV4dCA9ICgpID0+IF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25UZXh0O1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRNYXhUZW1wZXJhdHVyZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlRm9yZWNhc3RlZE1heFRlbXBlcmF0dXJlID0gKCkgPT4gX3Jlc3BvbnNlRm9yZWNhc3RlZE1heFRlbXBlcmF0dXJlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRNaW5UZW1wZXJhdHVyZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlRm9yZWNhc3RlZE1pblRlbXBlcmF0dXJlID0gKCkgPT4gX3Jlc3BvbnNlRm9yZWNhc3RlZE1pblRlbXBlcmF0dXJlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRXaW5kID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkV2luZCA9ICgpID0+IF9yZXNwb25zZUZvcmVjYXN0ZWRXaW5kO1xuXG4gIC8vIE9yZGVyIHJlc3BvbnNlIGVsZW1lbnRzXG4gIGNvbnN0IF9jcmVhdGVNYWluUmVzcG9uc2UgPSAoKSA9PiB7XG5cbiAgICAvLyBDcmVhdGUgRE9NIHRyZWVcbiAgICBfcmVzcG9uc2VIZWFkZXJDb250YWluZXIuYXBwZW5kKFxuICAgICAgICBfcmVzcG9uc2VMb2NhdGlvbixcbiAgICAgICAgX3Jlc3BvbnNlRGF0ZVxuICAgICk7XG5cbiAgICBfcmVzcG9uc2VDb250ZW50Q29udGFpbmVyLmFwcGVuZChcbiAgICAgIF9yZXNwb25zZUNvbmRpdGlvbkljb24sXG4gICAgICBfcmVzcG9uc2VUZW1wZXJhdHVyZSxcbiAgICAgIF9yZXNwb25zZUNvbmRpdGlvblRleHQsXG4gICAgICBfcmVzcG9uc2VGZWVsc0xpa2UsXG4gICAgICBfcmVzcG9uc2VXaW5kXG4gICk7XG5cbiAgX3Jlc3BvbnNlRm9yZWNhc3RDb250YWluZXIuYXBwZW5kKFxuICAgIF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25JY29uLFxuICAgIF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25UZXh0LFxuICAgIF9yZXNwb25zZUZvcmVjYXN0ZWRNYXhUZW1wZXJhdHVyZSxcbiAgICBfcmVzcG9uc2VGb3JlY2FzdGVkTWluVGVtcGVyYXR1cmUsXG4gICAgX3Jlc3BvbnNlRm9yZWNhc3RlZFdpbmRcbik7XG5cbiAgICBfbWFpblJlc3BvbnNlLmFwcGVuZChcbiAgICAgIF9yZXNwb25zZUhlYWRlckNvbnRhaW5lcixcbiAgICAgIF9yZXNwb25zZUNvbnRlbnRDb250YWluZXIsXG4gICAgICBfcmVzcG9uc2VGb3JlY2FzdENvbnRhaW5lclxuICAgICk7XG5cbiAgICByZXR1cm4gX21haW5SZXNwb25zZTtcbiAgfTtcblxuICBjb25zdCBidWlsZCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGZvcm0gPSBfY3JlYXRlTWFpbkZvcm0oKTtcbiAgICBjb25zdCByZXNwb25zZSA9IF9jcmVhdGVNYWluUmVzcG9uc2UoKTtcblxuICAgIF9tYWluLmFwcGVuZChcbiAgICAgIGZvcm0sXG4gICAgICByZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gX21haW47XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldE1haW4sXG4gICAgZ2V0TWFpbkZvcm0sXG4gICAgZ2V0Rm9ybUZpZWxkc2V0LFxuICAgIGdldENpdHlOYW1lSW5wdXQsXG4gICAgZ2V0QXJlYUNvZGVJbnB1dCxcbiAgICBnZXRDb29yZGluYXRlc0NvbnRhaW5lcixcbiAgICBnZXRMb25naXR1ZGVJbnB1dCxcbiAgICBnZXRMYXRpdHVkZUlucHV0LFxuICAgIGdldEZvcm1TdWJtaXRDb250YWluZXIsXG4gICAgZ2V0Rm9ybVN1Ym1pdCxcbiAgICBnZXRNYWluUmVzcG9uc2UsXG4gICAgZ2V0UmVzcG9uc2VIZWFkZXJDb250YWluZXIsXG4gICAgZ2V0UmVzcG9uc2VMb2NhdGlvbixcbiAgICBnZXRSZXNwb25zZURhdGUsXG4gICAgZ2V0UmVzcG9uc2VDb250ZW50Q29udGFpbmVyLFxuICAgIGdldFJlc3BvbnNlQ29uZGl0aW9uSWNvbixcbiAgICBnZXRSZXNwb25zZUNvbmRpdGlvblRleHQsXG4gICAgZ2V0UmVzcG9uc2VUZW1wZXJhdHVyZSxcbiAgICBnZXRSZXNwb25zZUZlZWxzTGlrZSxcbiAgICBnZXRSZXNwb25zZVdpbmQsXG4gICAgZ2V0UmVzcG9uc2VGb3JlY2FzdENvbnRhaW5lcixcbiAgICBnZXRSZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25JY29uLFxuICAgIGdldFJlc3BvbnNlRm9yZWNhc3RlZENvbmRpdGlvblRleHQsXG4gICAgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkTWF4VGVtcGVyYXR1cmUsXG4gICAgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkTWluVGVtcGVyYXR1cmUsXG4gICAgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkV2luZCxcbiAgICBidWlsZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIiwiY29uc3QgQVBJX0tFWSA9IFwiYWRkYTZlZjhmYmEyNGRlYThkNjEwODE1MjMyNDEwXCI7XG5cbmNvbnN0IEZPUkVDQVNUX1FVRVJZX0JBU0UgPVxuICBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PVwiICsgQVBJX0tFWTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChGT1JFQ0FTVF9RVUVSWV9CQVNFICsgXCImcT1cIiArIGxvY2F0aW9uICsgXCImZGF5cz0xXCIsIHtcbiAgICBtb2RlOiBcImNvcnNcIixcbiAgfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIC8vIFRvZGF5J3Mgd2VhdGhlciBpbmZvcm1hdGlvblxuICBjb25zdCBjaXR5TmFtZSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gIGNvbnN0IGNvdW50cnlOYW1lID0gd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgY29uc3QgbGFzdFVwZGF0ZWQgPSBjdXJyZW50V2VhdGhlckRhdGEubGFzdF91cGRhdGVkO1xuICAvLyBNZXRyaWMgbWVhc3VyZW1lbnRzXG4gIGNvbnN0IGN1cnJlbnRUZW1wQyA9IGN1cnJlbnRXZWF0aGVyRGF0YS50ZW1wX2M7XG4gIGNvbnN0IGZlZWxzTGlrZUMgPSBjdXJyZW50V2VhdGhlckRhdGEuZmVlbHNsaWtlX2M7XG4gIGNvbnN0IGN1cnJlbnRXaW5kS3BoID0gY3VycmVudFdlYXRoZXJEYXRhLndpbmRfa3BoO1xuICAvLyBJbXBlcmlhbCBtZWFzdXJlbWVudHNcbiAgY29uc3QgY3VycmVudFRlbXBGID0gY3VycmVudFdlYXRoZXJEYXRhLnRlbXBfZjtcbiAgY29uc3QgZmVlbHNMaWtlRiA9IGN1cnJlbnRXZWF0aGVyRGF0YS5mZWVsc2xpa2VfZjtcbiAgY29uc3QgY3VycmVudFdpbmRNcGggPSBjdXJyZW50V2VhdGhlckRhdGEud2luZF9tcGg7XG4gIC8vIFRvZGF5J3MgY29uZGl0aW9uc1xuICBjb25zdCBpc0RheSA9ICEhY3VycmVudFdlYXRoZXJEYXRhLmlzX2RheTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvblRleHQgPSBjdXJyZW50V2VhdGhlckRhdGEuY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb25JY29uID0gY3VycmVudFdlYXRoZXJEYXRhLmNvbmRpdGlvbi5pY29uO1xuXG4gIC8vIFRvbW9ycm93J3Mgd2VhdGhlciBpbmZvcm1hdGlvblxuICBjb25zdCB0b21vcnJvd1dlYXRoZXJEYXRhID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5O1xuICAvLyBNZXRyaWMgbWVhc3VyZW1lbnRzXG4gIGNvbnN0IHRvbW9ycm93TWF4VGVtcEMgPSB0b21vcnJvd1dlYXRoZXJEYXRhLm1heHRlbXBfYztcbiAgY29uc3QgdG9tb3Jyb3dNaW5UZW1wQyA9IHRvbW9ycm93V2VhdGhlckRhdGEubWludGVtcF9jO1xuICBjb25zdCB0b21vcnJvd01heFdpbmRLcGggPSB0b21vcnJvd1dlYXRoZXJEYXRhLm1heHdpbmRfa3BoO1xuICAvLyBJbXBlcmlhbCBtZWFzdXJlbWVudHNcbiAgY29uc3QgdG9tb3Jyb3dNYXhUZW1wRiA9IHRvbW9ycm93V2VhdGhlckRhdGEubWF4dGVtcF9mO1xuICBjb25zdCB0b21vcnJvd01pblRlbXBGID0gdG9tb3Jyb3dXZWF0aGVyRGF0YS5taW50ZW1wX2Y7XG4gIGNvbnN0IHRvbW9ycm93TWF4V2luZE1waCA9IHRvbW9ycm93V2VhdGhlckRhdGEubWF4d2luZF9tcGg7XG4gIC8vIFRvbW9ycm93cydzIGNvbmRpdGlvbnNcbiAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb25UZXh0ID0gdG9tb3Jyb3dXZWF0aGVyRGF0YS5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb25JY29uID0gdG9tb3Jyb3dXZWF0aGVyRGF0YS5jb25kaXRpb24uaWNvbjtcbiAgcmV0dXJuIHtcbiAgICBjaXR5TmFtZSxcbiAgICBjb3VudHJ5TmFtZSxcbiAgICBsYXN0VXBkYXRlZCxcbiAgICBjdXJyZW50VGVtcEMsXG4gICAgZmVlbHNMaWtlQyxcbiAgICBjdXJyZW50V2luZEtwaCxcbiAgICBjdXJyZW50VGVtcEYsXG4gICAgZmVlbHNMaWtlRixcbiAgICBjdXJyZW50V2luZE1waCxcbiAgICBpc0RheSxcbiAgICBjdXJyZW50Q29uZGl0aW9uVGV4dCxcbiAgICBjdXJyZW50Q29uZGl0aW9uSWNvbixcbiAgICB0b21vcnJvd01heFRlbXBDLFxuICAgIHRvbW9ycm93TWluVGVtcEMsXG4gICAgdG9tb3Jyb3dNYXhXaW5kS3BoLFxuICAgIHRvbW9ycm93TWF4VGVtcEYsXG4gICAgdG9tb3Jyb3dNaW5UZW1wRixcbiAgICB0b21vcnJvd01heFdpbmRNcGgsXG4gICAgdG9tb3Jyb3dDb25kaXRpb25UZXh0LFxuICAgIHRvbW9ycm93Q29uZGl0aW9uSWNvbixcbiAgfTtcbn1cblxuZXhwb3J0IHsgZ2V0Rm9yZWNhc3QgfTtcbiIsImltcG9ydCB7IGdldEZvcmVjYXN0IH0gZnJvbSBcIi4vZmV0Y2hcIjtcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNvbnN0IGN1cnNvciA9IGRpc3BsYXlDb250cm9sbGVyKCk7XG5jb25zdCBtYWluID0gY3Vyc29yLmJ1aWxkKCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChtYWluKTtcblxuXG5jb25zdCBsb25kb24gPSBhd2FpdCBnZXRGb3JlY2FzdChcImxvbmRvblwiKTtcbmNvbnNvbGUubG9nKGxvbmRvbi5sYXN0VXBkYXRlZCk7XG5jb25zb2xlLmxvZyhsb25kb24udG9tb3Jyb3dNaW5UZW1wQyk7XG5jb25zb2xlLmxvZyhsb25kb24uY3VycmVudENvbmRpdGlvblRleHQpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=