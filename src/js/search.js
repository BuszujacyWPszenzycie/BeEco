const searchInput = document.querySelector('.header__box-input')
const allLi = document.querySelectorAll('.search__list-item')

const searchEngine = e => {
	const text = e.target.value.toLowerCase()

	allLi.forEach(li => {
		const item = li.textContent

		if (item.toLowerCase().indexOf(text) !== -1) {
			li.style.display = 'block'
		} else {
			li.style.display = 'none'
		}
	})
}

searchInput.addEventListener('keyup', searchEngine)
