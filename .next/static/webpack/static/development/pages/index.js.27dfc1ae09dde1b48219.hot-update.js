webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TechnicalArticles.js":
/*!*****************************************!*\
  !*** ./components/TechnicalArticles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/jithinks/Desktop/portfolio/components/TechnicalArticles.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var MainContent = function MainContent() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, "Technical articles"), __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, articles.map(function (_ref) {
    var link = _ref.link,
        title = _ref.title;
    return __jsx(Link, {
      link: link,
      title: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 45
      }
    });
  })));
};

var Link = function Link(_ref2) {
  var link = _ref2.link,
      title = _ref2.title;
  return __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("a", {
    target: "_blank",
    href: link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, title));
};

var articles = [{
  title: "Understanding the Universe through code...",
  link: "https://dev.to/jithinks97/understanding-the-universe-through-code-dg8"
}, {
  title: "Writing clean code in React...",
  link: "https://dev.to/jithinks97/writing-clean-react-code-2mcm"
}];
/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ })

})
//# sourceMappingURL=index.js.27dfc1ae09dde1b48219.hot-update.js.map