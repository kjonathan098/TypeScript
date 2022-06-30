/*

OK i absolutely hate obj in ts. How do I know what I want inside an OBJ! this is bullshit 

Anywyas in TS you need to declare all the key value pairs thats gonna be inside an obj. You cannot just add something new later 


A - declare an employe obj with property of id 

    const employee = {id: 123}

    * Now we cant do this employee.name('Mosh')

B - We can define the structure of the obj just like before 

    const employee : {
        id : number 
        name : string 
    } = {id: 123}

    * In this ex above  we get an error cause name wasnt initilized 

         const employee : {
        id : number 
        name : string 
        } = {id: 123, name: ''}

        If you want to leave it empty initialize to an empty string 

        * ALTHOUGH YOU CAN DECLARE THE STRUCTURE OF THE OBJ WITH KEY TYPE PAIRS ACCORDING TO ACADEMIND IS BETTER TO LET TS INFER IT


C - Somethimes you wanna make properties read only so we dont change them anywhere 

        const employee : {
           readonly id : number 
            name : string 
        } = {id: 123, name: ''}



D - Adding a function to obj. Just like in the prev lesson we need to declare all the params, the type of params and the return value 

      const employee : {
           readonly id : number 
            name : string 
            retire : (company : String) => string

            
        } = {id: 123, name: '' , retire : ('Amazon') => return console.log('amazong')}


*/

// const employee: {
// 	id: number
// 	name: string
// } = {id: 123}

const employee2: {
	readonly id: number
	name: string
} = {id: 123, name: ''}

employee2.name = 'Mosh'

const employee3: {
	readonly id: number
	name: string
	retire: (date: Date) => void
} = {
	id: 098,
	name: 'Mosh',
	retire: (date: Date) => console.log(date),
}
