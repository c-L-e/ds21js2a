//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// DS in JS

//1. object
//   attach(n)
// -> n random integer
// <- random name added

function Persona(nombre, edad) {
	this.nombre = nombre
	this.edad = edad
}
let nombreCapturar = 'name'
let edadCapturar = '12'

let nuevoSujeto = new Persona(nombreCapturar, edadCapturar)
console.log(nuevoSujeto)

let baseDatos = []
function attach() {
	baseDatos.push(nuevoSujeto)
	console.log(baseDatos)
}

attach()

//2. set
//   attach(n)//wrap the method 'add'
// -> n random integer
// <-

function attach(n) {
	var union = new Set([1, 2, 3, 6])
	union.add(n)
	return console.log(union)
}
attach(5)

//3. map
//   attach(n)//wrap the method 'set'
// -> n random integer
// <-

//4. array
//   attach(n)
// -> n random integer
// <- random name added
let randomNumArray = Array.apply(null, {length: 10}).map(
	Function.call,
	Math.random
)
let randomNumArrayEnteros = randomNumArray.map(x => Math.floor(x * 10 + 1))
let randomNombresArray = randomNumArrayEnteros.map(x => 'name' + x)
console.log(randomNombresArray)
