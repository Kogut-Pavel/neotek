'use strict';

window.addEventListener('DOMContentLoaded', () => {



    try {
        // Переключение навигации на странице account
        const accountMenuList = document.querySelector('.account-menu ul');
        const accountMenuItems = accountMenuList.querySelectorAll('li');
        const sections = document.querySelectorAll('.account__inner section');

        accountMenuList.addEventListener('click', (event) => {
            let target = event.target;
            if (target.nodeName === 'LI') {
                let index = Array.prototype.indexOf.call(target.parentNode.children, target);
                accountMenuItems.forEach(item => {
                    item.classList.remove('active');
                });
                target.classList.add('active');
                sections.forEach(item => {
                    item.classList.add('d-none');
                });
                sections[index].classList.remove('d-none');
            }
        });


        
    } catch {
        
    }


});