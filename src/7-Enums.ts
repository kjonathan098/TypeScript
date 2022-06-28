/*

Enums is a way to represent a value using numbers 


Lets say you want to represent the sized of a shit you could do it like this 


const small = 1
const medium = 2
const large = 3

Or we can use Enums 

A - use the enum word and declare the var name using cap letter 

    1) enum Size 

    2) add {} and declare your var 
        enum Size {Small, Medium, Large}

    3) TS auto assign the first var as 0 and goes up from there 

    4) you can change by assigning a number yourself 
        enum Size {Small = 1, Medium, Large}

B) Now you can declare a var and asssign a size which will take the assigend number 

    const mySize : Size = Size.Medium

*/

enum Size {
	Small = 1,
	Medium,
	Large,
}

const mySize: Size = Size.Medium
console.log(mySize)
