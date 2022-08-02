/*

Interfaces are exactly the same as decalring as schema in mongoose! Basically what your decalring is the skeloton of a variable so you can assign that skeloton to any other variable 

For example you have a 2 components that use a var called USER the best practice instead of declaring two objects with all its properties inside is to create a User interface and injected wherever you need 

*/

const sayHello = (user: {name: string; lastName: string}) => {
	return console.log(`hello ${user.name}`)
}

const sayGoodbye = (user: {name: string; lastName: string}) => {
	return console.log(`goodbye ${user.name}`)
}

sayHello({name: 'john', lastName: 'dess'})

// As you can see in this example we had to decale user properties twice!

/*

The better practice is to decale an interface 

A - Start by writing interface follow by var in UpperCase 

    interface User {
        name: 'string', 
        lastName: string'

    }

B - In your function just decalre the type as your interface

    const sayHello2 = (user: User) => {
	    return console.log(`hello ${user.name}`)
     }

      const sayGoodbye = (user: {name: string; lastName: string}) => {
	    return console.log(`goodbye ${user.name}`)
    }   

C - Typically this  var would be stored in a separete file and exported anywhere you would need them 

    export interface User2 {
        	name: string
	        lastName: string
        }

*/

export interface User {
	name: string
	lastName: string
}

const sayHello2 = (user: User) => {
	return console.log(`hello ${user.name}`)
}

const sayGoodbye2 = (user: User) => {
	return console.log(`goodbye ${user.name}`)
}

sayHello2({name: 'john', lastName: 'dess'})
sayGoodbye2({name: 'john', lastName: 'dess'})
