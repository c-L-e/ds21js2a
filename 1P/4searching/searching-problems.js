//
// https://ideone.com/sDH0Os
//

function search(d, k) {
	let contador = 0
	let posicion = 0
	while ((posicion = d.indexOf(k, posicion)) !== -1) {
		++contador
		posicion += k.length
	}
	return contador
}
let cadena = 'hola hola hola hola'
console.log(search(cadena, 'hola'))
