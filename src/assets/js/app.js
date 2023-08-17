"use strict";

window.addEventListener("DOMContentLoaded", () => {

    // Бургер-меню
    const toggleMenu = (event) => {
        let target = event.target;
        let menuBtn = document.querySelector(".menu-btn");
        let menu = document.querySelector(".header__mobile-menu");

        const showMenu = () => {
            menuBtn.classList.toggle("active");
            menu.classList.toggle("active");
            document.body.classList.toggle("active");
        };

        if (target.closest(".menu-btn")) {
            showMenu();
        } else if (
            !target.classList.contains("active") &&
            menuBtn.classList.contains("active")
        ) {
            showMenu();
        } else if (target.classList.contains("menu__link")) {
            showMenu(); 
        } else if (target.classList.contains("body") && menuBtn.classList.contains("active")) {
            showMenu();
        }
    };

    document.addEventListener("click", toggleMenu);

    const modalBtn = document.querySelectorAll('[data-modal]');
    const body = document.body;
    const modalClose = document.querySelectorAll('.modal__close');
    const modal = document.querySelectorAll('.modal');
    
    // Добавляем слушатель на кнопки с модальными окнами и добавляем классы при клике
    modalBtn.forEach(item => {
        item.addEventListener('click', event => {
            let target = event.currentTarget;
            let modalId = target.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            let modalContent = modal.querySelector('.modal__content');
    
            modalContent.addEventListener('click', event => {
                event.stopPropagation();
            });
    
            modal.classList.add('show');
            body.classList.add('no-scroll');
    
            setTimeout(() => {
                modalContent.style.transform = "none";
                modalContent.style.opacity = "1";
            }, 1);
            
        });
    });
    
    // Закрываем модальное окно, убирая классы
    function closeModal(modal) {
        let modalContent = modal.querySelector('.modal__content');
        modalContent.removeAttribute('style');
        setTimeout(() => {
            modal.classList.remove('show');
            body.classList.remove('no-scroll');
        }, 200);
    }
    
    
    // Добавляем слушатель на крестики в модальных окнах
    modalClose.forEach(item => {
        item.addEventListener('click', event => {
            let currentModal = event.currentTarget.closest('.modal');
            closeModal(currentModal);
        });
    });
    
    modal.forEach(item => {
        item.addEventListener('click', event => {
            let currentModal = event.currentTarget;
            closeModal(currentModal);
    
    
        });
    });
    
    try {
        // Переключение навигации на странице account
        const accountMenuList = document.querySelector(".account-menu ul");
        const accountMenuItems = accountMenuList.querySelectorAll("li");
        const sections = document.querySelectorAll(".account__inner section");

        accountMenuList.addEventListener("click", (event) => {
            let target = event.target;
            if (target.nodeName === "LI") {
                let index = Array.prototype.indexOf.call(
                    target.parentNode.children,
                    target
                );
                accountMenuItems.forEach((item) => {
                    item.classList.remove("active");
                });
                target.classList.add("active");
                sections.forEach((item) => {
                    item.classList.add("d-none");
                });
                sections[index].classList.remove("d-none");
            }
        });

    } catch {
        console.log('Что-то не так');
    }

    // Brochure pagination

    // main page carousel

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel(
            {
                items: 1,
                loop: true,
                dots: true,
                autoplay: true,
            }
        );
    });

});
