/*

Type assertion is a way to let TS know what type of variable a variable is. 

Lets say you have a any type 

A - Declayer a varuable 

    let name; 
    name: "John"

    * in this case the type is any cause its not intitialized 
    * In this case TS wont show you intelisence cause type any doesnt have 

B - To solve this you can add assertion which tells TS what type of Var it is 

    There are two way to do it 

    1) let assertion = (<sting>name).toUpperCase
    2) let assertionAlternative = (name as string).toUpperCase

*/
let newName
newName = 'Wayne'

let assertion = (<string>newName).toUpperCase()
let alternative = (newName as string).toUpperCase()

let newName3 = 'John'
const upper = newName3.toUpperCase()
