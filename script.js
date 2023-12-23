let height = 0
const header = document.getElementsByTagName('header')[0]
const hero = document.querySelector('section.hero')

const getHeight = () => {
	height = header.offsetHeight + hero.offsetHeight
	// console.log(height)
}

window.addEventListener('scroll', e => {
	if (window.scrollY >= height - 150) {
		document.getElementsByTagName('header')[0].classList.add('sticky')
	} else {
		document.getElementsByTagName('header')[0].classList.remove('sticky')
	}
})

window.addEventListener('resize', getHeight)
getHeight()
