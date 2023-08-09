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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n    // Бургер-меню\r\n    const toggleMenu = (event) => {\r\n        let target = event.target;\r\n        let menuBtn = document.querySelector(\".menu-btn\");\r\n        let menu = document.querySelector(\".header__mobile-menu\");\r\n\r\n        const showMenu = () => {\r\n            menuBtn.classList.toggle(\"active\");\r\n            menu.classList.toggle(\"active\");\r\n            document.body.classList.toggle(\"active\");\r\n        };\r\n\r\n        if (target.closest(\".menu-btn\")) {\r\n            showMenu();\r\n        } else if (\r\n            !target.classList.contains(\"active\") &&\r\n            menuBtn.classList.contains(\"active\")\r\n        ) {\r\n            showMenu();\r\n        } else if (target.classList.contains(\"menu__link\")) {\r\n            showMenu(); \r\n        } else if (target.classList.contains(\"body\") && menuBtn.classList.contains(\"active\")) {\r\n            showMenu();\r\n        }\r\n    };\r\n\r\n    document.addEventListener(\"click\", toggleMenu);\r\n\r\n    const modalBtn = document.querySelectorAll('[data-modal]');\r\n    const body = document.body;\r\n    const modalClose = document.querySelectorAll('.modal__close');\r\n    const modal = document.querySelectorAll('.modal');\r\n    \r\n    // Добавляем слушатель на кнопки с модальными окнами и добавляем классы при клике\r\n    modalBtn.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            let target = event.currentTarget;\r\n            let modalId = target.getAttribute('data-modal');\r\n            let modal = document.getElementById(modalId);\r\n            let modalContent = modal.querySelector('.modal__content');\r\n    \r\n            modalContent.addEventListener('click', event => {\r\n                event.stopPropagation();\r\n            });\r\n    \r\n            modal.classList.add('show');\r\n            body.classList.add('no-scroll');\r\n    \r\n            setTimeout(() => {\r\n                modalContent.style.transform = \"none\";\r\n                modalContent.style.opacity = \"1\";\r\n            }, 1);\r\n            \r\n        });\r\n    });\r\n    \r\n    // Закрываем модальное окно, убирая классы\r\n    function closeModal(modal) {\r\n        let modalContent = modal.querySelector('.modal__content');\r\n        modalContent.removeAttribute('style');\r\n        setTimeout(() => {\r\n            modal.classList.remove('show');\r\n            body.classList.remove('no-scroll');\r\n        }, 200);\r\n    }\r\n    \r\n    \r\n    // Добавляем слушатель на крестики в модальных окнах\r\n    modalClose.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            let currentModal = event.currentTarget.closest('.modal');\r\n            closeModal(currentModal);\r\n        });\r\n    });\r\n    \r\n    modal.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            let currentModal = event.currentTarget;\r\n            closeModal(currentModal);\r\n    \r\n    \r\n        });\r\n    });\r\n    \r\n    try {\r\n        // Переключение навигации на странице account\r\n        const accountMenuList = document.querySelector(\".account-menu ul\");\r\n        const accountMenuItems = accountMenuList.querySelectorAll(\"li\");\r\n        const sections = document.querySelectorAll(\".account__inner section\");\r\n\r\n        accountMenuList.addEventListener(\"click\", (event) => {\r\n            let target = event.target;\r\n            if (target.nodeName === \"LI\") {\r\n                let index = Array.prototype.indexOf.call(\r\n                    target.parentNode.children,\r\n                    target\r\n                );\r\n                accountMenuItems.forEach((item) => {\r\n                    item.classList.remove(\"active\");\r\n                });\r\n                target.classList.add(\"active\");\r\n                sections.forEach((item) => {\r\n                    item.classList.add(\"d-none\");\r\n                });\r\n                sections[index].classList.remove(\"d-none\");\r\n            }\r\n        });\r\n\r\n    } catch {\r\n        console.log('Что-то не так');\r\n    }\r\n\r\n    // Brochure pagination\r\n\r\n    \r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });