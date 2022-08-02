/*

A - 

In the last lecture we created a Human class with properties. 

But lets say you want this properties to be protected and not be able to change them once initialized 

    class Human {
        name: string
        lastName: string

        constructor(name: string, lastName: string) {
            this.name = name
            this.lastName = lastName
        }

        sayHello() {
            console.log(`hello ${this.name}`)
        }
    }

*/

// Accessible anywhere

class Human2 {
	name: string
	lastName: string

	constructor(name: string, lastName: string) {
		this.name = name
		this.lastName = lastName
	}

	sayHello() {
		console.log(`hello ${this.name}`)
	}
}

const juan = new Human2('juan', 'gonzales')
juan.name = 'Pedor'

// We where able to change Juan's name to Pedro

/*

B -

To make a property not accessible just add a private to the interface 


class Human3 {
	private name: string
	private lastName: string

	constructor(name: string, lastName: string) {
		this.name = name
		this.lastName = lastName
	}

	sayHello() {
		console.log(`hello ${this.name}`)
	}
}


*/

// Not accessible

class Human3 {
	private name: string
	lastName: string

	constructor(name: string, lastName: string) {
		this.name = name
		this.lastName = lastName
	}

	sayHello() {
		console.log(`hello ${this.name}`)
	}
}

const newStudend = new Human3('Diego', 'Guiti')
newStudend.name = 'Juan'

// Property 'name' is private and only accessible within class 'Human3'

/*

C - 

TS helps use write more consice coding. Instead of writing 
	
	private name: string
	lastName: string

	constructor(name: string, lastName: string) {
		this.name = name
		this.lastName = lastName
	}

We can make it consicer by doing it all in the same line as the constructor

	class Human4 {
		constructor(private name : string, private lastName: string){
				this.name = name
				this.lastName = lastName
		}
	}


*/
class Human4 {
	constructor(private name: string, private lastName?: string) {
		this.name = name
		this.lastName = lastName
	}
	sayHello() {
		console.log(`hello ${this.name} ${this.lastName}`)
	}
}

/*
D - 

TS takes it one step further.. when you declare private or public in constructor you don need the write this.var = var

TS will do it for you 

	class Human5 {
	constructor(public name: string, private lastName?: string) {}
	sayHello() {
		console.log(`hello ${this.name} ${this.lastName}`)
	}
}


*/

class Human5 {
	constructor(public name: string, private lastName?: string) {}
	sayHello() {
		console.log(`hello ${this.name} ${this.lastName}`)
	}
}
const maria = new Human5('Maria', 'De la vega')
console.log(maria.name)
