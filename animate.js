const gs = document.querySelectorAll('svg>g>g>g')
const totaltime = 30000
const animatedAtOnce = 20
const pool = Math.floor(gs.length / 3)
const delay = totaltime / pool
const poolArr = []

const extractionPool = []

const animate = () => {
	// poolArr.length = 0
	for (let i = 0; i < pool; i++) {
		const randomIndex = Math.floor(Math.random() * extractionPool.length)
		const randomElement = extractionPool.splice(randomIndex, 1)[0]
		poolArr.push(randomElement)
	}

	let c = 0
	for (let i = 0; i < poolArr.length; i++) {
		for (let j = 0; j < animatedAtOnce; j++) {
			element = poolArr[i]
			// console.log('main loop', element)
			// element.setAttribute('opacity', '0')

			setTimeout(
				element => {
					// element.setAttribute('opacity', '0')
					element.style.opacity = '0'
					poolArr.splice(poolArr.indexOf(element), 1)
					// console.log('first setTimeout', delay)

					setTimeout(
						element => {
							// console.log('second setTimeout')
							element.style.opacity = '1'

							// element.setAttribute('opacity', '1')
							extractionPool.push(element)
						},
						delay * (j + 1),
						element
					)
				},
				delay * c,
				element
			)

			if (i < poolArr.length - 1) {
				i++
			}
		}
		c++
		// console.log(c)
	}
}

extractionPool.push(...gs)

// animate()
animate()
setInterval(animate, totaltime / animatedAtOnce)
