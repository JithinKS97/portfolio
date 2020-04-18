webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GeneralArticles.js":
/*!***************************************!*\
  !*** ./components/GeneralArticles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _this = undefined,
    _jsxFileName = "/home/jithinks/Desktop/portfolio/components/GeneralArticles.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var MainContent = function MainContent() {
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
  }, "General articles"), __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, articles.map(function (_ref) {
    var link = _ref.link,
        title = _ref.title;
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

var articles = [{
  title: "Improving Science and Math education using p5.js",
  link: "https://medium.com/processing-foundation/improving-science-and-math-education-using-p5-js-d434beea465c"
}, {
  title: "The most beautiful feeling",
  link: "https://medium.com/@jithunni.ks/the-most-beautiful-feeling-b74aa7f82ba0"
}, {
  title: "Something that I wish to witness before I leave",
  link: "https://medium.com/@jithunni.ks/everyone-who-has-ever-lived-every-story-that-has-ever-been-told-every-event-that-has-ever-a779464d8783"
}, {
  title: "Two questions that will help you to lead a fulfilled life!",
  link: "https://medium.com/@jithunni.ks/i-have-found-two-important-questions-to-which-you-need-to-find-answers-which-will-help-you-ea0470531a6b"
}];
/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/jithinks/Desktop/portfolio/components/Link.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Link = function Link(_ref) {
  var link = _ref.link,
      title = _ref.title;
  return __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("a", {
    target: "_blank",
    href: link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ })

})
//# sourceMappingURL=index.js.cc0d2edd50e2ee348093.hot-update.js.map