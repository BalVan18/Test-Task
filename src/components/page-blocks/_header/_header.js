let header = document.querySelector('.header')
let navList = document.querySelector('.header-nav-list')
let navAuth = document.querySelector('.header-nav-auth')
let burger = document.querySelector('.header-nav-burger')

burger.addEventListener('click', () => {
    document.body.classList.toggle('body--active')
    if (header.classList.contains('header--active')) {
        header.style.height = "75px"
        setTimeout(() => {
            header.classList.remove('header--active')
        }, 300)
    } else {
        header.classList.add('header--active')
        header.style.height = "100dvh"
    }

    if (navList.classList.contains('header-nav-list--active') && navAuth.classList.contains('header-nav-auth--active')) {
        navList.classList.remove('header-nav-list--active')
        navAuth.classList.remove('header-nav-auth--active')
    } else {
        navList.classList.add('header-nav-list--active')
        navAuth.classList.add('header-nav-auth--active')
    }

    burger.classList.toggle('header-nav-burger--active')
})