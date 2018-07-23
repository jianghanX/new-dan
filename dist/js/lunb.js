/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	var lis = Array.from(document.querySelectorAll("#ul1 li"));
	var btns = Array.from(document.querySelectorAll("#ol1 li"));
	var len = btns.length;
	var now = 0;
	btns.forEach(function (btn, index) {

		btn.onclick = function () {

			now = index;

			tab(btn);
		};
	});
	var tab = function tab(btn) {
		lis.forEach(function (li, index) {
			//		li.style.display = "none"
			li.style.display = "block";
			startMove(li, { "opacity": 0 }, function () {
				li.style.display = "none";
			});
			btns[index].style.background = "";
		});
		//	lis[now].style.display = "block"
		startMove(lis[now], { "opacity": 100 }, function () {
			lis[now].style.display = "block";
		});
		btns[now].style.background = "#ff6200";
	};
	tab();
	var ds = function ds() {
		now++;
		if (now == len) {
			now = 0;
		}
		tab();
	};
	var timer1 = setInterval(ds, 2000);
	ul1.onmouseover = function () {
		clearInterval(timer1);
	};
	ul1.onmouseout = function () {
		timer1 = setInterval(ds, 2000);
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	var ul3 = document.querySelector("#lb1");
	var timer3;
	var timer2;
	var timer4;
	timer2 = setTimeout(function () {

		startMove(ul3, { "left": -771 }, fn);
	}, 2000);

	var fn1 = function fn1() {

		timer3 = setTimeout(function () {

			startMove(ul3, { "left": -771 }, fn);
		}, 2000);
	};

	var fn = function fn() {

		timer4 = setTimeout(function () {

			startMove(ul3, { "left": 0 }, fn1);
		}, 2000);
	};

	$('#lb1>li').mouseover(function () {
		clearTimeout(timer3);
		clearTimeout(timer4);
	});
	$('#lb1>li').mouseout(function () {
		clearTimeout(timer2);
		clearTimeout(timer3);
		clearTimeout(timer4);
		timer2 = setTimeout(function () {

			startMove(ul3, { "left": -771 }, fn);
		}, 2000);
	});

/***/ })
/******/ ]);