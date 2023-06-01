// const trashBtn = document.querySelector('.hamburger__icon-trash')
// const paperBtn = document.querySelector('.hamburger__icon-paper')

// const showMobileMenu = () => {
// 	trashBtn.classList.toggle('hide-icon')
// 	paperBtn.classList.toggle('show-icon')
// }

// trashBtn.addEventListener('click', showMobileMenu)
// paperBtn.addEventListener('click', showMobileMenu)

const navMobileItems = document.querySelector('.nav__mobile-items')
const navMobileHamburgerBtn = document.querySelector('.nav__mobile-hamburger')

const showMobileNavFunction = () => {
	navMobileItems.classList.toggle('show-nav')
	navMobileHamburgerBtn.classList.toggle('is-active')
}

navMobileHamburgerBtn.addEventListener('click', showMobileNavFunction)
