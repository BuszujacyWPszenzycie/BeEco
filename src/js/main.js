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
const navMobileHamburgerSpan = document.querySelector('.hamburger-inner')
const navMobileHamburgerBox = document.querySelector('.hamburger-box')
const allNavMobileItems = document.querySelectorAll('.nav__mobile-item')

// Adding shadow to menu NavBar after scrolling down

document.addEventListener('DOMContentLoaded', function () {
	function addShadow() {
		const navTopAll = document.querySelectorAll('.nav')
		if (window.scrollY >= 80) {
			for (let i = 0; i < navTopAll.length; i++) {
				navTopAll[i].classList.add('nav-shadow')
			}
		} else {
			for (let i = 0; i < navTopAll.length; i++) {
				navTopAll[i].classList.remove('nav-shadow')
			}
		}
	}
	window.addEventListener('scroll', addShadow)
})

// Closing the navigation when clicking outside Mobile NavBar

document.onclick = function (e) {
	if (
		e.target != navMobileItems &&
		e.target != navMobileHamburgerBtn &&
		e.target != navMobileHamburgerSpan &&
		e.target != navMobileHamburgerBox
	) {
		navMobileItems.classList.remove('show-nav')
		navMobileHamburgerBtn.classList.remove('is-active')
	}
}

// Closing NavBar after clicking each link

allNavMobileItems.forEach(item => () => {
	item.addEventListener('click', () => {
		navMobileItems.classList.remove('show-nav')
		navMobileHamburgerBtn.classList.remove('is-active')
	})
})

// Opening Mobile NavBar

const showMobileNavFunction = () => {
	navMobileItems.classList.toggle('show-nav')
	navMobileHamburgerBtn.classList.toggle('is-active')
}

navMobileHamburgerBtn.addEventListener('click', showMobileNavFunction)
