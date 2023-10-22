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
eval("\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    // Бургер-меню\r\n    const toggleMenu = (event) => {\r\n        let target = event.target;\r\n        let menuBtn = document.querySelector('.menu-btn');\r\n        let menu = document.querySelector('.header__mobile-menu');\r\n\r\n        const showMenu = () => {\r\n            menuBtn.classList.toggle('active');\r\n            menu.classList.toggle('active');\r\n            document.body.classList.toggle('active');\r\n        };\r\n\r\n        if (target.closest('.menu-btn')) {\r\n            showMenu();\r\n        } else if (\r\n            !target.classList.contains('active') &&\r\n            menuBtn.classList.contains('active')\r\n        ) {\r\n            showMenu();\r\n        } else if (target.classList.contains('menu__link')) {\r\n            showMenu();\r\n        } else if (\r\n            target.classList.contains('body') &&\r\n            menuBtn.classList.contains('active')\r\n        ) {\r\n            showMenu();\r\n        }\r\n    };\r\n\r\n    document.addEventListener('click', toggleMenu);\r\n\r\n    const modalBtn = document.querySelectorAll('[data-modal]');\r\n    const body = document.body;\r\n    const modalClose = document.querySelectorAll('.modal__close');\r\n    const modal = document.querySelectorAll('.modal');\r\n\r\n    // Добавляем слушатель на кнопки с модальными окнами и добавляем классы при клике\r\n    modalBtn.forEach((item) => {\r\n        item.addEventListener('click', (event) => {\r\n            let target = event.currentTarget;\r\n            let modalId = target.getAttribute('data-modal');\r\n            let modal = document.getElementById(modalId);\r\n            let modalContent = modal.querySelector('.modal__content');\r\n\r\n            modalContent.addEventListener('click', (event) => {\r\n                event.stopPropagation();\r\n            });\r\n\r\n            modal.classList.add('show');\r\n            body.classList.add('no-scroll');\r\n\r\n            setTimeout(() => {\r\n                modalContent.style.transform = 'none';\r\n                modalContent.style.opacity = '1';\r\n            }, 1);\r\n        });\r\n    });\r\n\r\n    // Закрываем модальное окно, убирая классы\r\n    function closeModal(modal) {\r\n        let modalContent = modal.querySelector('.modal__content');\r\n        modalContent.removeAttribute('style');\r\n        setTimeout(() => {\r\n            modal.classList.remove('show');\r\n            body.classList.remove('no-scroll');\r\n        }, 200);\r\n    }\r\n\r\n    // Добавляем слушатель на крестики в модальных окнах\r\n    modalClose.forEach((item) => {\r\n        item.addEventListener('click', (event) => {\r\n            let currentModal = event.currentTarget.closest('.modal');\r\n            closeModal(currentModal);\r\n        });\r\n    });\r\n\r\n    modal.forEach((item) => {\r\n        item.addEventListener('click', (event) => {\r\n            let currentModal = event.currentTarget;\r\n            closeModal(currentModal);\r\n        });\r\n    });\r\n\r\n    try {\r\n        // Переключение навигации на странице account\r\n        const accountMenuList = document.querySelector('.account-menu ul');\r\n        const accountMenuItems = accountMenuList.querySelectorAll('li');\r\n        const sections = document.querySelectorAll('.account__inner section');\r\n\r\n        accountMenuList.addEventListener('click', (event) => {\r\n            let target = event.target;\r\n            if (target.nodeName === 'LI') {\r\n                let index = Array.prototype.indexOf.call(\r\n                    target.parentNode.children,\r\n                    target\r\n                );\r\n                accountMenuItems.forEach((item) => {\r\n                    item.classList.remove('active');\r\n                });\r\n                target.classList.add('active');\r\n                sections.forEach((item) => {\r\n                    item.classList.add('d-none');\r\n                });\r\n                sections[index].classList.remove('d-none');\r\n            }\r\n        });\r\n    } catch {\r\n        // console.log('Что-то не так');\r\n    }\r\n\r\n    try {\r\n        // News\r\n\r\n        const newsItems = document.querySelectorAll('.news__item');\r\n        const newsMore = document.querySelector('#news-more');\r\n\r\n        newsMore.addEventListener('click', () => {\r\n            newsItems.forEach((item) => {\r\n                item.classList.remove('hidden');\r\n            });\r\n            newsMore.style.display = 'none';\r\n        });\r\n\r\n        // Objects\r\n\r\n        const objectsItems = document.querySelectorAll('.objects__item');\r\n        const objectsMore = document.querySelector('#objects-more');\r\n\r\n        objectsMore.addEventListener('click', () => {\r\n            objectsItems.forEach((item) => {\r\n                item.classList.remove('hidden');\r\n            });\r\n            objectsMore.style.display = 'none';\r\n        });\r\n    } catch {}\r\n\r\n    // Brochure pagination\r\n\r\n    // let thisPage = 1;\r\n    // let limit = 8;\r\n    // let list = document.querySelectorAll('.brochure__item');\r\n\r\n    // function loadItem() {\r\n    //     let beginGet = limit * (thisPage - 1);\r\n    //     let endGet = limit * thisPage - 1;\r\n    //     list.forEach((item, key) => {\r\n    //         if (key >= beginGet && key <= endGet) {\r\n    //             item.style.display = 'block';\r\n    //         } else {\r\n    //             item.style.display = 'none';\r\n    //         }\r\n    //     });\r\n    //     listPage();\r\n    // }\r\n    // loadItem();\r\n    // function listPage() {\r\n    //     let count = Math.ceil(list.length / limit);\r\n    //     document.querySelector('.pagination').innerHTML = '';\r\n\r\n    //     if (thisPage != 1) {\r\n    //         let prev = document.createElement('li');\r\n    //         prev.innerText = 'PREV';\r\n    //         prev.setAttribute('onclick', 'changePage(' + (thisPage - 1) + ')');\r\n    //         document.querySelector('.pagination').appendChild(prev);\r\n    //     }\r\n\r\n    //     for (let i = 1; i <= count; i++) {\r\n    //         let newPage = document.createElement('li');\r\n    //         newPage.innerText = i;\r\n    //         if (i == thisPage) {\r\n    //             newPage.classList.add('active');\r\n    //         }\r\n    //         newPage.setAttribute('onclick', 'changePage(' + i + ')');\r\n    //         document.querySelector('.pagination').appendChild(newPage);\r\n    //     }\r\n\r\n    //     if (thisPage != count) {\r\n    //         let next = document.createElement('li');\r\n    //         next.innerText = 'NEXT';\r\n    //         next.setAttribute('onclick', 'changePage(' + (thisPage + 1) + ')');\r\n    //         document.querySelector('.pagination').appendChild(next);\r\n    //     }\r\n    // }\r\n    // function changePage(i) {\r\n    //     thisPage = i;\r\n    //     loadItem();\r\n    // }\r\n\r\n    // main page carousel\r\n\r\n    $(document).ready(function () {\r\n        $('.owl-carousel').owlCarousel({\r\n            items: 1,\r\n            loop: true,\r\n            dots: true,\r\n            autoplay: true,\r\n        });\r\n    });\r\n\r\n    // Techdescription accardeon\r\n\r\n    const titles = document.querySelectorAll('.techdescription__item-title');\r\n\r\n    titles.forEach(function (item) {\r\n        item.addEventListener('click', function () {\r\n            if (this.nextElementSibling) {\r\n                this.nextElementSibling.classList.toggle('active');\r\n            }\r\n        });\r\n    });\r\n\r\n    const pricelist = document.querySelectorAll('.pricelist__item-title');\r\n\r\n    pricelist.forEach(function (item) {\r\n        item.addEventListener('click', function () {\r\n            if (this.nextElementSibling) {\r\n                this.nextElementSibling.classList.toggle('active');\r\n            }\r\n        });\r\n    });\r\n\r\n    // Catalog\r\n    // Принцип работы: У категории в списке должен быть data-filter с названием категории по которой будет фильтроваться каталог. У продукта должен быть класс с таким же названием как категория фильтра!\r\n    const catalogHeaders = document.querySelectorAll('.catalog__headers li');\r\n    const products = document.querySelectorAll('.product');\r\n\r\n    function filter (category, items) {\r\n        items.forEach((item) => {\r\n          const isItemFiltered = !item.classList.contains(category);\r\n          if (isItemFiltered) {\r\n              item.classList.add('d-none');\r\n          } else {\r\n              item.classList.remove('d-none');\r\n          }\r\n        })\r\n      }\r\n\r\n      catalogHeaders.forEach((button) => {\r\n        button.addEventListener(\"click\", () => {\r\n          const currentCategory = button.dataset.filter;\r\n          catalogHeaders.forEach(item => {\r\n            item.classList.remove('active');\r\n          });\r\n          button.classList.add('active');\r\n          filter(currentCategory, products);\r\n        });\r\n      });\r\n      \r\n      if (catalogHeaders[0]) {\r\n        catalogHeaders[0].click();\r\n      }\r\n      \r\n\r\n\r\n    //toFavourites-icon\r\n\r\n    const icons = document.querySelectorAll('.product__toFavourites');\r\n\r\n    icons.forEach(item => {\r\n        item.addEventListener('click', function() {\r\n            let startSrc;\r\n            let endSrc;\r\n            let newSrc;\r\n            let hasSrc = this.src.indexOf('-fill');\r\n            if (hasSrc < 0) {\r\n                startSrc = this.src.slice(0, -4);\r\n                endSrc = this.src.slice(-4);\r\n                newSrc = `${startSrc}-fill${endSrc}`;\r\n                this.src = newSrc;\r\n            } else {\r\n                startSrc = this.src.slice(0, -9);\r\n                endSrc = this.src.slice(-4);\r\n                newSrc = `${startSrc}${endSrc}`;\r\n                this.src = newSrc;\r\n            }\r\n            item.style.width = '20px';\r\n\r\n        });\r\n    });\r\n\r\n    // Смена класса active \r\n\r\n    const profileButtons = document.querySelectorAll('.profile__subject button');\r\n    const checkoutSubtitles = document.querySelectorAll('.checkout__subtitles .profile__subtitle');\r\n    \r\n\r\n    const changeActive = function(items) {\r\n        items.forEach(item => {\r\n            item.addEventListener('click', () => {\r\n                items.forEach(item => {\r\n                    item.classList.remove('active');\r\n                });\r\n                item.classList.add('active');\r\n            });\r\n        });\r\n    }\r\n\r\n    changeActive(profileButtons);\r\n    changeActive(checkoutSubtitles);\r\n\r\n\r\n    // Order tabs\r\n\r\n    const tabHeaders = document.querySelectorAll('[data-tab]');\r\n    const contentBoxes = document.querySelectorAll('[data-tab-content]');\r\n\r\n    tabHeaders.forEach(function (item) {\r\n        item.addEventListener('click', function () {\r\n            const contentBox = document.querySelector('#' + this.dataset.tab);\r\n            contentBoxes.forEach(function (item) {\r\n                item.classList.add('d-none');\r\n            });\r\n            contentBox.classList.remove('d-none');\r\n            tabHeaders.forEach(item => {\r\n                item.classList.remove('active');\r\n            });\r\n            item.classList.add('active');\r\n        });\r\n    });\r\n\r\n    // Checkout Form\r\n\r\n    const forms = () => {\r\n\r\n        const checkNumInputs = (selector) => {\r\n            const numInputs = document.querySelectorAll(selector);\r\n        \r\n        // Всем инпутам с вводом телефона разрешаем только цифры\r\n            numInputs.forEach(item => {\r\n                item.addEventListener('input', () => {\r\n                    item.value = item.value.replace(/[^0-9+]/g, '');\r\n                });\r\n            });\r\n        };\r\n    \r\n        const clearInputs = () => { // Очищаем инпуты\r\n            const inputs = document.querySelectorAll('input');\r\n            const checkbox = document.querySelectorAll('input[name=\"checkbox\"]');\r\n            inputs.forEach(item => {\r\n                item.value = '';\r\n            });\r\n            checkbox.forEach(item => {\r\n                item.checked = false;\r\n            });\r\n        };\r\n    \r\n        // const form = document.querySelectorAll('form'); // Все формы\r\n        const form = document.querySelectorAll('#checkout-form'); // Только чекаут форма\r\n        checkNumInputs('input[name=\"phone\"]');\r\n    \r\n        const postData = async (url, data) => { // Отправка запроса\r\n            let res = await fetch(url, {\r\n                method: \"POST\",\r\n                body: data,\r\n            });\r\n            if (!res.ok) {\r\n                throw new Error(res.statusText);\r\n            } else {\r\n                return await res.text();\r\n            }\r\n        };\r\n    \r\n        form.forEach(item => { // Перебираем формы и навешиваем обработчик события\r\n            item.addEventListener('submit', (event) => {\r\n                event.preventDefault();\r\n    \r\n                const formData = new FormData(item); // Собираем данные из формы\r\n    \r\n                // Отправляем запрос на сервер с данными из formData\r\n                postData('smart.php', formData)\r\n                    .then(() => {\r\n                        console.log('Отправлено');\r\n                    })\r\n                    .catch(err => {\r\n                        console.error(err);\r\n                    })\r\n                    .finally(() => {\r\n                        clearInputs();\r\n                    });\r\n            });\r\n        });\r\n    };\r\n\r\n    forms();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });