webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
var _this = undefined,
    _jsxFileName = "/home/jithinks/Desktop/portfolio/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, style), __jsx("div", {
    className: "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), children));
};

var theme = {
  darkBackground: 'black',
  titleColor: 'white',
  subTitleColor: 'darkgrey',
  headerColor: '#ee2a4d'
};
var style = "\n  .title {\n    font-size:40px;\n    display: inline-block;\n    margin:0;\n    color: ".concat(theme.titleColor, "\n  }\n  .sub-title {\n    display: inline-block;\n    margin-left: 0.5rem;\n    color:").concat(theme.subTitleColor, "\n  }\n  * {\n    font-family:Roboto;\n  }\n  ol {\n      padding-left:1rem;\n  }\n  .wrapper {\n    width:70vw;\n    margin:auto;\n    min-width:600px;\n  }\n  h2 {\n    margin:0;\n    color: ").concat(theme.headerColor, "\n  }\n  body {\n    background-color:").concat(theme.darkBackground, ";\n  }\n  a {\n    color:grey;\n    text-decoration:none;\n  }\n  a:hover {\n    color:white;\n  }\n  li {\n    color:white;\n  }\n");
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var Title = function Title() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 3
    }
  }, __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, "When you wake"), __jsx("div", {
    className: "sub-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "Portfolio website of Jithin KS"));
};

/***/ }),

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
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, header), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
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
        lineNumber: 7,
        columnNumber: 45
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./theme.js":
false

})
//# sourceMappingURL=index.js.00cf1e3b02956f8f6532.hot-update.js.map