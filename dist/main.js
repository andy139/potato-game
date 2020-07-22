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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PotatoeGame; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _potato__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./potato */ \"./src/potato.js\");\n\n\n\n\nclass PotatoeGame {\n  constructor(canvas) {\n    // Inputted html canvas dom element\n\n    this.ctx = canvas.getContext(\"2d\"); // Allow us to draw shape on page\n    this.dimensions = { width: canvas.width, height: canvas.height };\n\n    this.highDistance = 0;\n\n    this.restart();\n    // this.play();\n\n    this.handleClick();\n  }\n\n  restart() {\n    this.running = false;\n    this.score = 0;\n    this.distance = 0;\n\n\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions)\n    this.potato = new _potato__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions)\n\n    \n    this.animate();\n\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  // registerClick() {\n    \n  // }\n\n  handleClick() {\n    // this.clickHandler = this.click.bind(this);\n    this.startFlying = this.startFly.bind(this);\n    this.stopFlying = this.stopFly.bind(this);\n    this.flyHandler = this.flyHandler.bind(this);\n    this.ctx.canvas.addEventListener(\"mousedown\", this.startFlying)\n    this.ctx.canvas.addEventListener(\"mouseup\", this.stopFlying)\n  }\n\n  flyHandler() {\n    this.potato.fly()\n  }\n\n  startFly() {\n    if (!this.running) {\n      this.play();\n    }\n\n    this.flyInterval = setInterval(this.flyHandler, 1000/20)\n\n  }\n  \n  stopFly() {\n\n    clearInterval(this.flyInterval);\n  }\n\n  //Game over if either potato collides with object or potato out of bounds\n\n  gameOver() {\n    return (\n      this.level.isCollide(this.potato.bounds()) || this.potato.outOfBounds()\n    )\n    \n  }\n\n  drawScore() {\n    \n    // top left for score\n    const rectangle = {\n      x: 10,\n      y: 10,\n      width: 150,\n      height: 125,\n  \n    }\n\n    const scoreText = {\n      x: 20,\n      y: 30,\n\n    }\n\n    const score = {\n      x: 20,\n      y: 60\n    }\n\n    const highScoreText = {\n      x: 20,\n      y: 90,\n    }\n\n    const highScore = {\n      x: 20,\n      y: 120\n    }\n\n    this.ctx.fillStyle = 'rgba(225,225,225,0.5)';\n    this.ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);\n \n    \n    this.ctx.stroke();\n    this.ctx.font = \"bold 15pt serif\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(`Distance:`, scoreText.x, scoreText.y);\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(`Distance:`, scoreText.x, scoreText.y);\n\n\n    this.ctx.stroke();\n    this.ctx.font = \"bold 20pt serif\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(`${this.distance}`, score.x, score.y);\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(`${this.distance}`, score.x, score.y);\n\n\n    this.ctx.stroke();\n    this.ctx.font = \"bold 15pt serif\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(`High Score:`, highScoreText.x, highScoreText.y);\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(`High Score:`, highScoreText.x, highScoreText.y);\n\n\n    this.ctx.stroke();\n    this.ctx.font = \"bold 20pt serif\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(`${this.highDistance}`, highScore.x, highScore.y);\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(`${this.highDistance}`, highScore.x, highScore.y);\n\n\n    \n    \n\n\n  }\n\n\n\n\n  animate() {\n    // First move level\n    this.level.animate(this.ctx);\n    // Move and draw potato\n    this.potato.animate(this.ctx);\n\n\n    if (this.gameOver()) {\n\n\n      if (this.distance > this.highDistance) {\n        this.highDistance = this.distance\n\n      \n      }\n\n\n      this.restart();\n\n  \n    }\n\n\n    if (this.running) {\n      this.distance += 1\n    }\n\n    // Implement score when shooting targets?? to be decided\n    this.level.passedObject(this.potato.bounds(), () => {\n      this.score += 1;\n\n      \n    })\n\n\n    this.drawScore();\n   \n\n\n\n    if (this.running) {\n      \n      requestAnimationFrame(this.animate.bind(this))\n    }\n\n    \n  }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\n  OBJECT_SPEED: 8,\n  WARM_UP_SECONDS: 1,\n  OBJECT_SPACING: 250,\n  HEIGHT: 50,\n  OBJECT_WIDTH: 100,\n  OBJECT_HEIGHT: 75\n  \n}\n\n\n\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    const firstObjectDistance = this.dimensions.width + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.OBJECT_SPEED)\n\n    this.objects = [\n      this.randomObject(firstObjectDistance),\n      this.randomObject(firstObjectDistance + CONSTANTS.OBJECT_SPACING),\n      this.randomObject(firstObjectDistance + (CONSTANTS.OBJECT_SPACING * 2))\n\n    ];\n\n  }\n\n  // Responsible for drawing background and obstacles \"knives, fryer, innout logo\" for potatoe, also responsible for control logic \n  // for how obstacles move and generated\n  // Utilize animate method to control and move obstacles, calculate score, and move potatoe (make new frame)\n\n  animate(ctx) {\n    this.drawBackground(ctx)\n    this.moveObjects();\n    this.drawObjects(ctx);\n  }\n\n  // Method turns object status to false if passed\n  passedObject(potato, callback) {\n    this.eachObject((object) => {\n\n      if (object.right < potato.left) {\n\n        if (!object.passed) {\n          object.passed = true;\n         \n          callback();\n        }\n      }\n    })\n  }\n\n  // Returns true if potato collides with any object in game\n  isCollide(potato) {\n\n\n    // Helper Function to see if objects overlap\n    const overLap = (objectOne, objectTwo) => {\n\n      // Check X-axis if they dont overlap\n      if (objectOne.left > objectTwo.right || objectOne.right < objectTwo.left) {\n        return false;\n      }\n      // Check y-axis if they dont overlap\n      // 100 \n      // 200 ObjectTwo Bottom\n      // 300 ObjectOne Top\n      if (objectOne.top > objectTwo.bottom || objectOne.bottom < objectTwo.top) {\n        return false;\n      }\n      return true;\n    }\n\n    let collision = false;\n\n    this.eachObject((object) => {\n      if (overLap(object, potato)) {\n        collision = true\n      }\n\n    });\n\n    return collision\n\n\n  }\n\n\n  drawBackground(ctx) {\n\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n\n  randomObject(x) {\n\n    const randomTop = Math.floor(Math.random() * (this.dimensions.height));\n    const object = {\n      left: x,\n      right: CONSTANTS.OBJECT_WIDTH + x,\n      top: randomTop,\n      bottom: randomTop + CONSTANTS.OBJECT_HEIGHT,\n      passed: false,\n    }\n\n    return object\n    \n  }\n\n  moveObjects() {\n    this.eachObject(function (object) {\n      object.left -= CONSTANTS.OBJECT_SPEED\n      object.right -= CONSTANTS.OBJECT_SPEED\n    })\n\n    // ADD new objects if one object reach end \n    if (this.objects[0].right <= 0) {\n      this.objects.shift();\n      const newObj = this.objects[1].left + CONSTANTS.OBJECT_SPACING;\n      this.objects.push(this.randomObject(newObj))\n    }\n  }\n\n\n  eachObject(callback) {\n    this.objects.forEach(callback.bind(this));\n  }\n\n  drawObjects(ctx) {\n    this.eachObject(function (object) {\n      let newObject = new Image();\n      newObject.src = './sprites/ufo.png';\n\n      //draw object\n      ctx.drawImage(\n        newObject,\n        object.left,\n        object.top,\n        CONSTANTS.OBJECT_WIDTH,\n        CONSTANTS.OBJECT_HEIGHT,\n\n      )\n\n\n    })\n  }\n\n\n  \n\n  \n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/potato.js":
/*!***********************!*\
  !*** ./src/potato.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Potatoe; });\nconst POTATO_SPECS = {\n    POTATO_WIDTH: 40,\n    POTATO_HEIGHT: 40,\n    FLY_SPEED: 12,\n    SPEED: 3,\n    TERMINAL_VELOCITY: 12,\n    GRAVITY_CONSTANT: 0.5,\n\n}\n\nconst TO_RADIANS = Math.PI/180\n\nclass Potatoe {\n    constructor(dimensions) {\n        this.velocity = 0\n        this.dimensions = dimensions\n        this.x = this.dimensions.height / 10\n        this.y = this.dimensions.height / 2\n    \n    }\n\n    animate(ctx) {\n        this.movePotato()\n        this.drawPotato(ctx)\n    }\n\n    drawPotato(ctx) {\n        // ctx.fillStyle=\"yellow\"\n        // ctx.fillRect(this.x, this.y, POTATO_SPECS.POTATO_WIDTH, POTATO_SPECS.POTATO_HEIGHT)\n        let potato = new Image();\n        potato.src = './sprites/potato.png';\n        ctx.save(); // save curr state\n        // ctx.rotate(1.2);\n\n        ctx.drawImage(\n            potato,\n            this.x,\n            this.y,\n          \n        )\n\n        ctx.restore();\n    }\n\n\n    fly() {\n        this.velocity = -1 * POTATO_SPECS.FLY_SPEED;\n    }\n\n    falling() {\n        \n    }\n\n    movePotato() {\n        // for each frame, potatoe must move by its velcoity\n        // velocity is pixels per frame, each frame it should update position by velocity\n        this.y += this.velocity;\n\n        //the acceleration of gravity is in pixels per second per second\n        // at each second, it changes the velocity by whatever the gravity const is\n        this.velocity += POTATO_SPECS.GRAVITY_CONSTANT\n        \n    }\n\n    bounds() {\n        return {\n            left: this.x,\n            right: this.x + POTATO_SPECS.POTATO_WIDTH,\n            top: this.y,\n            bottom: this.y + POTATO_SPECS.POTATO_HEIGHT,\n        }\n    }\n\n    outOfBounds() {\n        const isAboveCanvas = this.y < 0;\n        const isBelowCanvas = this.y + POTATO_SPECS.POTATO_HEIGHT > this.dimensions.height;\n        return isAboveCanvas || isBelowCanvas\n\n\n\n    }\n\n   \n\n}\n\n//# sourceURL=webpack:///./src/potato.js?");

/***/ })

/******/ });