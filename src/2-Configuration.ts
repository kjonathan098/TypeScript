/*
Start by running 

A - start by running tsc --init 

    A config file has been created 

B - In this file we have a number of settings lets change some 

C - Target

    specifies what version of JS  you wanna use to compile 

D - "rootDir": './'   specifies where our files are that you want to compile 

    create a src folder and add the path the the config file

        	"rootDir": "./src"

E - Go to the emmit section and uncheck 	// "outDir": "./", This specifies the direcotry that will contain our JS files 

    	"outDir": "./dist"  for convetion name dist for distributor 


G - In the same section we have another setting called removeCommnets : if enabled the compiler will remove all comments making the js shorter

H - Another one in same sec is "noEmitOnError": true, . If there is an error it will not compile to JS 

J - now with this config gile you can run tsc and it will compile all the files and stored them in a folder of outDir 

    run tsc 



  

*/
