/*

Last lecture we create this employee obj 

        const employee: {
        id: number
        name: string
    } = {id: 123 , name : 'Mosh'}

There are 3 problem 

    - if you want to add a new Emplye we need to re-write the whole structure again. This is not ideal REMEMBER DRY
    - you might be prone to add more elements to toher employees not being consistent 
    - code doesnt look clean


Instead we can use something similar to a model in mongoose or classes (write the skeleton) and then re-use it with diff var. This is called type Alias 


A - With type Alias you can define a custom type. Start by writin type and in Pascal the var name 

    - type Employee 

B - the create an obj and write all the properties and methods you want 

    type Employee = {
        id: number
        name: string 

    }

C - now when declaring a new employe the "type" you set it to youre Alias type 

    const employeeOne : Employee = {
        id : 0999
        name: 'Mosh'
    }

*/

type Employee = {
	id: number
	name: string
}

type Name = string

const employeeOne: Employee = {id: 0998, name: 'mosh'}
const employeeTwo: Employee = {id: 093, name: 'john'}
const mosh: Name = 'mosh'
