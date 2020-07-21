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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PotatoeGame; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _potato__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./potato */ \"./src/potato.js\");\n/* harmony import */ var _moving_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_objects */ \"./src/moving_objects.js\");\n\n\n\n\n\nclass PotatoeGame {\n  constructor(canvas) {\n    // Inputted html canvas dom element\n    this.ctx = canvas.getContext(\"2d\"); // Allow us to draw shape on page\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.restart();\n    // this.play();\n\n    this.handleClick();\n  }\n\n  restart() {\n    this.running = false;\n    this.score = 0;\n    this.distance = 0;\n\n\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions)\n    this.potato = new _potato__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions)\n    this.movingObject = new _moving_objects__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.dimensions)\n    \n    \n    this.animate();\n\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  // registerClick() {\n    \n  // }\n\n  handleClick() {\n    // this.clickHandler = this.click.bind(this);\n    this.startFlying = this.startFly.bind(this);\n    this.stopFlying = this.stopFly.bind(this);\n    this.flyHandler = this.flyHandler.bind(this);\n    this.ctx.canvas.addEventListener(\"mousedown\", this.startFlying)\n    this.ctx.canvas.addEventListener(\"mouseup\", this.stopFlying)\n  }\n\n  flyHandler() {\n    this.potato.fly()\n  }\n\n  startFly() {\n    if (!this.running) {\n      this.play();\n    }\n\n    console.log(\"mousedown hold\")\n    this.flyInterval = setInterval(this.flyHandler, 1000/20)\n\n  }\n  \n  stopFly() {\n    console.log('mouse up')\n    clearInterval(this.flyInterval);\n  }\n\n\n  animate() {\n    // First move level\n    this.level.animate(this.ctx);\n    // Move and draw potato\n    this.potato.animate(this.ctx);\n\n    this.movingObject.animate(this.ctx);\n\n\n\n    if (this.running) {\n      \n      requestAnimationFrame(this.animate.bind(this))\n    }\n\n    \n  }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconsole.log(\"Webpack is working!\")\nconst canvas = document.getElementById('potatoe-game');\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\n  OBJECT_SPEED: 8,\n  WARM_UP_SECONDS: 2,\n  OBJECT_SPACING: 250,\n  HEIGHT: 50,\n  \n}\n\n\n\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    const firstObjectDistance = this.dimensions.width + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.OBJECT_SPEED)\n\n    // const firstObjectDistance = 50\n\n    console.log(firstObjectDistance)\n    this.objects = [\n      this.randomObject(firstObjectDistance),\n      this.randomObject(firstObjectDistance + CONSTANTS.OBJECT_SPACING),\n      this.randomObject(firstObjectDistance + (CONSTANTS.OBJECT_SPACING * 2))\n\n    ];\n\n  }\n\n  // Responsible for drawing background and obstacles \"knives, fryer, innout logo\" for potatoe, also responsible for control logic \n  // for how obstacles move and generated\n  // Utilize animate method to control and move obstacles, calculate score, and move potatoe (make new frame)\n\n  animate(ctx) {\n    this.drawBackground(ctx)\n    this.moveObjects();\n    this.drawObjects(ctx);\n  }\n\n  drawBackground(ctx) {\n\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n\n  randomObject(x) {\n\n    const object = {\n      posX: x,\n      top: Math.floor(Math.random() * (this.dimensions.height)),\n      passed: false,\n    }\n\n    return object\n    \n  }\n\n  moveObjects() {\n    this.eachObject(function (object) {\n      object.posX -= CONSTANTS.OBJECT_SPEED\n    })\n\n    // ADD new objects if one object reach end \n    if (this.objects[0].posX <= 0) {\n      this.objects.shift();\n      const newObj = this.objects[1].posX + CONSTANTS.OBJECT_SPACING;\n      this.objects.push(this.randomObject(newObj))\n    }\n  }\n\n\n  eachObject(callback) {\n    this.objects.forEach(callback.bind(this));\n  }\n\n  drawObjects(ctx) {\n    this.eachObject(function (object) {\n      let newObject = new Image();\n      newObject.src = './sprites/potato.png';\n\n      //draw object\n      ctx.drawImage(\n        newObject,\n        object.posX,\n        object.top,\n\n      )\n\n\n    })\n  }\n\n\n  \n\n  \n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/moving_objects.js":
/*!*******************************!*\
  !*** ./src/moving_objects.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObjects; });\nconst OBJECT_SPECS = {\n    SPEED: 10,\n    WIDTH: 30,\n    HEIGHT: 35,\n\n}\n\nclass MovingObjects {\n    constructor(dimensions) {\n        this.dimensions = dimensions;\n        // this.x = 30\n        // this.y = 30;\n        this.y = Math.floor(Math.random() * (this.dimensions.height));\n        this.x = this.dimensions.width - 30;\n    }\n\n    drawObject(ctx) {\n        let object = new Image();\n        object.src = './sprites/knife.png'\n        ctx.drawImage(\n            object,\n            193,\n            0,\n            30,\n            35,\n            this.x,\n            this.y,\n            30,\n            35\n        )\n\n    }\n\n    animate(ctx) {\n        this.drawObject(ctx);\n    }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/moving_objects.js?");

/***/ }),

/***/ "./src/potato.js":
/*!***********************!*\
  !*** ./src/potato.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Potatoe; });\nconst POTATO_SPECS = {\n    POTATO_WIDTH: 40,\n    POTATO_HEIGHT: 40,\n    FLY_SPEED: 12,\n    SPEED: 3,\n    TERMINAL_VELOCITY: 12,\n    GRAVITY_CONSTANT: 0.5,\n\n}\n\nconst TO_RADIANS = Math.PI/180\n\nclass Potatoe {\n    constructor(dimensions) {\n        this.velocity = 0\n        this.dimensions = dimensions\n        this.x = this.dimensions.height / 10\n        this.y = this.dimensions.height / 2\n    \n    }\n\n    animate(ctx) {\n        this.movePotato()\n        this.drawPotato(ctx)\n    }\n\n    drawPotato(ctx) {\n        // ctx.fillStyle=\"yellow\"\n        // ctx.fillRect(this.x, this.y, POTATO_SPECS.POTATO_WIDTH, POTATO_SPECS.POTATO_HEIGHT)\n        let potato = new Image();\n        potato.src = './sprites/potato.png';\n        ctx.save(); // save curr state\n        // ctx.rotate(1.2);\n\n        ctx.drawImage(\n            potato,\n            this.x,\n            this.y,\n          \n        )\n\n        ctx.restore();\n    }\n\n\n    fly() {\n        this.velocity = -1 * POTATO_SPECS.FLY_SPEED;\n    }\n\n    falling() {\n        \n    }\n\n    movePotato() {\n        // for each frame, potatoe must move by its velcoity\n        // velocity is pixels per frame, each frame it should update position by velocity\n        this.y += this.velocity;\n\n        //the acceleration of gravity is in pixels per second per second\n        // at each second, it changes the velocity by whatever the gravity const is\n        this.velocity += POTATO_SPECS.GRAVITY_CONSTANT\n        \n    }\n\n   \n\n}\n\n//# sourceURL=webpack:///./src/potato.js?");

/***/ })

/******/ });