/*

Now lets see how TS prevents bugs when writing functions 

When writing functions on TS theres a bunch of boundries that helps our code to be bug free. (For me just seems anoying as fuck!)

A -When declaring a param you need to set the value type 

    const caluclateTax = (income:number) => {}

B - You can also declare what type of value should be returned from it 

    1 - This goes after the parenthesis

    const caluclateTax = (income: number): number => {
	return 0
    }

    2 - If we forget to return a value or we return another type of value than the one decalred then error will jump

C - We can also detect un-used params and throw error if not used 

        - TS config file 
        - Type Checking section 
        - Enable "noUnusedParameters"
        -

D - To always check that a value is returned go to 

    - TS Config file 
    - Enable "noImplicitReturn"
    - Now even if you didnt declare what type of return should be given there will be an error if something isnt returned 
    * Dont think this is usefull since in my react apps a lot of functions are just doing an operation without returning anything or returning different thigns depending on results from backend .. auth, toast

E - We can also make sure any un-used var locally throws err if un-used 

    - TS Config file 
    - Enable "noUnusedLocals"
    
    const caluclateTax = (income: number) => {
        const x ;
	    if (income < 50_000) return income * 1.3

	    return 0
    }

G - Lets add a second param called year 


    const caluclateTax = (income: number, taxYear: number) => {
        if (taxYear < 2022) return income * 1.3

        return income * 1.5
    }

H - With these two params if you wanna call this function you must provide the correct values & same amount. YOU CANNOT PASS MORE ARGUMENTS THAN THE ONES DECLARED ON THE FUNCTION

    caluclateTax(50_000 , 2020) - GOOD
    caluclateTax(50_000 , 2020, 40) - ERROR

I - If you dont want to pass an argument you need to make the parameters optional . Two ways 

    - const caluclateTax = (income: number, taxYear?: number)

     In this case there will be error cause it is possible to be undefined so return will be undefined

     To correct this add an or statement to make sure you always have a value fallback

        const caluclateTax = (income: number, taxYear?: number) => {
        if ((taxYear || 2022) < 2022) return income * 1.3

        return income * 1.5
    }

    - Provide a default in params that will be overwritten if an arguemnt is passed when the function is called 

        const caluclateTax = (income: number, taxYear = 2022) => {
        if (taxYear < 2022) return income * 1.3

        return income * 1.5
     }

     caluclateTax(50_000, 2020)  
*/

const caluclateTax = (income: number, taxYear = 2022) => {
	if (taxYear < 2022) return income * 1.3

	return income * 1.5
}

const voidFunc = (income: number, taxYear = 2022): number | void => {
	if (taxYear < 2015) return
	return income * 1.5
}
const voidFunc2 = (income: number, taxYear = 2022) => {
	if (taxYear < 2015) return console.log('can calculate')

	return income * 1.5
}

caluclateTax(50_000, 2022)
voidFunc(60_000, 2014)
