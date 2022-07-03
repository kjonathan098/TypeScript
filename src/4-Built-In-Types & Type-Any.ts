/*


JS offers the typr of variables we already know 

- String 
-Number
-Boolean 
-null 
-Undefined 
- obj 


TS expands this list to new ones 

-any 
-unknown 
-never 
-enum 
-tuple 

There are two ways you can intialize a var in TS 

 A let age : number = 20 

 B let age = 20 

 Since we initialized a value with a number TS will write the type for us 

    * According to academind is better to let TS infer the type of var youre declaring..No need to type it


B - If we dont initialize a var TS will declare as type any 

    let level ;


C - So basically Mosh says never to use this option unless you know what youre doing. Esentially youre loosing the whole point of TS by having a var type "any"


*/

let a: number = 20
let b = 20

let level
