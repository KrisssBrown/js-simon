
const num = generaNumeri(5,1,100)

const numeriUtente = []

const numeriVincenti = []


alert(`Ricorda questi numeri: ${num.join(', ')}`)

setTimeout(() => {
	while (numeriUtente.length < num.length) {
		let number = parseInt(prompt('Inserisci un numero che ti ricordi'))

		if (num.includes(number) && !numeriUtente.includes(number)) {
			console.log('indovinato')
			numeriVincenti.push(number)
		}

		numeriUtente.push(number)
	}

	console.log(
		`Hai indovinato ${
			numeriVincenti.length
		} numeri. I numeri indovinati sono i seguenti: ${numeriVincenti.join(', ')}.`
	)
}, 3 * 1000)

function generaNumeri(length, min, max) {
	let num = []

	while (num.length < length) {
		const num = getRandomIntInclusive(min, max)

		if (!num.includes(num)) {
			num.push(num)
		}
	}

	return num
}
// // // // // // // // // // // // // // // // // // 
// // // // // // // FUNZIONI
// // // // // // // // // // // // // // // // // // 

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}