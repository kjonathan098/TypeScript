/*

Type script seems to have a pretty cool program to Debug stuff lets check it out 


A - Go to config.json  on Emmit section enable sourceMap feature 

B - Will do some logic so we can test debbuging 

C - Go to the right of VSCode and add a breakpoint by enabling the red dot 

    This means that our app will run automatically until this point and then we can execute our code line by line 

D - Go to debug panel and click on 

    create a launch.json file  and select node.js


E - In json file add this after program 

    "preLaunchTask": "tsc: build - tsconfig.json",

    ENTER EXACTLY HOW IS SHOWN HERE 


F - Go back to debugging and click on green play (make sure you have a breakpoint)





*/

let age2: number = 20

if (age2 < 50) age2 += 10

console.log(age2)
