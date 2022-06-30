/*

Literal types refers to limiting the value of a var to an exact value it can be either number, string .etccc 



For example if you want a number to be either 50 or 100 nothing else declaring just number type won help 


A - Declare a var 

    let quantity: number = 50

B - Make it literal 

    let quantity: 50 = 50

    in this case quant can only be 50 

C - Now you can  add more options using the union 

    let quantity: 50 | 100 = 50

D - We can also use an Alias to make it more dynamic 

    type Quant = 50 | 100

    let quanti: Quant = 50

*/

let quantity: 50 = 50

let quant: 50 | 100 = 100

type Quant = 50 | 100

let quanti: Quant = 50

console.log(quanti, 'quanti')
