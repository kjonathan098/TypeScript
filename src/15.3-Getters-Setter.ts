/*

An important concept is the abilty to read private properties to modify the value of private properties... 

This seem reduntant bc we make them private so they dont change. But this helps us change values and add some type of validation along the way. Not only changing them as we please 

All of this is done by using methods inside the class 

*/

/*
 A - Getters

 Very simple just add a method that returns whatever prop you want to read 

    class Animal {
        constructor (private name : 'Dog'){}
    }

A.1 create a method using get word

     class Animal {
        constructor (private _name : 'string'){}
        
        get name (){
            return this._name
        }
    }

*/
class Animal {
	constructor(private _name: string) {}

	get name() {
		return this._name
	}
}

const dog = new Animal('Dog')
console.log(dog.name)

dog._name = 'Cat'

// Cannot change animal._name but I can read it

/*

B - Setters 

Same principle but use the word set for the method 

  class Animal {
        constructor (private _name : 'string'){}
        
        set name (value){
            this._name = value
        }
    }

B.2 Now you can also add validations


  class Animal {
        constructor (private _name : 'string'){}
        
        set name (value){
            if (value.lengt =< 1) throw new Error('value cannot be less than 1')

            this._name = value
        }
    }

*/

class Animal2 {
	constructor(private _name: string) {}

	get name() {
		return this._name
	}

	set name(value) {
		if (value.length < 1) throw new Error('value cannot be less than 1')

		this._name = value
	}
}

const bird = new Animal2('bird')
bird.name = 'Mouse'
console.log(bird.name)
