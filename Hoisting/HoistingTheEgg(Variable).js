//Welcome to the code of Hoisting the Egg

//So i am going to write some code and you have to guess what the code actually does
a=2;

var a;

console.log(a)

//The weird thing about this code is that we will get the output as 2 even though we havent even declared the variable yet

//What about this alone without the avobe statements? 😕

console.log(a);

var a=2;

//This weirdly results in undefined

//The reason for this quite simple there are two steps in JavaScript the first one would be compilation where all the declaration of varibales in the scope is done
//and the second one would be execution by the engine where all the execution of the code by looking up to the scope is done
//So technically the compiler looks at this  a=2; var a; or any assignment like var a = 2; and converts that into two steps, var a; a=2;
//Essentially the declaration is taken to the top and this process of doing so is called Hoisting


//Note 📓 Only declarations are hoisted not the expressions because imagine javascript re arranging the code.