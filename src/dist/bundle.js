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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _scene = __webpack_require__(2);\n\nvar _scene2 = _interopRequireDefault(_scene);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * Created by ninoosewoudt on 12/06/2017.\n */\nvar MainMenu = function (_Scene) {\n    _inherits(MainMenu, _Scene);\n\n    function MainMenu() {\n        _classCallCheck(this, MainMenu);\n\n        var _this = _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call(this));\n\n        PIXI.loader.add(\"public/images/fox.png\").load(_this.setup.bind(_this));\n\n        return _this;\n    }\n\n    _createClass(MainMenu, [{\n        key: \"setup\",\n        value: function setup() {\n            console.log(this);\n            this.sprite = new PIXI.Sprite(PIXI.loader.resources[\"public/images/fox.png\"].texture);\n            this.scene.addChild(this.sprite);\n        }\n    }]);\n\n    return MainMenu;\n}(_scene2.default);\n\nexports.default = MainMenu;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdC9tYWluTWVudS5qcz8yMGI2Il0sIm5hbWVzIjpbIk1haW5NZW51IiwiUElYSSIsImxvYWRlciIsImFkZCIsImxvYWQiLCJzZXR1cCIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwic3ByaXRlIiwiU3ByaXRlIiwicmVzb3VyY2VzIiwidGV4dHVyZSIsInNjZW5lIiwiYWRkQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsUTs7O0FBR0Ysd0JBQWM7QUFBQTs7QUFBQTs7QUFHVkMsYUFBS0MsTUFBTCxDQUVLQyxHQUZMLENBRVMsdUJBRlQsRUFHS0MsSUFITCxDQUdVLE1BQUtDLEtBQUwsQ0FBV0MsSUFBWCxPQUhWOztBQUhVO0FBU2I7Ozs7Z0NBR087QUFDSkMsb0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYyxJQUFJUixLQUFLUyxNQUFULENBQ1ZULEtBQUtDLE1BQUwsQ0FBWVMsU0FBWixDQUFzQix1QkFBdEIsRUFBK0NDLE9BRHJDLENBQWQ7QUFFQSxpQkFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CLEtBQUtMLE1BQXpCO0FBQ0g7Ozs7OztrQkFLVVQsUSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjZW5lIGZyb20gJy4vc2NlbmUnO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgbmlub29zZXdvdWR0IG9uIDEyLzA2LzIwMTcuXG4gKi9cbmNsYXNzIE1haW5NZW51IGV4dGVuZHMgU2NlbmUge1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBQSVhJLmxvYWRlclxuXG4gICAgICAgICAgICAuYWRkKFwicHVibGljL2ltYWdlcy9mb3gucG5nXCIpXG4gICAgICAgICAgICAubG9hZCh0aGlzLnNldHVwLmJpbmQodGhpcykpO1xuXG5cbiAgICB9XG5cblxuICAgIHNldHVwKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUoXG4gICAgICAgICAgICBQSVhJLmxvYWRlci5yZXNvdXJjZXNbXCJwdWJsaWMvaW1hZ2VzL2ZveC5wbmdcIl0udGV4dHVyZSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5NZW51O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qYXZhc2NyaXB0L21haW5NZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mainMenu = __webpack_require__(0);\n\nvar _mainMenu2 = _interopRequireDefault(_mainMenu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(5);\n\n/**\n        * Created by ninoosewoudt on 12/06/2017.\n        */\n\nwindow.WebFontConfig = {\n    google: {\n        families: ['Snippet', 'Arvo:700italic', 'Podkova:700']\n    }\n};\n\nvar app = new PIXI.Application();\ndocument.body.appendChild(app.view);\n\napp.renderer.view.style.position = \"absolute\";\napp.renderer.view.style.display = \"block\";\napp.renderer.autoResize = true;\napp.renderer.resize(window.innerWidth, window.innerHeight);\n\nsetup();\n\nfunction setup() {\n\n    this.menuScene = new _mainMenu2.default();\n    app.stage.addChild(this.menuScene.scene);\n    this.menuScene.visible = false;\n\n    this.gameScene = new Game();\n    app.stage.addChild(this.gameScene.scene);\n    this.gameScene.visible = false;\n\n    //Set the game state\n    this.state = menu;\n\n    //Start the game loop\n    gameLoop();\n}\n\nfunction gameLoop() {\n    //Loop this function 60 times per second\n    requestAnimationFrame(gameLoop);\n    //Update the current game state\n    this.state();\n    //Render the stage\n    app.renderer.render(app.stage);\n    //console.log(this.state);\n}\n\nfunction loading() {\n    this.menuScene.visible = false;\n    this.gameScene.visible = false;\n}\n\nfunction menu() {\n    this.menuScene.visible = true;\n    this.menuScene.visible = false;\n    this.gameScene.visible = false;\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdC9tYWluLmpzPzkyMWIiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIldlYkZvbnRDb25maWciLCJnb29nbGUiLCJmYW1pbGllcyIsImFwcCIsIlBJWEkiLCJBcHBsaWNhdGlvbiIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidmlldyIsInJlbmRlcmVyIiwic3R5bGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhdXRvUmVzaXplIiwicmVzaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0dXAiLCJtZW51U2NlbmUiLCJzdGFnZSIsImFkZENoaWxkIiwic2NlbmUiLCJ2aXNpYmxlIiwiZ2FtZVNjZW5lIiwiR2FtZSIsInN0YXRlIiwibWVudSIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFFBQVFDLEdBQVIsQ0FBWSxDQUFaOztBQUVBOzs7O0FBSUlDLE9BQU9DLGFBQVAsR0FBdUI7QUFDbkJDLFlBQVE7QUFDSkMsa0JBQVUsQ0FBQyxTQUFELEVBQVksZ0JBQVosRUFBOEIsYUFBOUI7QUFETjtBQURXLENBQXZCOztBQU1BLElBQUlDLE1BQU0sSUFBSUMsS0FBS0MsV0FBVCxFQUFWO0FBQ0FDLFNBQVNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsSUFBSU0sSUFBOUI7O0FBRUFOLElBQUlPLFFBQUosQ0FBYUQsSUFBYixDQUFrQkUsS0FBbEIsQ0FBd0JDLFFBQXhCLEdBQW1DLFVBQW5DO0FBQ0FULElBQUlPLFFBQUosQ0FBYUQsSUFBYixDQUFrQkUsS0FBbEIsQ0FBd0JFLE9BQXhCLEdBQWtDLE9BQWxDO0FBQ0FWLElBQUlPLFFBQUosQ0FBYUksVUFBYixHQUEwQixJQUExQjtBQUNBWCxJQUFJTyxRQUFKLENBQWFLLE1BQWIsQ0FBb0JoQixPQUFPaUIsVUFBM0IsRUFBdUNqQixPQUFPa0IsV0FBOUM7O0FBRUFDOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7O0FBRWIsU0FBS0MsU0FBTCxHQUFpQix3QkFBakI7QUFDQWhCLFFBQUlpQixLQUFKLENBQVVDLFFBQVYsQ0FBbUIsS0FBS0YsU0FBTCxDQUFlRyxLQUFsQztBQUNBLFNBQUtILFNBQUwsQ0FBZUksT0FBZixHQUF5QixLQUF6Qjs7QUFFQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLElBQUosRUFBakI7QUFDQXRCLFFBQUlpQixLQUFKLENBQVVDLFFBQVYsQ0FBbUIsS0FBS0csU0FBTCxDQUFlRixLQUFsQztBQUNBLFNBQUtFLFNBQUwsQ0FBZUQsT0FBZixHQUF5QixLQUF6Qjs7QUFFSjtBQUNJLFNBQUtHLEtBQUwsR0FBYUMsSUFBYjs7QUFFSjtBQUNJQztBQUNQOztBQUVHLFNBQVNBLFFBQVQsR0FBbUI7QUFDZjtBQUNBQywwQkFBc0JELFFBQXRCO0FBQ0E7QUFDQSxTQUFLRixLQUFMO0FBQ0E7QUFDQXZCLFFBQUlPLFFBQUosQ0FBYW9CLE1BQWIsQ0FBb0IzQixJQUFJaUIsS0FBeEI7QUFDQTtBQUNQOztBQUVHLFNBQVNXLE9BQVQsR0FBbUI7QUFDZixTQUFLWixTQUFMLENBQWVJLE9BQWYsR0FBeUIsS0FBekI7QUFDQSxTQUFLQyxTQUFMLENBQWVELE9BQWYsR0FBeUIsS0FBekI7QUFFSDs7QUFFRCxTQUFTSSxJQUFULEdBQWdCO0FBQ1osU0FBS1IsU0FBTCxDQUFlSSxPQUFmLEdBQXlCLElBQXpCO0FBQ0EsU0FBS0osU0FBTCxDQUFlSSxPQUFmLEdBQXlCLEtBQXpCO0FBQ0EsU0FBS0MsU0FBTCxDQUFlRCxPQUFmLEdBQXlCLEtBQXpCO0FBR1AiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluTWVudSBmcm9tICcuL21haW5NZW51JztcblxuY29uc29sZS5sb2coNSk7XG5cbi8qKlxuICAgICAgICAqIENyZWF0ZWQgYnkgbmlub29zZXdvdWR0IG9uIDEyLzA2LzIwMTcuXG4gICAgICAgICovXG5cbiAgICB3aW5kb3cuV2ViRm9udENvbmZpZyA9IHtcbiAgICAgICAgZ29vZ2xlOiB7XG4gICAgICAgICAgICBmYW1pbGllczogWydTbmlwcGV0JywgJ0Fydm86NzAwaXRhbGljJywgJ1BvZGtvdmE6NzAwJ11cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgYXBwID0gbmV3IFBJWEkuQXBwbGljYXRpb24oKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3KTtcblxuICAgIGFwcC5yZW5kZXJlci52aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGFwcC5yZW5kZXJlci52aWV3LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgYXBwLnJlbmRlcmVyLmF1dG9SZXNpemUgPSB0cnVlO1xuICAgIGFwcC5yZW5kZXJlci5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICBzZXR1cCgpO1xuXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XG5cbiAgICAgICAgdGhpcy5tZW51U2NlbmUgPSBuZXcgTWFpbk1lbnUoKTtcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWVudVNjZW5lLnNjZW5lKTtcbiAgICAgICAgdGhpcy5tZW51U2NlbmUudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gbmV3IEdhbWUoKTtcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuZ2FtZVNjZW5lLnNjZW5lKTtcbiAgICAgICAgdGhpcy5nYW1lU2NlbmUudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgLy9TZXQgdGhlIGdhbWUgc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG1lbnU7XG5cbiAgICAvL1N0YXJ0IHRoZSBnYW1lIGxvb3BcbiAgICAgICAgZ2FtZUxvb3AoKTtcbn1cblxuICAgIGZ1bmN0aW9uIGdhbWVMb29wKCl7XG4gICAgICAgIC8vTG9vcCB0aGlzIGZ1bmN0aW9uIDYwIHRpbWVzIHBlciBzZWNvbmRcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICAgICAgLy9VcGRhdGUgdGhlIGN1cnJlbnQgZ2FtZSBzdGF0ZVxuICAgICAgICB0aGlzLnN0YXRlKCk7XG4gICAgICAgIC8vUmVuZGVyIHRoZSBzdGFnZVxuICAgICAgICBhcHAucmVuZGVyZXIucmVuZGVyKGFwcC5zdGFnZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG59XG5cbiAgICBmdW5jdGlvbiBsb2FkaW5nKCkge1xuICAgICAgICB0aGlzLm1lbnVTY2VuZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lLnZpc2libGUgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgICAgIHRoaXMubWVudVNjZW5lLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lbnVTY2VuZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lLnZpc2libGUgPSBmYWxzZTtcblxuXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qYXZhc2NyaXB0L21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scene = function () {\n    function Scene() {\n        _classCallCheck(this, Scene);\n\n        this.container = new PIXI.Container();\n    }\n\n    _createClass(Scene, [{\n        key: \"scene\",\n        get: function get() {\n            return this.container;\n        }\n    }]);\n\n    return Scene;\n}();\n\nexports.default = Scene;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdC9zY2VuZS5qcz9jNmM3Il0sIm5hbWVzIjpbIlNjZW5lIiwiY29udGFpbmVyIiwiUElYSSIsIkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLO0FBRUYscUJBQWE7QUFBQTs7QUFDVCxhQUFLQyxTQUFMLEdBQWlCLElBQUlDLEtBQUtDLFNBQVQsRUFBakI7QUFDSDs7Ozs0QkFFVTtBQUNQLG1CQUFPLEtBQUtGLFNBQVo7QUFDSDs7Ozs7O2tCQUlVRCxLIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTY2VuZXtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNjZW5lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2phdmFzY3JpcHQvc2NlbmUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);