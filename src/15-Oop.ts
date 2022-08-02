/*

Creating classes using TS . 


A - start by declaring your class 

    class Human {
    }

B - You can add any properties and declare their type 

    class Huma {
        name: string 
        lastName: string 

        sayHello(){
            console.log(`hello ${this.name}`)
        }
    }

C - In the last example "name" & lastName are just like intefaces we havent initilized them. TS will throw an error

    1 - To initilize them just add a constructor function 

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
const pedro = new Human('Pedro', 'Marquez')

pedro.sayHello()
