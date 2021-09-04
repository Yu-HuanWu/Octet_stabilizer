/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\"); // const GameView = require(\"./scripts/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById('octet-game');\n  canvas.width = Game.DIM_X;\n  canvas.height = Game.DIM_Y;\n  var ctx = canvas.getContext(\"2d\");\n  var game = new Game();\n  game.draw(ctx); // new GameView(game, ctx).start();\n}); //webpack\n//webpack --watch --mode=development//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXBCLEMsQ0FDQTs7O0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVU7QUFDcEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsR0FBY04sSUFBSSxDQUFDTyxLQUFuQjtBQUNBSCxFQUFBQSxNQUFNLENBQUNJLE1BQVAsR0FBZVIsSUFBSSxDQUFDUyxLQUFwQjtBQUVBLE1BQU1DLEdBQUcsR0FBR04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUUsSUFBSVosSUFBSixFQUFaO0FBQ0FZLEVBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxHQUFWLEVBUG9ELENBUXBEO0FBQ0gsQ0FURCxFLENBV0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL09jdGV0X1N0YWJpbGl6ZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuLy8gY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWVfdmlldy5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2N0ZXQtZ2FtZScpO1xuICAgIGNhbnZhcy53aWR0aD0gR2FtZS5ESU1fWDtcbiAgICBjYW52YXMuaGVpZ2h0PSBHYW1lLkRJTV9ZO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBnYW1lPSBuZXcgR2FtZSgpO1xuICAgIGdhbWUuZHJhdyhjdHgpO1xuICAgIC8vIG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpLnN0YXJ0KCk7XG59KVxuXG4vL3dlYnBhY2tcbi8vd2VicGFjayAtLXdhdGNoIC0tbW9kZT1kZXZlbG9wbWVudCAiXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiRElNX1giLCJoZWlnaHQiLCJESU1fWSIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/atom.js":
/*!*****************************!*\
  !*** ./src/scripts/atom.js ***!
  \*****************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIiJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hdG9tLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/atom.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Atom = __webpack_require__(/*! ./atom */ \"./src/scripts/atom.js\");\n\nvar Player = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\nvar Util = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\nfunction Game() {\n  this.atoms = [];\n  this.players = []; //potential feature: instead of player being the atom, the player is a spaceship that hold the atom in front.\n}\n\nGame.DIM_X = 400;\nGame.DIM_Y = 400;\nGame.FPS = 32;\nGame.NUM_ATOMS = 9;\nGame.NUM_PLAYERS = 7;\n\nGame.prototype.draw = function draw(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = \"rgba(0, 0, 0, 0.3)\";\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y); // this.allObjects().forEach(function (object) {\n  //     object.draw(ctx);\n  // });\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMseUNBQUQsQ0FBdEI7O0FBQ0EsSUFBTUUsSUFBSSxHQUFHRixtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUVBLFNBQVNHLElBQVQsR0FBZTtBQUNYLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS0MsT0FBTCxHQUFjLEVBQWQsQ0FGVyxDQUdYO0FBQ0g7O0FBR0RGLElBQUksQ0FBQ0csS0FBTCxHQUFhLEdBQWI7QUFDQUgsSUFBSSxDQUFDSSxLQUFMLEdBQWEsR0FBYjtBQUNBSixJQUFJLENBQUNLLEdBQUwsR0FBVyxFQUFYO0FBQ0FMLElBQUksQ0FBQ00sU0FBTCxHQUFpQixDQUFqQjtBQUNBTixJQUFJLENBQUNPLFdBQUwsR0FBa0IsQ0FBbEI7O0FBR0FQLElBQUksQ0FBQ1EsU0FBTCxDQUFlQyxJQUFmLEdBQXNCLFNBQVNBLElBQVQsQ0FBY0MsR0FBZCxFQUFtQjtBQUNyQ0EsRUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQlgsSUFBSSxDQUFDRyxLQUF6QixFQUFnQ0gsSUFBSSxDQUFDSSxLQUFyQztBQUNBTSxFQUFBQSxHQUFHLENBQUNFLFNBQUosR0FBZ0Isb0JBQWhCO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0csUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJiLElBQUksQ0FBQ0csS0FBeEIsRUFBK0JILElBQUksQ0FBQ0ksS0FBcEMsRUFIcUMsQ0FLckM7QUFDQTtBQUNBO0FBQ0gsQ0FSRDs7QUFVQVUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixJQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL09jdGV0X1N0YWJpbGl6ZXIvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXRvbSA9IHJlcXVpcmUoXCIuL2F0b21cIik7XG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcblxuZnVuY3Rpb24gR2FtZSgpe1xuICAgIHRoaXMuYXRvbXMgPSBbXTtcbiAgICB0aGlzLnBsYXllcnMgPVtdO1xuICAgIC8vcG90ZW50aWFsIGZlYXR1cmU6IGluc3RlYWQgb2YgcGxheWVyIGJlaW5nIHRoZSBhdG9tLCB0aGUgcGxheWVyIGlzIGEgc3BhY2VzaGlwIHRoYXQgaG9sZCB0aGUgYXRvbSBpbiBmcm9udC5cbn1cblxuXG5HYW1lLkRJTV9YID0gNDAwO1xuR2FtZS5ESU1fWSA9IDQwMDtcbkdhbWUuRlBTID0gMzI7XG5HYW1lLk5VTV9BVE9NUyA9IDk7XG5HYW1lLk5VTV9QTEFZRVJTPSA3O1xuXG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiBkcmF3KGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR2FtZS5ESU1fWCwgR2FtZS5ESU1fWSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwLjMpXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuXG4gICAgLy8gdGhpcy5hbGxPYmplY3RzKCkuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgLy8gICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgLy8gfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iXSwibmFtZXMiOlsiQXRvbSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJVdGlsIiwiR2FtZSIsImF0b21zIiwicGxheWVycyIsIkRJTV9YIiwiRElNX1kiLCJGUFMiLCJOVU1fQVRPTVMiLCJOVU1fUExBWUVSUyIsInByb3RvdHlwZSIsImRyYXciLCJjdHgiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIiJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIiJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlsLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/util.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PY3RldF9TdGFiaWxpemVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;