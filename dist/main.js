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
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,gDAAgD;EAChD,aAAa;EACb,aAAa;EACb,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,4CAA4C;AAC9C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,qCAAqC;EACrC,YAAY;EACZ,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,uCAAuC;EACvC,qBAAqB;AACvB;;AAEA;EACE,uCAAuC;EACvC,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["html {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  height: 100vh;\n  display: grid;\n  place-content: center;\n  background-color: aquamarine;\n}\n\nmain {\n  padding: 2rem;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\nfieldset {\n  border: none;\n}\n\nlegend {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n\nlabel,\ninput {\n  display: block;\n}\n\nlabel {\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n\ninput {\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.02);\n  border: none;\n  border-bottom: 1px solid black;\n  outline: none;\n}\n\ninput:focus {\n  background-color: rgba(0, 0, 0, 0.05);\n  border: 1px solid black;\n}\n\nbutton {\n  font-size: 1.5rem;\n  padding: 0.5rem 1rem;\n  color: white;\n  background-color: black;\n  border: none;\n  outline: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 5px 5px;\n  transition: all 200ms;\n}\n\nbutton:hover {\n  box-shadow: rgba(0, 0, 0, 0.35) 2px 2px;\n  transform: translate(3px, 3px);\n}\n\n.field {\n  padding: 0.5rem;\n  border: 1rem solid black;\n  box-shadow: rgba(0, 0, 0, 0.35) 5px 5px;\n}\n\n.flex-row {\n  display: flex;\n  gap: 2rem;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.upper {\n  text-transform: uppercase;\n}\n\n.center {\n  align-self: center;\n}\n\n.small {\n  font-size: 0.75em;\n}\n\n.divider {\n  font-weight: bold;\n  width: 2.25rem;\n  height: 2.25rem;\n  display: grid;\n  place-content: center;\n  color: white;\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");



const addEventListeners = () => {
  const displayCursor = (0,_display__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const formSubmit = displayCursor.getFormSubmit();

  async function getResponse(cursor, query) {
    const response = await (0,_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
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

  formSubmit.addEventListener("click", () => {
    const cityNameInput = displayCursor.getCityNameInput();
    const areaCodeInput = displayCursor.getAreaCodeInput();
    const longitudeInput = displayCursor.getLongitudeInput();
    const latitudeInput = displayCursor.getLatitudeInput();

    const cityName = cityNameInput.value;
    const areaCode = areaCodeInput.value;
    const longitude = longitudeInput.value;
    const latitude = latitudeInput.value;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListeners);


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

  const _cityNameField = (() => {
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

  const getCityNameField = () => _cityNameField;
  const getCityNameInput = () => _cityNameField.lastChild;

  const _areaCodeField = (() => {
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

  const getAreaCodeField = () => _areaCodeField;
  const getAreaCodeInput = () => _areaCodeField.lastChild;

  const _coordinatesContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("flex-row", "field");
    return container;
  })();

  const getCoordinatesContainer = () => _coordinatesContainer;

  const _longitudeField = (() => {
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

  const getLongitudeField = () => _longitudeField;
  const getLongitudeInput = () => _longitudeField.lastChild;

  const _latitudeField = (() => {
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

  const getLatitudeField = () => _latitudeField;
  const getLatitudeInput = () => _latitudeField.lastChild;

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
    };

    // Create DOM tree
    _coordinatesContainer.append(
      _longitudeField,
      makeDivider("and", "green"),
      _latitudeField,
    );

    _formFieldset.append(
      _cityNameField,
      makeDivider("or", "orange"),
      _areaCodeField,
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

  const getResponseForecastedConditionIcon = () =>
    _responseForecastedConditionIcon;

  const _responseForecastedConditionText = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedConditionText = () =>
    _responseForecastedConditionText;

  const _responseForecastedMaxTemperature = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedMaxTemperature = () =>
    _responseForecastedMaxTemperature;

  const _responseForecastedMinTemperature = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedMinTemperature = () =>
    _responseForecastedMinTemperature;

  const _responseForecastedWind = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedWind = () => _responseForecastedWind;

  // Order response elements
  const renderMainResponse = () => {
    // Create DOM tree
    _responseHeaderContainer.replaceChildren(_responseLocation, _responseDate);

    _responseContentContainer.replaceChildren(
      _responseConditionIcon,
      _responseTemperature,
      _responseConditionText,
      _responseFeelsLike,
      _responseWind,
    );

    _responseForecastContainer.replaceChildren(
      _responseForecastedConditionIcon,
      _responseForecastedConditionText,
      _responseForecastedMaxTemperature,
      _responseForecastedMinTemperature,
      _responseForecastedWind,
    );

    _mainResponse.replaceChildren(
      _responseHeaderContainer,
      _responseContentContainer,
      _responseForecastContainer,
    );

    return _mainResponse;
  };

  const build = () => {
    const form = _createMainForm();
    const response = renderMainResponse();

    _main.append(form, response);

    return _main;
  };

  return {
    getMain,
    getMainForm,
    getFormFieldset,
    getCityNameField,
    getCityNameInput,
    getAreaCodeField,
    getAreaCodeInput,
    getCoordinatesContainer,
    getLongitudeField,
    getLongitudeInput,
    getLatitudeField,
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
  const response = await fetch(
    FORECAST_QUERY_BASE + "&q=" + location + "&days=1",
    {
      mode: "cors",
    },
  );
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
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./src/control.js");


(0,_control__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLElBQUksbURBQW1ELElBQUk7O0FBRTVGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLElBQUksdUNBQXVDLElBQUk7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNXakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDckUzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQTBDOztBQUUxQyxvREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb250cm9sLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxubGFiZWwsXG5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgNXB4IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xufVxuXG5idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDJweCAycHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgM3B4KTtcbn1cblxuLmZpZWxkIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDFyZW0gc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgNXB4IDVweDtcbn1cblxuLmZsZXgtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xufVxuXG4uZmxleC1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG59XG5cbi51cHBlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4uZGl2aWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMi4yNXJlbTtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5sYWJlbCxcXG5pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgNXB4IDVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMnB4IDJweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgM3B4KTtcXG59XFxuXFxuLmZpZWxkIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXJlbSBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgNXB4IDVweDtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnVwcGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc21hbGwge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbi5kaXZpZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDIuMjVyZW07XFxuICBoZWlnaHQ6IDIuMjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gXCIuL2ZldGNoXCI7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheUN1cnNvciA9IGRpc3BsYXlDb250cm9sbGVyKCk7XG5cbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGRpc3BsYXlDdXJzb3IuZ2V0Rm9ybVN1Ym1pdCgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlKGN1cnNvciwgcXVlcnkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZvcmVjYXN0KHF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGN1cnNvci5nZXRSZXNwb25zZUxvY2F0aW9uKCk7XG4gICAgY29uc3QgZGF0ZSA9IGN1cnNvci5nZXRSZXNwb25zZURhdGUoKTtcblxuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBjdXJzb3IuZ2V0UmVzcG9uc2VDb25kaXRpb25JY29uKCk7XG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGN1cnNvci5nZXRSZXNwb25zZUNvbmRpdGlvblRleHQoKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGN1cnNvci5nZXRSZXNwb25zZVRlbXBlcmF0dXJlKCk7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gY3Vyc29yLmdldFJlc3BvbnNlRmVlbHNMaWtlKCk7XG4gICAgY29uc3Qgd2luZCA9IGN1cnNvci5nZXRSZXNwb25zZVdpbmQoKTtcblxuICAgIGNvbnN0IGZvcmVjYXN0Q29uZGl0aW9uSWNvbiA9IGN1cnNvci5nZXRSZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25JY29uKCk7XG4gICAgY29uc3QgZm9yZWNhc3RDb25kaXRpb25UZXh0ID0gY3Vyc29yLmdldFJlc3BvbnNlRm9yZWNhc3RlZENvbmRpdGlvblRleHQoKTtcbiAgICBjb25zdCBmb3JlY2FzdE1heFRlbXBlcmF0dXJlID0gY3Vyc29yLmdldFJlc3BvbnNlRm9yZWNhc3RlZE1heFRlbXBlcmF0dXJlKCk7XG4gICAgY29uc3QgZm9yZWNhc3RNaW5UZW1wZXJhdHVyZSA9IGN1cnNvci5nZXRSZXNwb25zZUZvcmVjYXN0ZWRNaW5UZW1wZXJhdHVyZSgpO1xuICAgIGNvbnN0IGZvcmVjYXN0V2luZCA9IGN1cnNvci5nZXRSZXNwb25zZUZvcmVjYXN0ZWRXaW5kKCk7XG5cbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmNpdHlOYW1lfSwgJHtyZXNwb25zZS5jb3VudHJ5TmFtZX1gO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSByZXNwb25zZS5sYXN0VXBkYXRlZDtcblxuICAgIGNvbmRpdGlvbkljb24uc3JjID0gYGh0dHBzOiR7cmVzcG9uc2UuY3VycmVudENvbmRpdGlvbkljb259YDtcbiAgICBjb25kaXRpb25UZXh0LnRleHRDb250ZW50ID0gcmVzcG9uc2UuY3VycmVudENvbmRpdGlvblRleHQ7XG4gICAgLy8gVE9ETzogSW1wbGVtZW50IGltcGVyaWFsIGFzIGFsdGVybmF0aXZlIHRvIG1ldHJpY1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gcmVzcG9uc2UuY3VycmVudFRlbXBDO1xuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmZlZWxzTGlrZUM7XG4gICAgd2luZC50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmN1cnJlbnRXaW5kS3BoO1xuXG4gICAgZm9yZWNhc3RDb25kaXRpb25JY29uLnNyYyA9IGBodHRwczoke3Jlc3BvbnNlLnRvbW9ycm93Q29uZGl0aW9uSWNvbn1gO1xuICAgIGZvcmVjYXN0Q29uZGl0aW9uVGV4dC50ZXh0Q29udGVudCA9IHJlc3BvbnNlLnRvbW9ycm93Q29uZGl0aW9uVGV4dDtcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgaW1wZXJpYWwgYXMgYWx0ZXJuYXRpdmUgdG8gbWV0cmljXG4gICAgZm9yZWNhc3RNYXhUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLnRvbW9ycm93TWF4VGVtcEM7XG4gICAgZm9yZWNhc3RNaW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLnRvbW9ycm93TWluVGVtcEM7XG4gICAgZm9yZWNhc3RXaW5kLnRleHRDb250ZW50ID0gcmVzcG9uc2UudG9tb3Jyb3dNYXhXaW5kS3BoO1xuICB9XG5cbiAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNpdHlOYW1lSW5wdXQgPSBkaXNwbGF5Q3Vyc29yLmdldENpdHlOYW1lSW5wdXQoKTtcbiAgICBjb25zdCBhcmVhQ29kZUlucHV0ID0gZGlzcGxheUN1cnNvci5nZXRBcmVhQ29kZUlucHV0KCk7XG4gICAgY29uc3QgbG9uZ2l0dWRlSW5wdXQgPSBkaXNwbGF5Q3Vyc29yLmdldExvbmdpdHVkZUlucHV0KCk7XG4gICAgY29uc3QgbGF0aXR1ZGVJbnB1dCA9IGRpc3BsYXlDdXJzb3IuZ2V0TGF0aXR1ZGVJbnB1dCgpO1xuXG4gICAgY29uc3QgY2l0eU5hbWUgPSBjaXR5TmFtZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGFyZWFDb2RlID0gYXJlYUNvZGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBsb25naXR1ZGUgPSBsb25naXR1ZGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBsYXRpdHVkZSA9IGxhdGl0dWRlSW5wdXQudmFsdWU7XG5cbiAgICBsZXQgcXVlcnk7XG5cbiAgICBpZiAoY2l0eU5hbWUpIHtcbiAgICAgIHF1ZXJ5ID0gY2l0eU5hbWU7XG4gICAgfSBlbHNlIGlmIChhcmVhQ29kZSkge1xuICAgICAgcXVlcnkgPSBhcmVhQ29kZTtcbiAgICB9IGVsc2UgaWYgKGxvbmdpdHVkZSAmJiBsYXRpdHVkZSkge1xuICAgICAgcXVlcnkgPSBgJHtsb25naXR1ZGV9LCR7bGF0aXR1ZGV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnkgPSBcIlRvcm9udG9cIjtcbiAgICB9XG5cbiAgICBnZXRSZXNwb25zZShkaXNwbGF5Q3Vyc29yLCBxdWVyeSk7XG5cbiAgICBkaXNwbGF5Q3Vyc29yLnJlbmRlck1haW5SZXNwb25zZSgpO1xuICB9KTtcblxuICBjb25zdCBtYWluID0gZGlzcGxheUN1cnNvci5idWlsZCgpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEV2ZW50TGlzdGVuZXJzO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIC8vIEluaXRpYWxpemUgcGFnZSBzdHJ1Y3R1cmVcbiAgY29uc3QgX21haW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJmbGV4LXJvd1wiKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRNYWluID0gKCkgPT4gX21haW47XG5cbiAgLy8gSW5pdGlhbGl6ZSBmb3JtIGVsZW1lbnRzXG4gIGNvbnN0IF9tYWluRm9ybSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmbGV4LWNvbFwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldE1haW5Gb3JtID0gKCkgPT4gX21haW5Gb3JtO1xuXG4gIGNvbnN0IF9mb3JtRmllbGRzZXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXgtY29sXCIpO1xuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlNlYXJjaCBGb3IgVGhlIFdlYXRoZXJcIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQobGVnZW5kKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldEZvcm1GaWVsZHNldCA9ICgpID0+IF9mb3JtRmllbGRzZXQ7XG5cbiAgY29uc3QgX2NpdHlOYW1lRmllbGQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDaXR5IE5hbWVcIjtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidXBwZXJcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY2l0eVwiKTtcblxuICAgIGNvbnN0IHBhcmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBhcmFtLnR5cGUgPSBcInRleHRcIjtcbiAgICBwYXJhbS5pZCA9IFwiY2l0eVwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpZWxkXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIHBhcmFtKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldENpdHlOYW1lRmllbGQgPSAoKSA9PiBfY2l0eU5hbWVGaWVsZDtcbiAgY29uc3QgZ2V0Q2l0eU5hbWVJbnB1dCA9ICgpID0+IF9jaXR5TmFtZUZpZWxkLmxhc3RDaGlsZDtcblxuICBjb25zdCBfYXJlYUNvZGVGaWVsZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkFyZWEgQ29kZVwiO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ1cHBlclwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJhcmVhXCIpO1xuXG4gICAgY29uc3QgcGFyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGFyYW0udHlwZSA9IFwidGV4dFwiO1xuICAgIHBhcmFtLmlkID0gXCJhcmVhXCI7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGRcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgcGFyYW0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0QXJlYUNvZGVGaWVsZCA9ICgpID0+IF9hcmVhQ29kZUZpZWxkO1xuICBjb25zdCBnZXRBcmVhQ29kZUlucHV0ID0gKCkgPT4gX2FyZWFDb2RlRmllbGQubGFzdENoaWxkO1xuXG4gIGNvbnN0IF9jb29yZGluYXRlc0NvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXgtcm93XCIsIFwiZmllbGRcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlc0NvbnRhaW5lciA9ICgpID0+IF9jb29yZGluYXRlc0NvbnRhaW5lcjtcblxuICBjb25zdCBfbG9uZ2l0dWRlRmllbGQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJMb25naXR1ZGVcIjtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidXBwZXJcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG9uXCIpO1xuXG4gICAgY29uc3QgcGFyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGFyYW0udHlwZSA9IFwidGV4dFwiO1xuICAgIHBhcmFtLmlkID0gXCJsb25cIjtcbiAgICBwYXJhbS5wYXR0ZXJuID1cbiAgICAgIFwiXihcXFxcK3wtKT8oPzoxODAoPzooPzpcXFxcLjB7MSw2fSk/KXwoPzpbMC05XXxbMS05XVswLTldfDFbMC03XVswLTldKSg/Oig/OlxcXFwuWzAtOV17MSw2fSk/KSkkXCI7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIHBhcmFtKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldExvbmdpdHVkZUZpZWxkID0gKCkgPT4gX2xvbmdpdHVkZUZpZWxkO1xuICBjb25zdCBnZXRMb25naXR1ZGVJbnB1dCA9ICgpID0+IF9sb25naXR1ZGVGaWVsZC5sYXN0Q2hpbGQ7XG5cbiAgY29uc3QgX2xhdGl0dWRlRmllbGQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJMYXRpdHVkZVwiO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ1cHBlclwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsYXRcIik7XG5cbiAgICBjb25zdCBwYXJhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwYXJhbS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcGFyYW0uaWQgPSBcImxhdFwiO1xuICAgIHBhcmFtLnBhdHRlcm4gPVxuICAgICAgXCJeKFxcXFwrfC0pPyg/OjkwKD86KD86XFxcXC4wezEsNn0pPyl8KD86WzAtOV18WzEtOF1bMC05XSkoPzooPzpcXFxcLlswLTldezEsNn0pPykpJFwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBwYXJhbSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRMYXRpdHVkZUZpZWxkID0gKCkgPT4gX2xhdGl0dWRlRmllbGQ7XG4gIGNvbnN0IGdldExhdGl0dWRlSW5wdXQgPSAoKSA9PiBfbGF0aXR1ZGVGaWVsZC5sYXN0Q2hpbGQ7XG5cbiAgY29uc3QgX2Zvcm1TdWJtaXRDb250YWluZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRGb3JtU3VibWl0Q29udGFpbmVyID0gKCkgPT4gX2Zvcm1TdWJtaXRDb250YWluZXI7XG5cbiAgY29uc3QgX2Zvcm1TdWJtaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRm9yZWNhc3RcIjtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInVwcGVyXCIpO1xuICAgIHJldHVybiBidXR0b247XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0Rm9ybVN1Ym1pdCA9ICgpID0+IF9mb3JtU3VibWl0O1xuXG4gIC8vIE9yZGVyIGZvcm0gZWxlbWVudHNcbiAgY29uc3QgX2NyZWF0ZU1haW5Gb3JtID0gKCkgPT4ge1xuICAgIC8vIENyZWF0ZSBlbGVtZW50cyBmb3Igc3R5bGluZ1xuICAgIGNvbnN0IG1ha2VEaXZpZGVyID0gKGNvbnRlbnQsIGNvbG9yKSA9PiB7XG4gICAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdmlkZXIudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgZGl2aWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gICAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXZpZGVyXCIsIFwidXBwZXJcIiwgXCJjZW50ZXJcIiwgXCJzbWFsbFwiKTtcbiAgICAgIHJldHVybiBkaXZpZGVyO1xuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgRE9NIHRyZWVcbiAgICBfY29vcmRpbmF0ZXNDb250YWluZXIuYXBwZW5kKFxuICAgICAgX2xvbmdpdHVkZUZpZWxkLFxuICAgICAgbWFrZURpdmlkZXIoXCJhbmRcIiwgXCJncmVlblwiKSxcbiAgICAgIF9sYXRpdHVkZUZpZWxkLFxuICAgICk7XG5cbiAgICBfZm9ybUZpZWxkc2V0LmFwcGVuZChcbiAgICAgIF9jaXR5TmFtZUZpZWxkLFxuICAgICAgbWFrZURpdmlkZXIoXCJvclwiLCBcIm9yYW5nZVwiKSxcbiAgICAgIF9hcmVhQ29kZUZpZWxkLFxuICAgICAgbWFrZURpdmlkZXIoXCJvclwiLCBcIm9yYW5nZVwiKSxcbiAgICAgIF9jb29yZGluYXRlc0NvbnRhaW5lcixcbiAgICApO1xuXG4gICAgX2Zvcm1TdWJtaXRDb250YWluZXIuYXBwZW5kKF9mb3JtU3VibWl0KTtcbiAgICBfbWFpbkZvcm0uYXBwZW5kKF9mb3JtRmllbGRzZXQsIF9mb3JtU3VibWl0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBfbWFpbkZvcm07XG4gIH07XG5cbiAgLy8gSW5pdGlhbGl6ZSByZXNwb25zZSBlbGVtZW50c1xuICBjb25zdCBfbWFpblJlc3BvbnNlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleC1jb2xcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRNYWluUmVzcG9uc2UgPSAoKSA9PiBfbWFpblJlc3BvbnNlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUhlYWRlckNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXgtcm93XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VIZWFkZXJDb250YWluZXIgPSAoKSA9PiBfcmVzcG9uc2VIZWFkZXJDb250YWluZXI7XG5cbiAgY29uc3QgX3Jlc3BvbnNlTG9jYXRpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlTG9jYXRpb24gPSAoKSA9PiBfcmVzcG9uc2VMb2NhdGlvbjtcblxuICBjb25zdCBfcmVzcG9uc2VEYXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZURhdGUgPSAoKSA9PiBfcmVzcG9uc2VEYXRlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUNvbnRlbnRDb250YWluZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUNvbnRlbnRDb250YWluZXIgPSAoKSA9PiBfcmVzcG9uc2VDb250ZW50Q29udGFpbmVyO1xuXG4gIGNvbnN0IF9yZXNwb25zZUNvbmRpdGlvbkljb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUNvbmRpdGlvbkljb24gPSAoKSA9PiBfcmVzcG9uc2VDb25kaXRpb25JY29uO1xuXG4gIGNvbnN0IF9yZXNwb25zZUNvbmRpdGlvblRleHQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUNvbmRpdGlvblRleHQgPSAoKSA9PiBfcmVzcG9uc2VDb25kaXRpb25UZXh0O1xuXG4gIGNvbnN0IF9yZXNwb25zZVRlbXBlcmF0dXJlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VUZW1wZXJhdHVyZSA9ICgpID0+IF9yZXNwb25zZVRlbXBlcmF0dXJlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZlZWxzTGlrZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlRmVlbHNMaWtlID0gKCkgPT4gX3Jlc3BvbnNlRmVlbHNMaWtlO1xuXG4gIGNvbnN0IF9yZXNwb25zZVdpbmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZVdpbmQgPSAoKSA9PiBfcmVzcG9uc2VXaW5kO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0Q29udGFpbmVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdENvbnRhaW5lciA9ICgpID0+IF9yZXNwb25zZUZvcmVjYXN0Q29udGFpbmVyO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25JY29uID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uSWNvbiA9ICgpID0+XG4gICAgX3Jlc3BvbnNlRm9yZWNhc3RlZENvbmRpdGlvbkljb247XG5cbiAgY29uc3QgX3Jlc3BvbnNlRm9yZWNhc3RlZENvbmRpdGlvblRleHQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUZvcmVjYXN0ZWRDb25kaXRpb25UZXh0ID0gKCkgPT5cbiAgICBfcmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uVGV4dDtcblxuICBjb25zdCBfcmVzcG9uc2VGb3JlY2FzdGVkTWF4VGVtcGVyYXR1cmUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUZvcmVjYXN0ZWRNYXhUZW1wZXJhdHVyZSA9ICgpID0+XG4gICAgX3Jlc3BvbnNlRm9yZWNhc3RlZE1heFRlbXBlcmF0dXJlO1xuXG4gIGNvbnN0IF9yZXNwb25zZUZvcmVjYXN0ZWRNaW5UZW1wZXJhdHVyZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlRm9yZWNhc3RlZE1pblRlbXBlcmF0dXJlID0gKCkgPT5cbiAgICBfcmVzcG9uc2VGb3JlY2FzdGVkTWluVGVtcGVyYXR1cmU7XG5cbiAgY29uc3QgX3Jlc3BvbnNlRm9yZWNhc3RlZFdpbmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBnZXRSZXNwb25zZUZvcmVjYXN0ZWRXaW5kID0gKCkgPT4gX3Jlc3BvbnNlRm9yZWNhc3RlZFdpbmQ7XG5cbiAgLy8gT3JkZXIgcmVzcG9uc2UgZWxlbWVudHNcbiAgY29uc3QgcmVuZGVyTWFpblJlc3BvbnNlID0gKCkgPT4ge1xuICAgIC8vIENyZWF0ZSBET00gdHJlZVxuICAgIF9yZXNwb25zZUhlYWRlckNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oX3Jlc3BvbnNlTG9jYXRpb24sIF9yZXNwb25zZURhdGUpO1xuXG4gICAgX3Jlc3BvbnNlQ29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oXG4gICAgICBfcmVzcG9uc2VDb25kaXRpb25JY29uLFxuICAgICAgX3Jlc3BvbnNlVGVtcGVyYXR1cmUsXG4gICAgICBfcmVzcG9uc2VDb25kaXRpb25UZXh0LFxuICAgICAgX3Jlc3BvbnNlRmVlbHNMaWtlLFxuICAgICAgX3Jlc3BvbnNlV2luZCxcbiAgICApO1xuXG4gICAgX3Jlc3BvbnNlRm9yZWNhc3RDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKFxuICAgICAgX3Jlc3BvbnNlRm9yZWNhc3RlZENvbmRpdGlvbkljb24sXG4gICAgICBfcmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uVGV4dCxcbiAgICAgIF9yZXNwb25zZUZvcmVjYXN0ZWRNYXhUZW1wZXJhdHVyZSxcbiAgICAgIF9yZXNwb25zZUZvcmVjYXN0ZWRNaW5UZW1wZXJhdHVyZSxcbiAgICAgIF9yZXNwb25zZUZvcmVjYXN0ZWRXaW5kLFxuICAgICk7XG5cbiAgICBfbWFpblJlc3BvbnNlLnJlcGxhY2VDaGlsZHJlbihcbiAgICAgIF9yZXNwb25zZUhlYWRlckNvbnRhaW5lcixcbiAgICAgIF9yZXNwb25zZUNvbnRlbnRDb250YWluZXIsXG4gICAgICBfcmVzcG9uc2VGb3JlY2FzdENvbnRhaW5lcixcbiAgICApO1xuXG4gICAgcmV0dXJuIF9tYWluUmVzcG9uc2U7XG4gIH07XG5cbiAgY29uc3QgYnVpbGQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IF9jcmVhdGVNYWluRm9ybSgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gcmVuZGVyTWFpblJlc3BvbnNlKCk7XG5cbiAgICBfbWFpbi5hcHBlbmQoZm9ybSwgcmVzcG9uc2UpO1xuXG4gICAgcmV0dXJuIF9tYWluO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFpbixcbiAgICBnZXRNYWluRm9ybSxcbiAgICBnZXRGb3JtRmllbGRzZXQsXG4gICAgZ2V0Q2l0eU5hbWVGaWVsZCxcbiAgICBnZXRDaXR5TmFtZUlucHV0LFxuICAgIGdldEFyZWFDb2RlRmllbGQsXG4gICAgZ2V0QXJlYUNvZGVJbnB1dCxcbiAgICBnZXRDb29yZGluYXRlc0NvbnRhaW5lcixcbiAgICBnZXRMb25naXR1ZGVGaWVsZCxcbiAgICBnZXRMb25naXR1ZGVJbnB1dCxcbiAgICBnZXRMYXRpdHVkZUZpZWxkLFxuICAgIGdldExhdGl0dWRlSW5wdXQsXG4gICAgZ2V0Rm9ybVN1Ym1pdENvbnRhaW5lcixcbiAgICBnZXRGb3JtU3VibWl0LFxuICAgIGdldE1haW5SZXNwb25zZSxcbiAgICBnZXRSZXNwb25zZUhlYWRlckNvbnRhaW5lcixcbiAgICBnZXRSZXNwb25zZUxvY2F0aW9uLFxuICAgIGdldFJlc3BvbnNlRGF0ZSxcbiAgICBnZXRSZXNwb25zZUNvbnRlbnRDb250YWluZXIsXG4gICAgZ2V0UmVzcG9uc2VDb25kaXRpb25JY29uLFxuICAgIGdldFJlc3BvbnNlQ29uZGl0aW9uVGV4dCxcbiAgICBnZXRSZXNwb25zZVRlbXBlcmF0dXJlLFxuICAgIGdldFJlc3BvbnNlRmVlbHNMaWtlLFxuICAgIGdldFJlc3BvbnNlV2luZCxcbiAgICBnZXRSZXNwb25zZUZvcmVjYXN0Q29udGFpbmVyLFxuICAgIGdldFJlc3BvbnNlRm9yZWNhc3RlZENvbmRpdGlvbkljb24sXG4gICAgZ2V0UmVzcG9uc2VGb3JlY2FzdGVkQ29uZGl0aW9uVGV4dCxcbiAgICBnZXRSZXNwb25zZUZvcmVjYXN0ZWRNYXhUZW1wZXJhdHVyZSxcbiAgICBnZXRSZXNwb25zZUZvcmVjYXN0ZWRNaW5UZW1wZXJhdHVyZSxcbiAgICBnZXRSZXNwb25zZUZvcmVjYXN0ZWRXaW5kLFxuICAgIHJlbmRlck1haW5SZXNwb25zZSxcbiAgICBidWlsZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIiwiY29uc3QgQVBJX0tFWSA9IFwiYWRkYTZlZjhmYmEyNGRlYThkNjEwODE1MjMyNDEwXCI7XG5cbmNvbnN0IEZPUkVDQVNUX1FVRVJZX0JBU0UgPVxuICBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PVwiICsgQVBJX0tFWTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBGT1JFQ0FTVF9RVUVSWV9CQVNFICsgXCImcT1cIiArIGxvY2F0aW9uICsgXCImZGF5cz0xXCIsXG4gICAge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfSxcbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgLy8gVG9kYXkncyB3ZWF0aGVyIGluZm9ybWF0aW9uXG4gIGNvbnN0IGNpdHlOYW1lID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgY29uc3QgY291bnRyeU5hbWUgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5sYXN0X3VwZGF0ZWQ7XG4gIC8vIE1ldHJpYyBtZWFzdXJlbWVudHNcbiAgY29uc3QgY3VycmVudFRlbXBDID0gY3VycmVudFdlYXRoZXJEYXRhLnRlbXBfYztcbiAgY29uc3QgZmVlbHNMaWtlQyA9IGN1cnJlbnRXZWF0aGVyRGF0YS5mZWVsc2xpa2VfYztcbiAgY29uc3QgY3VycmVudFdpbmRLcGggPSBjdXJyZW50V2VhdGhlckRhdGEud2luZF9rcGg7XG4gIC8vIEltcGVyaWFsIG1lYXN1cmVtZW50c1xuICBjb25zdCBjdXJyZW50VGVtcEYgPSBjdXJyZW50V2VhdGhlckRhdGEudGVtcF9mO1xuICBjb25zdCBmZWVsc0xpa2VGID0gY3VycmVudFdlYXRoZXJEYXRhLmZlZWxzbGlrZV9mO1xuICBjb25zdCBjdXJyZW50V2luZE1waCA9IGN1cnJlbnRXZWF0aGVyRGF0YS53aW5kX21waDtcbiAgLy8gVG9kYXkncyBjb25kaXRpb25zXG4gIGNvbnN0IGlzRGF5ID0gISFjdXJyZW50V2VhdGhlckRhdGEuaXNfZGF5O1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uVGV4dCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbkljb24gPSBjdXJyZW50V2VhdGhlckRhdGEuY29uZGl0aW9uLmljb247XG5cbiAgLy8gVG9tb3Jyb3cncyB3ZWF0aGVyIGluZm9ybWF0aW9uXG4gIGNvbnN0IHRvbW9ycm93V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXk7XG4gIC8vIE1ldHJpYyBtZWFzdXJlbWVudHNcbiAgY29uc3QgdG9tb3Jyb3dNYXhUZW1wQyA9IHRvbW9ycm93V2VhdGhlckRhdGEubWF4dGVtcF9jO1xuICBjb25zdCB0b21vcnJvd01pblRlbXBDID0gdG9tb3Jyb3dXZWF0aGVyRGF0YS5taW50ZW1wX2M7XG4gIGNvbnN0IHRvbW9ycm93TWF4V2luZEtwaCA9IHRvbW9ycm93V2VhdGhlckRhdGEubWF4d2luZF9rcGg7XG4gIC8vIEltcGVyaWFsIG1lYXN1cmVtZW50c1xuICBjb25zdCB0b21vcnJvd01heFRlbXBGID0gdG9tb3Jyb3dXZWF0aGVyRGF0YS5tYXh0ZW1wX2Y7XG4gIGNvbnN0IHRvbW9ycm93TWluVGVtcEYgPSB0b21vcnJvd1dlYXRoZXJEYXRhLm1pbnRlbXBfZjtcbiAgY29uc3QgdG9tb3Jyb3dNYXhXaW5kTXBoID0gdG9tb3Jyb3dXZWF0aGVyRGF0YS5tYXh3aW5kX21waDtcbiAgLy8gVG9tb3Jyb3dzJ3MgY29uZGl0aW9uc1xuICBjb25zdCB0b21vcnJvd0NvbmRpdGlvblRleHQgPSB0b21vcnJvd1dlYXRoZXJEYXRhLmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbkljb24gPSB0b21vcnJvd1dlYXRoZXJEYXRhLmNvbmRpdGlvbi5pY29uO1xuICByZXR1cm4ge1xuICAgIGNpdHlOYW1lLFxuICAgIGNvdW50cnlOYW1lLFxuICAgIGxhc3RVcGRhdGVkLFxuICAgIGN1cnJlbnRUZW1wQyxcbiAgICBmZWVsc0xpa2VDLFxuICAgIGN1cnJlbnRXaW5kS3BoLFxuICAgIGN1cnJlbnRUZW1wRixcbiAgICBmZWVsc0xpa2VGLFxuICAgIGN1cnJlbnRXaW5kTXBoLFxuICAgIGlzRGF5LFxuICAgIGN1cnJlbnRDb25kaXRpb25UZXh0LFxuICAgIGN1cnJlbnRDb25kaXRpb25JY29uLFxuICAgIHRvbW9ycm93TWF4VGVtcEMsXG4gICAgdG9tb3Jyb3dNaW5UZW1wQyxcbiAgICB0b21vcnJvd01heFdpbmRLcGgsXG4gICAgdG9tb3Jyb3dNYXhUZW1wRixcbiAgICB0b21vcnJvd01pblRlbXBGLFxuICAgIHRvbW9ycm93TWF4V2luZE1waCxcbiAgICB0b21vcnJvd0NvbmRpdGlvblRleHQsXG4gICAgdG9tb3Jyb3dDb25kaXRpb25JY29uLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGb3JlY2FzdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhZGRFdmVudExpc3RlbmVycyBmcm9tIFwiLi9jb250cm9sXCI7XG5cbmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=