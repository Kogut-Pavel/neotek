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

    
    
});
