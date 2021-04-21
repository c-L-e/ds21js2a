//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// SORTING

//1. bubble - your implementation
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted
function random(n) {
	return Math.floor(Math.random() * n + 1)
}
var size = 10

var arreglo = []
for (var i = 1; i <= size; i++) {
	arreglo.push(random(size))
}
console.log(arreglo)

var arregloAOrdenar = arreglo

function sort(d) {
	for (let i = 0; i < d.length - 1; i++)
		for (let j = 0; j < d.length - i; j++) {
			if (d[j] > d[j + 1]) {
				let aux = d[j]

				d[j] = d[j + 1]

				d[j + 1] = aux
			}
		}
	return d
}

arregloAOrdenar = sort(arregloAOrdenar)

console.log(arregloAOrdenar)

//2. sort - use JS Array.sort implementation
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted

function random(n) {
	return Math.floor(Math.random() * n + 1)
}
var size = 10

var arreglo = []
for (var i = 1; i <= size; i++) {
	arreglo.push(random(size))
}
console.log(arreglo)

const arregloOrdenado = arreglo.sort((a, b) => a - b)

console.log(arregloOrdenado)

//3. bubble - your implementation
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted
var o = [{name: 'name2'}, {name: 'name3'}, {name: 'name4'}, {name: 'name1'}]

function bubble(o) {
	var swapped
	do {
		swapped = false
		for (var i = 0; i < o.length - 1; i++) {
			if (o[i]['name'] > o[i + 1]['name']) {
				var temp = o[i]
				o[i] = o[i + 1]
				o[i + 1] = temp
				swapped = true
			}
		}
	} while (swapped)
}

bubble(o)

for (i = 0; i < o.length; i++) {
	console.log(o[i])
}

//4. sort - use JS Array.sort implementation
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted
const nombres = [
	{name: 'nameOne'},
	{name: 'nameTwo'},
	{name: 'nameThree'},
	{name: 'nameFour'},
	{name: 'nameFive'},
	{name: 'nameSix'},
	{name: 'nameSeven'},
	{name: 'nameEight'},
	{name: 'nameNine'}
]

const nombresOrdenados = nombres.sort((a, b) => (a.name > b.name ? 1 : -1))
console.log(nombresOrdenados)
