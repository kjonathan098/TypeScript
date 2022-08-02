/*

Understanding the issue and why the need of generics 

Lets say you have a function and you want to wrap whatever you send to in an array 

    const wrapInArray = (value:number) => return [value]
    
   * in this case you can only use this function when sending a number 

We have a technique to make it generic and call it using different types of values 


A - write the same function but after the function name write brakets and declare a value (doesnt matter what you name it)



    const wrapInArray <T> = (param: number) => {
	    return [value]
    }

B - Now replace param value with T 
    
    const wrapInArray <T> = (param: T) => {
	    return [value]
    }

C - Now when you call the function you can supply the value for T which will be replaced.. follow syntax

    const res = wrapInArray<number>(1)
*/

const wrapInArray = (param: number) => {
	return [param]
}

const res = wrapInArray(1)
console.log(res)

function newWrap<T, P>(param: T, param2: P) {
	return [param, param2]
}

const wrapIt = <T>(param: T) => {
	return [param]
}

const res2 = newWrap<number, number>(1, 2)
const res3 = newWrap<string, number>('hello', 3)
const res4 = wrapIt<string>('hello')
