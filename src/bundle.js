/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n    * Created by ninoosewoudt on 12/06/2017.\n    */\n\nwindow.WebFontConfig = {\n    google: {\n        families: ['Snippet', 'Arvo:700italic', 'Podkova:700']\n    }\n};\n\nvar app = new PIXI.Application();\ndocument.body.appendChild(app.view);\n\napp.renderer.view.style.position = \"absolute\";\napp.renderer.view.style.display = \"block\";\napp.renderer.autoResize = true;\napp.renderer.resize(window.innerWidth, window.innerHeight);\n\nsetup();\n\nfunction setup() {\n\n    this.menuScene = new MainMenu();\n    app.stage.addChild(this.menuScene.scene);\n    this.menuScene.visible = false;\n\n    this.gameScene = new Game();\n    app.stage.addChild(this.gameScene.scene);\n    this.gameScene.visible = false;\n\n    //Set the game state\n    this.state = menu;\n\n    //Start the game loop\n    gameLoop();\n}\n\nfunction gameLoop() {\n    //Loop this function 60 times per second\n    requestAnimationFrame(gameLoop);\n    //Update the current game state\n    this.state();\n    //Render the stage\n    app.renderer.render(app.stage);\n    //console.log(this.state);\n}\n\nfunction loading() {\n    this.menuScene.visible = false;\n    this.gameScene.visible = false;\n}\n\nfunction menu() {\n    this.menuScene.visible = true;\n    this.menuScene.visible = false;\n    this.gameScene.visible = false;\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdC9tYWluLmpzPzkyMWIiXSwibmFtZXMiOlsid2luZG93IiwiV2ViRm9udENvbmZpZyIsImdvb2dsZSIsImZhbWlsaWVzIiwiYXBwIiwiUElYSSIsIkFwcGxpY2F0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2aWV3IiwicmVuZGVyZXIiLCJzdHlsZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsImF1dG9SZXNpemUiLCJyZXNpemUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzZXR1cCIsIm1lbnVTY2VuZSIsIk1haW5NZW51Iiwic3RhZ2UiLCJhZGRDaGlsZCIsInNjZW5lIiwidmlzaWJsZSIsImdhbWVTY2VuZSIsIkdhbWUiLCJzdGF0ZSIsIm1lbnUiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7O0FBQUk7Ozs7QUFJQUEsT0FBT0MsYUFBUCxHQUF1QjtBQUNuQkMsWUFBUTtBQUNKQyxrQkFBVSxDQUFDLFNBQUQsRUFBWSxnQkFBWixFQUE4QixhQUE5QjtBQUROO0FBRFcsQ0FBdkI7O0FBTUEsSUFBSUMsTUFBTSxJQUFJQyxLQUFLQyxXQUFULEVBQVY7QUFDQUMsU0FBU0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxJQUFJTSxJQUE5Qjs7QUFFQU4sSUFBSU8sUUFBSixDQUFhRCxJQUFiLENBQWtCRSxLQUFsQixDQUF3QkMsUUFBeEIsR0FBbUMsVUFBbkM7QUFDQVQsSUFBSU8sUUFBSixDQUFhRCxJQUFiLENBQWtCRSxLQUFsQixDQUF3QkUsT0FBeEIsR0FBa0MsT0FBbEM7QUFDQVYsSUFBSU8sUUFBSixDQUFhSSxVQUFiLEdBQTBCLElBQTFCO0FBQ0FYLElBQUlPLFFBQUosQ0FBYUssTUFBYixDQUFvQmhCLE9BQU9pQixVQUEzQixFQUF1Q2pCLE9BQU9rQixXQUE5Qzs7QUFFQUM7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjs7QUFFYixTQUFLQyxTQUFMLEdBQWlCLElBQUlDLFFBQUosRUFBakI7QUFDQWpCLFFBQUlrQixLQUFKLENBQVVDLFFBQVYsQ0FBbUIsS0FBS0gsU0FBTCxDQUFlSSxLQUFsQztBQUNBLFNBQUtKLFNBQUwsQ0FBZUssT0FBZixHQUF5QixLQUF6Qjs7QUFFQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLElBQUosRUFBakI7QUFDQXZCLFFBQUlrQixLQUFKLENBQVVDLFFBQVYsQ0FBbUIsS0FBS0csU0FBTCxDQUFlRixLQUFsQztBQUNBLFNBQUtFLFNBQUwsQ0FBZUQsT0FBZixHQUF5QixLQUF6Qjs7QUFFSjtBQUNJLFNBQUtHLEtBQUwsR0FBYUMsSUFBYjs7QUFFSjtBQUNJQztBQUNQOztBQUVHLFNBQVNBLFFBQVQsR0FBbUI7QUFDZjtBQUNBQywwQkFBc0JELFFBQXRCO0FBQ0E7QUFDQSxTQUFLRixLQUFMO0FBQ0E7QUFDQXhCLFFBQUlPLFFBQUosQ0FBYXFCLE1BQWIsQ0FBb0I1QixJQUFJa0IsS0FBeEI7QUFDQTtBQUNQOztBQUVHLFNBQVNXLE9BQVQsR0FBbUI7QUFDZixTQUFLYixTQUFMLENBQWVLLE9BQWYsR0FBeUIsS0FBekI7QUFDQSxTQUFLQyxTQUFMLENBQWVELE9BQWYsR0FBeUIsS0FBekI7QUFFSDs7QUFFRCxTQUFTSSxJQUFULEdBQWdCO0FBQ1osU0FBS1QsU0FBTCxDQUFlSyxPQUFmLEdBQXlCLElBQXpCO0FBQ0EsU0FBS0wsU0FBTCxDQUFlSyxPQUFmLEdBQXlCLEtBQXpCO0FBQ0EsU0FBS0MsU0FBTCxDQUFlRCxPQUFmLEdBQXlCLEtBQXpCO0FBR1AiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAvKipcbiAgICAgICAgKiBDcmVhdGVkIGJ5IG5pbm9vc2V3b3VkdCBvbiAxMi8wNi8yMDE3LlxuICAgICAgICAqL1xuXG4gICAgd2luZG93LldlYkZvbnRDb25maWcgPSB7XG4gICAgICAgIGdvb2dsZToge1xuICAgICAgICAgICAgZmFtaWxpZXM6IFsnU25pcHBldCcsICdBcnZvOjcwMGl0YWxpYycsICdQb2Rrb3ZhOjcwMCddXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XG5cbiAgICBhcHAucmVuZGVyZXIudmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBhcHAucmVuZGVyZXIudmlldy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGFwcC5yZW5kZXJlci5hdXRvUmVzaXplID0gdHJ1ZTtcbiAgICBhcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgc2V0dXAoKTtcblxuICAgIGZ1bmN0aW9uIHNldHVwKCkge1xuXG4gICAgICAgIHRoaXMubWVudVNjZW5lID0gbmV3IE1haW5NZW51KCk7XG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLm1lbnVTY2VuZS5zY2VuZSk7XG4gICAgICAgIHRoaXMubWVudVNjZW5lLnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmdhbWVTY2VuZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmdhbWVTY2VuZS5zY2VuZSk7XG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lLnZpc2libGUgPSBmYWxzZTtcblxuICAgIC8vU2V0IHRoZSBnYW1lIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUgPSBtZW51O1xuXG4gICAgLy9TdGFydCB0aGUgZ2FtZSBsb29wXG4gICAgICAgIGdhbWVMb29wKCk7XG59XG5cbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpe1xuICAgICAgICAvL0xvb3AgdGhpcyBmdW5jdGlvbiA2MCB0aW1lcyBwZXIgc2Vjb25kXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgICAgIC8vVXBkYXRlIHRoZSBjdXJyZW50IGdhbWUgc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZSgpO1xuICAgICAgICAvL1JlbmRlciB0aGUgc3RhZ2VcbiAgICAgICAgYXBwLnJlbmRlcmVyLnJlbmRlcihhcHAuc3RhZ2UpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xufVxuXG4gICAgZnVuY3Rpb24gbG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5tZW51U2NlbmUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVTY2VuZS52aXNpYmxlID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZW51KCkge1xuICAgICAgICB0aGlzLm1lbnVTY2VuZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZW51U2NlbmUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVTY2VuZS52aXNpYmxlID0gZmFsc2U7XG5cblxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvamF2YXNjcmlwdC9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);