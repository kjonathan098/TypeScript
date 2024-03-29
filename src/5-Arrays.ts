/*

In JS arrays can hold any type of data inside which is very flexible 

In TS we should declare that the variable is an array and what type of info is holding inside 


A - Declare an array using ts 

    let newArray : number[] = [1,2,3,4]
    let objArray : object[] = [{key: 6, key2: "hello"}, {key: 6, key2: "hello"}]

B - Now even if you dont want to include any variable in initizalization you should declare what type of var will be inside in the future 

    let empty : string[] = []
*/

let newArray: number[] = [1, 2, 3, 4]
let objArray: object[] = [
	{key: 6, key2: 'hello'},
	{key: 6, key2: 'hello'},
]

objArray.push({key: 6, key2: 'hello'})

let empty: string[] = []
let names: string = 'hello'
empty.push(names)

let hobbies: string[] = ['football, baseball']
hobbies = [...hobbies, 'basketball']

// writing and array of objects decalring key type pairs
let users: {
	name: string
	sport: string
}[] = [{name: 'john', sport: 'basket'}]

users = [...users, {name: 'john', sport: 'basket'}]

for (const user of users) {
	console.log(user.name)
}

// same code without it

let users2 = [{name: 'john', sport: 'basket'}]
users2 = [...users, {name: 'mark', sport: 'tennis'}]
for (const user of users2) {
	console.log(user.name)
}
