// INSTRUCTIONS
//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// make sure they run on a browser printing the result
//
// SERIES

//0. Sample - problem statment, NOTE this is actually NOT a exercise, but an EXAMPLE
//
//   sample(n) //routine calling
//
// -> input, preconditions, arguments
// <- output, postconditions, result

//1. Fibonacci
//   fibonacci(n)
// -> n integer
// <- the n first fibonacci elements
function fibonacci(n) {
	let a = 0,
		b = 1,
		c,
		s = 1

	for (i = 3; i <= n; i++) {
		c = a + b
		console.log(c)
		s = s + c
		a = b
		b = c
	}
}
fibonacci(10)

//2. Powers of 2
//   power2(n)
// -> n integer
// <- the n first elements of 2^n
function power2(n) {
	for (let i = 1; i <= n; i++) {
		let c = Math.pow(2, i)
		console.log(c)
	}
}
power2(4)

//3. Factorial
//   factorial(n)
// -> n integer
// <- the n first factorial elements
function factorial(n) {
	var facto = 1
	for (i = 1; i <= n; i++) {
		facto = facto * i
		console.log(facto)
	}
}
factorial(5)

//4. Powers of 10
//   power10(n)
// -> n integer
// <- the n first elements of 10^n
function power10(n) {
	for (let i = 1; i <= n; i++) {
		let c = Math.pow(10, i)
		console.log(c)
	}
}
power10(4)
