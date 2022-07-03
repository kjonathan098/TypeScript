/*

What is Type Script 

In short typeScript is build on top of JS but is more structured. 

One of the most prominent features is that each variable is decalered with thw what type is it. So when other compenent/function recieves that variable and is not what is expected is easy to catch the error . Thats what I understood  


Start by installing a TS compiler (converts the instructions written in TypeScript to its JavaScript equivalent. )

npm i -g typescript


Lets write a simple typescript code and compile it to js 

A - declare a Var called age and asign a value 

let age = 20

B - To convert to ts just add two dots after age and declare what type of var it is 

let age : number = 20

C - If you re-assign the age var to another type it will inmediatly throw and error 


D - To compile file to JS run this command tsc "name of the file " 

tsc 1-Intro.ts

*/

let age: number = 20

console.log(age)
