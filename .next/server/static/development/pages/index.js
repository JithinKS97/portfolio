module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Animations.js":
/*!**********************************!*\
  !*** ./components/Animations.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/home/jithinks/Desktop/portfolio/components/Animations.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Animations = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, "Animations"), __jsx("ol", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, animations.map(({
  link,
  title
}) => __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
  link: link,
  title: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 47
  }
}))));

const animations = [{
  title: "AnimateBig (Youtube animation channel)",
  link: "https://www.youtube.com/user/animatebig/videos"
}, {
  title: "Dude at coffee shop",
  link: "https://www.youtube.com/watch?v=blNn2rKyjA0"
}, {
  title: "Wise dude on top of mountain",
  link: "https://www.youtube.com/watch?v=FQ8XlLlXE70"
}];
/* harmony default export */ __webpack_exports__["default"] = (Animations);

/***/ }),

/***/ "./components/Artworks.js":
/*!********************************!*\
  !*** ./components/Artworks.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/home/jithinks/Desktop/portfolio/components/Artworks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Artworks = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, "Artworks"), __jsx("ol", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, simulations.map(({
  link,
  title
}) => __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
  link: link,
  title: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 48
  }
}))));

const simulations = [{
  title: "Coverpage of Dyuthi website",
  link: "https://jithinks97.github.io/GEC/Parallax%20finished/Parallax_night/sketch/index.html"
}, {
  title: "Spring effect on text",
  link: "https://jithinks97.github.io/TEDX/index.html"
}];
/* harmony default export */ __webpack_exports__["default"] = (Artworks);

/***/ }),

/***/ "./components/GeneralArticles.js":
/*!***************************************!*\
  !*** ./components/GeneralArticles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/home/jithinks/Desktop/portfolio/components/GeneralArticles.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Articles = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, "General articles"), __jsx("ol", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, articles.map(({
  link,
  title
}) => __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
  link: link,
  title: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 45
  }
}))));

const articles = [{
  title: "The most beautiful feeling",
  link: "https://medium.com/@jithunni.ks/the-most-beautiful-feeling-b74aa7f82ba0"
}, {
  title: "Something that I wish to witness before I leave",
  link: "https://medium.com/@jithunni.ks/everyone-who-has-ever-lived-every-story-that-has-ever-been-told-every-event-that-has-ever-a779464d8783"
}, {
  title: "Two questions that will help you to lead a fulfilled life!",
  link: "https://medium.com/@jithunni.ks/i-have-found-two-important-questions-to-which-you-need-to-find-answers-which-will-help-you-ea0470531a6b"
}, {
  title: "Are we becoming a machine during Examination",
  link: "https://medium.com/@jithunni.ks/are-we-becoming-a-machine-during-examination-2f6afc0c9a7c"
}];
/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jithinks/Desktop/portfolio/components/Link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Link = ({
  link,
  title
}) => {
  return __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("a", {
    target: "_blank",
    href: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/home/jithinks/Desktop/portfolio/components/Projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Projects = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, "Projects"), __jsx("ol", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, projects.map(({
  link,
  title
}) => __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
  link: link,
  title: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 45
  }
}))));

const projects = [{
  title: "Dynamic learning",
  link: "https://www.dynamiclearning.io/"
}];
/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/Simulations.js":
/*!***********************************!*\
  !*** ./components/Simulations.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/home/jithinks/Desktop/portfolio/components/Simulations.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Simulations = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, "Simulations"), __jsx("ol", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, simulations.map(({
  link,
  title
}) => __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
  link: link,
  title: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 48
  }
}))));

const simulations = [{
  title: "Dynamic learning workbooks",
  link: "https://www.dynamiclearning.io/explore"
}, {
  title: "Damped oscillation",
  link: "https://jithinks97.github.io/Dynamic-Learning/DampedOscillation/index.html"
}, {
  title: "Djikstra's algorithm visualization",
  link: "https://jithinks97.github.io/Dynamic-Learning/Dijkstras/index.html"
},, {
  title: "Interference experiment with bullets",
  link: "https://jithinks97.github.io/Dynamic-Learning/Interference-experiment-with-bullets/index.html"
}, {
  title: "Perceptron training",
  link: "https://jithinks97.github.io/Perceptron%20training/index.html"
}, {
  title: "Stability of atomic nucleus",
  link: "https://jithinks97.github.io/Dynamic-Learning/Stability%20of%20atomic%20nucleus/index.html"
}, {
  title: "Rotation of coordinate system",
  link: "https://jithinks97.github.io/Dynamic-Learning/Rotation%20of%20coordinate%20system/index.html"
}];
/* harmony default export */ __webpack_exports__["default"] = (Simulations);

/***/ }),

/***/ "./components/TechnicalArticles.js":
/*!*****************************************!*\
  !*** ./components/TechnicalArticles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/home/jithinks/Desktop/portfolio/components/TechnicalArticles.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Articles = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, "Technical articles"), __jsx("ol", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, articles.map(({
  link,
  title
}) => __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
  link: link,
  title: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 45
  }
}))));

const articles = [{
  title: "Improving Science and Math education using p5.js",
  link: "https://medium.com/processing-foundation/improving-science-and-math-education-using-p5-js-d434beea465c"
}, {
  title: "Writing clean code in React",
  link: "https://dev.to/jithinks97/writing-clean-react-code-2mcm"
}, {
  title: "Understanding the Universe through code",
  link: "https://dev.to/jithinks97/understanding-the-universe-through-code-dg8"
}];
/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ }),

/***/ "./markdown/introduction.md":
/*!**********************************!*\
  !*** ./markdown/introduction.md ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# When you wake\n\nHello everyone. My name is Jithin KS and this is my portfolio website. I'm currently working as a software Engineer in Chennai, India.\n\n\n\n\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GeneralArticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GeneralArticles */ "./components/GeneralArticles.js");
/* harmony import */ var _components_TechnicalArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TechnicalArticles */ "./components/TechnicalArticles.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var _components_Artworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Artworks */ "./components/Artworks.js");
/* harmony import */ var _components_Simulations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Simulations */ "./components/Simulations.js");
/* harmony import */ var _components_Animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Animations */ "./components/Animations.js");
var _jsxFileName = "/home/jithinks/Desktop/portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Index = ({
  content
}) => {
  console.log(content);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("style", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, styles), __jsx("div", {
    className: "page-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "introduction",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: content.default,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(Row, {
    components: [__jsx(_components_TechnicalArticles__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 30
      }
    }), __jsx(_components_GeneralArticles__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 52
      }
    })],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx(Row, {
    components: [__jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 29
      }
    }), __jsx(_components_Artworks__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 42
      }
    })],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx(Row, {
    components: [__jsx(_components_Simulations__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 29
      }
    }), __jsx(_components_Animations__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 45
      }
    })],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx(AboutMe, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })));
};

const Row = ({
  components
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  style: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }
}, __jsx("div", {
  style: {
    width: '50%'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}, components[0]), __jsx("div", {
  style: {
    width: '50%'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}, components[1])));

Index.getInitialProps = async ctx => {
  const content = await __webpack_require__(/*! ../markdown/introduction.md */ "./markdown/introduction.md");
  return {
    content
  };
};

const AboutMe = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }
}, "About me");

const styles = `
    .page-wrapper {
        width:80vw;
        margin:auto;
        font-family:Roboto;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jithinks/Desktop/portfolio/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map