const container = document.querySelector('#lottie')
const notEnmptygs = document.querySelectorAll('svg>g>g g:has(path)')
const enmptygs = document.querySelectorAll('svg>g>g g:not(svg>g>g g:has(path))')
console.log(enmptygs)

notEnmptygs.forEach(g => {
	g.setAttribute('opacity', '1')
})
enmptygs.forEach(g => {
	g.remove()
})
