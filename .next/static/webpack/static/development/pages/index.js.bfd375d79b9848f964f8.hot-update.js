webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/my-works/list.js":
/*!*************************************!*\
  !*** ./components/my-works/list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Link */ "./components/Link.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./theme.js");
var _this = undefined,
    _jsxFileName = "/home/jithinks/Desktop/portfolio/components/my-works/list.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var List = function List(_ref) {
  var header = _ref.header,
      contents = _ref.contents;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, style), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, header), __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, contents.map(function (_ref2) {
    var link = _ref2.link,
        title = _ref2.title;
    return __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      link: link,
      title: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    });
  })));
};

var style = "\n  h2 {\n    margin:0;\n    color: ".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["default"].headerColor, ";\n    filter: drop-shadow(3px 1px 1px black);\n  }\n");
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.bfd375d79b9848f964f8.hot-update.js.map