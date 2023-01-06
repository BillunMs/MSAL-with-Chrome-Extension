(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nurbe\projects\OpenAiBot\angular2\angular-msal-login-example\src\styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n/* ! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com */\r\n/*\r\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\r\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\r\n*/\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  border-width: 0;\r\n  /* 2 */\r\n  border-style: solid;\r\n  /* 2 */\r\n  border-color: #e5e7eb;\r\n  /* 2 */\r\n}\r\n::before,\r\n::after {\r\n  --tw-content: '';\r\n}\r\n/*\r\n1. Use a consistent sensible line-height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n3. Use a more readable tab size.\r\n4. Use the user's configured `sans` font-family by default.\r\n5. Use the user's configured `sans` font-feature-settings by default.\r\n*/\r\nhtml {\r\n  line-height: 1.5;\r\n  /* 1 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 2 */\r\n  -moz-tab-size: 4;\r\n  /* 3 */\r\n  tab-size: 4;\r\n  /* 3 */\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  /* 4 */\r\n  font-feature-settings: normal;\r\n  /* 5 */\r\n}\r\n/*\r\n1. Remove the margin in all browsers.\r\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\r\n*/\r\nbody {\r\n  margin: 0;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 2 */\r\n}\r\n/*\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n3. Ensure horizontal rules are visible by default.\r\n*/\r\nhr {\r\n  height: 0;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 2 */\r\n  border-top-width: 1px;\r\n  /* 3 */\r\n}\r\n/*\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\nabbr:where([title]) {\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted;\r\n}\r\n/*\r\nRemove the default font size and weight for headings.\r\n*/\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n}\r\n/*\r\nReset links to optimize for opt-in styling instead of opt-out.\r\n*/\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n/*\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n/*\r\n1. Use the user's configured `mono` font family by default.\r\n2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */\r\n}\r\n/*\r\nAdd the correct font size in all browsers.\r\n*/\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n/*\r\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\r\n*/\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\nsup {\r\n  top: -0.5em;\r\n}\r\n/*\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n3. Remove gaps between table borders by default.\r\n*/\r\ntable {\r\n  text-indent: 0;\r\n  /* 1 */\r\n  border-color: inherit;\r\n  /* 2 */\r\n  border-collapse: collapse;\r\n  /* 3 */\r\n}\r\n/*\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n3. Remove default padding in all browsers.\r\n*/\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 1 */\r\n  font-weight: inherit;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 1 */\r\n  margin: 0;\r\n  /* 2 */\r\n  padding: 0;\r\n  /* 3 */\r\n}\r\n/*\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n*/\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Remove default button styles.\r\n*/\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  background-color: transparent;\r\n  /* 2 */\r\n  background-image: none;\r\n  /* 2 */\r\n}\r\n/*\r\nUse the modern Firefox focus style for all focusable elements.\r\n*/\r\n:-moz-focusring {\r\n  outline: auto;\r\n}\r\n/*\r\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\r\n*/\r\n:-moz-ui-invalid {\r\n  box-shadow: none;\r\n}\r\n/*\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n/*\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n/*\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n[type='search'] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  outline-offset: -2px;\r\n  /* 2 */\r\n}\r\n/*\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to `inherit` in Safari.\r\n*/\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  font: inherit;\r\n  /* 2 */\r\n}\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\nsummary {\r\n  display: list-item;\r\n}\r\n/*\r\nRemoves the default spacing and border for appropriate elements.\r\n*/\r\nblockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre {\r\n  margin: 0;\r\n}\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nlegend {\r\n  padding: 0;\r\n}\r\nol,\r\nul,\r\nmenu {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/*\r\nPrevent resizing textareas horizontally by default.\r\n*/\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n/*\r\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\r\n2. Set the default placeholder color to the user's configured gray 400 color.\r\n*/\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n/*\r\nSet the default cursor for buttons.\r\n*/\r\nbutton,\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n/*\r\nMake sure disabled buttons don't get the pointer cursor.\r\n*/\r\n:disabled {\r\n  cursor: default;\r\n}\r\n/*\r\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\r\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\r\n   This can trigger a poorly considered lint error in some tools but is included by design.\r\n*/\r\nimg,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject {\r\n  display: block;\r\n  /* 1 */\r\n  vertical-align: middle;\r\n  /* 2 */\r\n}\r\n/*\r\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\r\n*/\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n/* Make elements with the HTML hidden attribute stay hidden by default */\r\n[hidden] {\r\n  display: none;\r\n}\r\n*, ::before, ::after {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n::-webkit-backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n::backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n.relative {\r\n  position: relative;\r\n}\r\n.mx-auto {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.mx-2 {\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n}\r\n.mb-4 {\r\n  margin-bottom: 1rem;\r\n}\r\n.ml-4 {\r\n  margin-left: 1rem;\r\n}\r\n.mt-1 {\r\n  margin-top: 0.25rem;\r\n}\r\n.mt-4 {\r\n  margin-top: 1rem;\r\n}\r\n.mt-2 {\r\n  margin-top: 0.5rem;\r\n}\r\n.block {\r\n  display: block;\r\n}\r\n.flex {\r\n  display: flex;\r\n}\r\n.h-8 {\r\n  height: 2rem;\r\n}\r\n.w-full {\r\n  width: 100%;\r\n}\r\n.max-w-md {\r\n  max-width: 28rem;\r\n}\r\n.transform {\r\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r\n}\r\n.items-center {\r\n  align-items: center;\r\n}\r\n.justify-center {\r\n  justify-content: center;\r\n}\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n.rounded-lg {\r\n  border-radius: 0.5rem;\r\n}\r\n.border {\r\n  border-width: 1px;\r\n}\r\n.border-gray-600 {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\r\n}\r\n.bg-white {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n}\r\n.bg-gray-800 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\r\n}\r\n.bg-blue-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\r\n}\r\n.px-6 {\r\n  padding-left: 1.5rem;\r\n  padding-right: 1.5rem;\r\n}\r\n.py-4 {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n.px-4 {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n.py-2 {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n.pt-10 {\r\n  padding-top: 2.5rem;\r\n}\r\n.pb-8 {\r\n  padding-bottom: 2rem;\r\n}\r\n.text-center {\r\n  text-align: center;\r\n}\r\n.text-3xl {\r\n  font-size: 1.875rem;\r\n  line-height: 2.25rem;\r\n}\r\n.text-sm {\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n}\r\n.font-extrabold {\r\n  font-weight: 800;\r\n}\r\n.font-medium {\r\n  font-weight: 500;\r\n}\r\n.font-bold {\r\n  font-weight: 700;\r\n}\r\n.capitalize {\r\n  text-transform: capitalize;\r\n}\r\n.tracking-wide {\r\n  letter-spacing: 0.025em;\r\n}\r\n.text-gray-900 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(17 24 39 / var(--tw-text-opacity));\r\n}\r\n.text-gray-400 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(156 163 175 / var(--tw-text-opacity));\r\n}\r\n.text-gray-700 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(55 65 81 / var(--tw-text-opacity));\r\n}\r\n.text-white {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n.text-blue-400 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(96 165 250 / var(--tw-text-opacity));\r\n}\r\n.placeholder-gray-400::placeholder {\r\n  --tw-placeholder-opacity: 1;\r\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\r\n}\r\n.shadow-xl {\r\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\r\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\r\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n.ring-1 {\r\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n.ring-gray-900\\/5 {\r\n  --tw-ring-color: rgb(17 24 39 / 0.05);\r\n}\r\n.transition-colors {\r\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\r\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\r\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\r\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n  transition-duration: 150ms;\r\n}\r\n.duration-300 {\r\n  transition-duration: 300ms;\r\n}\r\n.hover\\:bg-blue-400:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\r\n}\r\n.hover\\:underline:hover {\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n}\r\n.focus\\:border-blue-300:focus {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(147 197 253 / var(--tw-border-opacity));\r\n}\r\n.focus\\:outline-none:focus {\r\n  outline: 2px solid transparent;\r\n  outline-offset: 2px;\r\n}\r\n.focus\\:ring:focus {\r\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n.focus\\:ring-blue-300:focus {\r\n  --tw-ring-opacity: 1;\r\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\r\n}\r\n.focus\\:ring-opacity-40:focus {\r\n  --tw-ring-opacity: 0.4;\r\n}\r\n.focus\\:ring-opacity-50:focus {\r\n  --tw-ring-opacity: 0.5;\r\n}\r\n@media (min-width: 640px) {\r\n  .sm\\:mx-auto {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .sm\\:max-w-lg {\r\n    max-width: 32rem;\r\n  }\r\n\r\n  .sm\\:rounded-lg {\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .sm\\:px-10 {\r\n    padding-left: 2.5rem;\r\n    padding-right: 2.5rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n/* ! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com */\r\n\r\n/*\r\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\r\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\r\n*/\r\n\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  border-width: 0;\r\n  /* 2 */\r\n  border-style: solid;\r\n  /* 2 */\r\n  border-color: #e5e7eb;\r\n  /* 2 */\r\n}\r\n\r\n::before,\r\n::after {\r\n  --tw-content: '';\r\n}\r\n\r\n/*\r\n1. Use a consistent sensible line-height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n3. Use a more readable tab size.\r\n4. Use the user's configured `sans` font-family by default.\r\n5. Use the user's configured `sans` font-feature-settings by default.\r\n*/\r\n\r\nhtml {\r\n  line-height: 1.5;\r\n  /* 1 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 2 */\r\n  -moz-tab-size: 4;\r\n  /* 3 */\r\n  tab-size: 4;\r\n  /* 3 */\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  /* 4 */\r\n  font-feature-settings: normal;\r\n  /* 5 */\r\n}\r\n\r\n/*\r\n1. Remove the margin in all browsers.\r\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\r\n*/\r\n\r\nbody {\r\n  margin: 0;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n3. Ensure horizontal rules are visible by default.\r\n*/\r\n\r\nhr {\r\n  height: 0;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 2 */\r\n  border-top-width: 1px;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr:where([title]) {\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted;\r\n}\r\n\r\n/*\r\nRemove the default font size and weight for headings.\r\n*/\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n}\r\n\r\n/*\r\nReset links to optimize for opt-in styling instead of opt-out.\r\n*/\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n/*\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/*\r\n1. Use the user's configured `mono` font family by default.\r\n2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/*\r\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/*\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n3. Remove gaps between table borders by default.\r\n*/\r\n\r\ntable {\r\n  text-indent: 0;\r\n  /* 1 */\r\n  border-color: inherit;\r\n  /* 2 */\r\n  border-collapse: collapse;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n3. Remove default padding in all browsers.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 1 */\r\n  font-weight: inherit;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 1 */\r\n  margin: 0;\r\n  /* 2 */\r\n  padding: 0;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n*/\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Remove default button styles.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  background-color: transparent;\r\n  /* 2 */\r\n  background-image: none;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nUse the modern Firefox focus style for all focusable elements.\r\n*/\r\n\r\n:-moz-focusring {\r\n  outline: auto;\r\n}\r\n\r\n/*\r\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n  box-shadow: none;\r\n}\r\n\r\n/*\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/*\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/*\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  outline-offset: -2px;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to `inherit` in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  font: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/*\r\nRemoves the default spacing and border for appropriate elements.\r\n*/\r\n\r\nblockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre {\r\n  margin: 0;\r\n}\r\n\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nlegend {\r\n  padding: 0;\r\n}\r\n\r\nol,\r\nul,\r\nmenu {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/*\r\nPrevent resizing textareas horizontally by default.\r\n*/\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\n/*\r\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\r\n2. Set the default placeholder color to the user's configured gray 400 color.\r\n*/\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nSet the default cursor for buttons.\r\n*/\r\n\r\nbutton,\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\nMake sure disabled buttons don't get the pointer cursor.\r\n*/\r\n\r\n:disabled {\r\n  cursor: default;\r\n}\r\n\r\n/*\r\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\r\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\r\n   This can trigger a poorly considered lint error in some tools but is included by design.\r\n*/\r\n\r\nimg,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject {\r\n  display: block;\r\n  /* 1 */\r\n  vertical-align: middle;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\r\n*/\r\n\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* Make elements with the HTML hidden attribute stay hidden by default */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n*, ::before, ::after {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n::-webkit-backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n::backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.mx-auto {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.mx-2 {\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.mb-4 {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.ml-4 {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.mt-1 {\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.mt-4 {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.mt-2 {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.block {\r\n  display: block;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.h-8 {\r\n  height: 2rem;\r\n}\r\n\r\n.w-full {\r\n  width: 100%;\r\n}\r\n\r\n.max-w-md {\r\n  max-width: 28rem;\r\n}\r\n\r\n.transform {\r\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r\n}\r\n\r\n.items-center {\r\n  align-items: center;\r\n}\r\n\r\n.justify-center {\r\n  justify-content: center;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.rounded-lg {\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.border {\r\n  border-width: 1px;\r\n}\r\n\r\n.border-gray-600 {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\r\n}\r\n\r\n.bg-white {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-gray-800 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-blue-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\r\n}\r\n\r\n.px-6 {\r\n  padding-left: 1.5rem;\r\n  padding-right: 1.5rem;\r\n}\r\n\r\n.py-4 {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.px-4 {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.py-2 {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.pt-10 {\r\n  padding-top: 2.5rem;\r\n}\r\n\r\n.pb-8 {\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-3xl {\r\n  font-size: 1.875rem;\r\n  line-height: 2.25rem;\r\n}\r\n\r\n.text-sm {\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n}\r\n\r\n.font-extrabold {\r\n  font-weight: 800;\r\n}\r\n\r\n.font-medium {\r\n  font-weight: 500;\r\n}\r\n\r\n.font-bold {\r\n  font-weight: 700;\r\n}\r\n\r\n.capitalize {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.tracking-wide {\r\n  letter-spacing: 0.025em;\r\n}\r\n\r\n.text-gray-900 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(17 24 39 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-gray-400 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(156 163 175 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-gray-700 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(55 65 81 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-white {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-blue-400 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(96 165 250 / var(--tw-text-opacity));\r\n}\r\n\r\n.placeholder-gray-400::placeholder {\r\n  --tw-placeholder-opacity: 1;\r\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\r\n}\r\n\r\n.shadow-xl {\r\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\r\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\r\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n\r\n.ring-1 {\r\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n\r\n.ring-gray-900\\/5 {\r\n  --tw-ring-color: rgb(17 24 39 / 0.05);\r\n}\r\n\r\n.transition-colors {\r\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\r\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\r\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\r\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n  transition-duration: 150ms;\r\n}\r\n\r\n.duration-300 {\r\n  transition-duration: 300ms;\r\n}\r\n\r\n.hover\\:bg-blue-400:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:underline:hover {\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n}\r\n\r\n.focus\\:border-blue-300:focus {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(147 197 253 / var(--tw-border-opacity));\r\n}\r\n\r\n.focus\\:outline-none:focus {\r\n  outline: 2px solid transparent;\r\n  outline-offset: 2px;\r\n}\r\n\r\n.focus\\:ring:focus {\r\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n\r\n.focus\\:ring-blue-300:focus {\r\n  --tw-ring-opacity: 1;\r\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\r\n}\r\n\r\n.focus\\:ring-opacity-40:focus {\r\n  --tw-ring-opacity: 0.4;\r\n}\r\n\r\n.focus\\:ring-opacity-50:focus {\r\n  --tw-ring-opacity: 0.5;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .sm\\:mx-auto {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .sm\\:max-w-lg {\r\n    max-width: 32rem;\r\n  }\r\n\r\n  .sm\\:rounded-lg {\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .sm\\:px-10 {\r\n    padding-left: 2.5rem;\r\n    padding-right: 2.5rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map