// header

const headerTab = document.querySelectorAll('.header__link');

headerTab.forEach((e) => {
    e.addEventListener('click', () => {
        headerTab.forEach((e) => {
            e.classList.remove('active-header');
        });

        e.classList.add('active-header');
    });
});


// tabs 

const buttonTab = document.querySelectorAll('.menu__button-tab');

buttonTab.forEach((e) => {
    e.addEventListener('click', () => {
        buttonTab.forEach((e) => {
            e.classList.remove('active-tab');
        });
        e.classList.add('active-tab');
    });
});

// burger 

const burger = document.querySelector('.header-icon');
const menu = document.querySelector('.header__nav');
const navLink = document.querySelectorAll('.header__link');
const body = document.body;

burger.addEventListener('click', () => {
    menu.classList.toggle('_active');
    burger.classList.toggle('_active');
    body.classList.toggle('_active');
});

navLink.forEach(el => {
    el.addEventListener('click', () => {
        menu.classList.remove('_active');
        burger.classList.remove('_active');
        body.classList.remove('_active');
    });
});

// pizza tab



