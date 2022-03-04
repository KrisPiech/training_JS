// // Zadanie 1.
// // a)
let name = "Jan"
// // b)
let age = 22
// // c)
let isOpen = true
// // d)
let stringBoolean = "true"
// // e)
let stringNumber = "100"

// Zadanie 2.
// a)
let modulo = 10 % 4
console.log(modulo)
// b)
const hisName = "Tomasz"
const hisAge = 33
let sentence = `${hisName} ma ${hisAge} lata`
console.log(sentence)
// c)
const firstName = "jan"
const lastName = "kowalski"
let firstMethod = firstName + " " + lastName
let secondMethod = `${firstName} ${lastName}`
console.log(firstMethod)
console.log(secondMethod)

// Zadanie 3.
let num = 1
const sum = num + 2 + 3
console.log(`Wynik: ${sum}`)

// Zadanie 4.
// a)
const arrayA = [1, 2, 3]
// b)
const arrayB = ["Audi", "BMW", "Mercedes"]
// c)
const arrayC = [true, false, true]
// d)
const arrayD = []
// e)
const arrayE = ["Audi", true, 22, "21", null]
// f)
console.log(arrayE[1])
// g)
const arrayG = [1, 2, 3]
console.log(arrayG.length)
// h)
const arrayH = []
console.log(arrayH)
arrayH.push("end of array")
arrayH.unshift("start of array")
console.log(arrayH)
// i)
let arrayI = [
	{ imie: "Maciek", nazwisko: "Kowalski", wiek: 20 },
	{ imie: "Damian", nazwisko: "Kita", wiek: 25 },
	{ imie: "Mateusz", nazwisko: "Radomski", wiek: 30 },
]
console.log(arrayI[1].imie)
// j)
const numberOne = 2
const arrJ = []
arrJ.unshift(numberOne)
console.log(arrJ)

// Zadanie 5.
// a)
const object = {}
// b)
const _person = { name: "Iza" }
// c)
const personDetails = {
	name: "Marcin",
	lastName: "Kowalski",
	age: "30",
	drivingLicence: true,
}
// d)
console.log(personDetails.age)
// e)
console.log(personDetails)
// f)
const carDetails = {
	brand: "Audi",
	color: "black",
	productionYear: "2010",
	dateOfSale: ["2012", "2015", "2019"],
}
console.log(carDetails)

// Zadanie 6.
// a)
// w zmiennych typu wartościowego (prostego) przekazanie wratości odbywa się poprzez wartość:
let num1 = 10
let num2 = num1 + 5
let num3 = num2 + num1 + 5
console.log(num3, num2, num1)
// w zmiennych typu referyncyjnego (złożonego) przekazanie wartości odbywa się poprzez referencję:
const array1 = [1, 2, 3]
const array2 = array1
const array3 = array2
array1.unshift(0)
array2.push(4)
console.log(array1, array2, array3)

// b)
const person = {
	name: "Kamil",
	lastName: "Lewandowski",
	age: 30,
	driverLicense: true,
	drunk: false,
}

// Method 1
if (person.age > 18 && person.driverLicense && person.drunk == 0) {
	console.log("Możesz jechać autem")
} else {
	console.log("Nie możesz jechać autem")
}

// Method 2 (Ternary operator)
let condition =
	person.age > 18 && person.driverLicense && person.drunk == 0
		? "Możesz jechać autem"
		: "Nie możesz jechać autem"
console.log(condition)

// c)
const car = {
	carName: "mustang",
	productionYear: 2020,
	color: "red",
}
const { carName, productionYear } = car

const result = `Moje auto to ${carName} i zostało wyprodukowane w roku ${productionYear}`
console.log(result)

// d)
// without ternary
const isAdult = true
if (isAdult) {
	console.log("Możesz kupić alkohol")
} else {
	console.log("Nie możesz kupić alkoholu, jesteś nieletni!")
}

// with ternary
const veryfication = isAdult
	? "Możesz kupić alkohol"
	: "Nie możesz kupić alkoholu, jesteś nieletni!"
console.log(veryfication)
