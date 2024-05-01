const burgerMenu = document.querySelector('.burger');

document.body.addEventListener('click', (e) => {
    if (e.target.matches('.burger__button')) {
        burgerMenu.classList.toggle('burger_open');
    }


    if (!e.target.matches('.burger__button') && !e.target.matches('.burger__menu')) {
        burgerMenu.classList.remove('burger_open');
    }
})