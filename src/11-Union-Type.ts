/*


In TypeScript, a union type variable is a variable which can store multiple type of values (i.e. number, string etc).

A union type allows us to define a variable with multiple types. The union type variables are defined using the pipe ( '|' ) symbol between the types. The union types help in some special situations.

Lets say you dont know exactly what type of value youre gonna get you can write number or string and according to what you want to return alocate to each case scenario 


Lets say you have a func that conver lbs to kg 

A - write your function 

    const weightConverter = (weight : number) : number => {
        return weight * 1.2 
    }

    weightConverter(76)


B To have either or in your params add this 

     const weightConverter = (weight : number | string) : number => {
        return weight * 1.2 
    }
    weightConverter(76)
    weightConverter('76kg')

    * Now since we declare we want to return a num we need to write a logic for each scenario

C - 

*/

const weightConverter = (weight: number | string): number => {
	if (typeof weight === 'number') return weight * 1.2

	return parseInt(weight) * 1.2
}

weightConverter(76)
weightConverter('76kg')
