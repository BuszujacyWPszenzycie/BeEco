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
const bntOne = document.querySelector('.types__item')
const modalOne = document.querySelector('.modal-one')
const allMailInputs = document.querySelectorAll('.contact__input')
const chooseFileLabel = document.querySelector('.contact__label-file')
const chooseFileInput = document.querySelector('.contact__input-file')
const contactP = document.querySelector('.contact__p')
const allBtns = document.querySelectorAll('.contact__btn')

// Check if all inputs are not empty

allBtns[1].addEventListener('click', () => {
	allMailInputs.forEach(item => {
		switch (item.value) {
			case '':
				item.classList.add('show-error')
		}
	})
})

// Clearing input files

const clearAllInputs = () => {
	allMailInputs.forEach(item => {
		item.value = ''
		item.nextElementSibling.classList.remove('show-label')
		contactP.classList.remove('show-p')
		item.classList.remove('show-error')
	})
}

// Showing name of file that was added - not workining!

// chooseFileInput.addEventListener('change', () => {
// 	const newFileReader = new FileReader()
// 	newFileReader.readAsDataURL(chooseFileInput.files[0])
// 	newFileReader.addEventListener('load', () => {
// 		const url = newFileReader.result
// 		console.log(url)
// 		contactP.classList.add('show-p')
// 		contactP.textContent = url
// 	})
// })

// Showing that file was added

chooseFileInput.onchange = function (e) {
	this.value = null
	contactP.classList.add('show-p')
}

// Removing label when selecting input and when input has text inside

allMailInputs.forEach(item => {
	item.addEventListener('focus', () => {
		item.nextElementSibling.classList.add('show-label')
		item.classList.remove('show-error')
	})
	item.addEventListener('focusout', () => {
		if (item.value == '') {
			item.nextElementSibling.classList.remove('show-label')
		}
	})
})

// Focus after using choose-file element

const addFocusFile = () => {
	chooseFileLabel.classList.add('show-focus')
}

const removeFocusFile = () => {
	chooseFileLabel.classList.remove('show-focus')
}

// Removing label after focus on input element - this is working - uncoment when needed

// allMailInputs.forEach(item => {
// 	item.addEventListener('focus', () => {
// 		item.nextElementSibling.classList.add('show-label')
// 	})
// 	item.addEventListener('focusout', () => {
// 		item.nextElementSibling.classList.remove('show-label')
// 	})
// })

// Modal for section - segregate - NOT FINISHED

const showModal = () => {
	modalOne.classList.add('show-modal')
}

bntOne.addEventListener('click', showModal)

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
chooseFileInput.addEventListener('focus', addFocusFile)
chooseFileInput.addEventListener('focusout', removeFocusFile)
allBtns[0].addEventListener('click', clearAllInputs)
