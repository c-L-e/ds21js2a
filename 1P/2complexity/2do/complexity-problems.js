//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY

//1. Least common multiple
//   lcm(a,b)
// -> a integer
// -> b integer
// <- lcm
function lcm(a, b) {
	return console.log((a * b) / maximoComunDenominador(a, b))
}

function maximoComunDenominador(a, b) {
	while (b) {
		let aux = b
		b = a % b
		a = aux
	}
	return a
}
lcm(10, 25)

//2. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements
function sieve(n) {
	for (let i = 0; i < n; i++) {
		if (esPrimo(i)) {
			console.log(i)
		}
	}
}

function esPrimo(num) {
	if (num <= 1) return false
	if (num <= 3) return true
	if (num % 2 == 0 || num % 3 == 0) return false

	for (var i = 5; i * i <= num; i = i + 6) {
		if (num % i == 0 || num % (i + 2) == 0) return false
	}
	return true
}
sieve(15)

//3. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]
function random(n) {
	return console.log(Math.floor(Math.random() * n + 1))
}
random(10)

//4. random name
//   randomName()
// ->
// <- one random name
// ie nameXYZ
function random(n) {
	return Math.floor(Math.random() * n + 1)
}
random(10)

function randomName() {
	let nombre = 'name'
	return console.log(nombre + random(10))
}
random(10)
randomName()
