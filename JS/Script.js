// There is no boler plat

// Basic normal text on console
console.log("Are you all excited !")

// warning text on console
console.warn("This is warning")

// error in console
console.error("This is an error")

// in js u dont need to define data type

var a = "Utpala"
var b = 10
b = 20  // Reinitialise(updating the value)  data

console.log(a)
console.log(b)
// here if we write a normally the value  of a will be print and if we write a in "" then a will be print because anything written inside "" is considers\d as string
// in js there is no need of declaring data type we can use var (stands for variable )

//  Arethematic calculation

var c = 40
var d = 20

console .log(c+d) // "+" for addition (also dose concatenation(adds 2 string or num n string))
console .log(c-d) //"-"for subtraction
console .log(c/d) // "/" for devide
console .log(c*d) // "*" for multiply
console .log(c%d) //"%" for remainder

// Alert , Confirm , Prompt

 alert ("Hi people !") // Alert message(pop up in the website (information in the form of message) )

 confirm (" Are you a good human ") // similar to alert. in confim it asks user to answer in yes n no n according to the answer the changes can be makde in the web site
 var ans = confirm ("Do u wanna study more ?") // storing the response in "ans"
 console.log(ans)// here if you click on ok there will be a "true" printed on console otherwise false will be printed
 // we can also write a propmt (question)
 prompt(" Enter your name:") // but this won't save the data

 // now to store the anser(data) 
 var ans = prompt(" Enter your city:")
 console.log("User's city is",ans)// sting statement ke baad "," lagana is imp
 // you can notice we have mentioned ans in both prompt and confirm

 //NOTE: u cant give var then name (var name =) bcz in js name is a reserved key word

//JS DATA Type(Premetive and Reference):-

 // premitive (single data / one data at a time)
   // - Number (1,2,3,4,,,,,,,,,6.5,7.6)
   // -Sring ('a',"Hello")
   // - Boolen (True, False)
   // -Undefned(when there is no value inside a defined var ,it works as filler)
   // -null(nothing)
   // -symbol(Their primary purpose is to have a unique result every time they are constructed. You can think of symbols as special tokens that guarantee uniqueness (like UUID).)
   // -Nan(not a number)(eg hi * 2 = Nan)
   
  // - Reference()
   // -Array
   // -Object
   // -Function  
   
 // Conditionals[if else]
    var a = 4

    if(a>5){
        console.log("Correct")
    } // we create different blocks for if n else
    else{
    // we do not write condetionals in else
        console.log("Wrong")
    }
 
 // Understanding with example
    var age = prompt("Enter your age:")
    
    if(age>18){
        console.log("You can vote")
    } else{
        console.log("You are not eligible to vote")
    }

 //Loops(dose the same job in repetition)
   // Do
   // do while
   // for loop
  
   while(10>5){
    console.log (" Hello in loop")
   }
    // this will creat an infinite look so to save us we can declare a var

    var e = 0

    while(e<5){
        console.log (" hello in while loop")
        e++ //++ is a increment operator (ek sai value brr jayegi value) / -- is decressing operatoer (ek sai value ghat jayega value)
        // the loop will continue until the condition is false 
    }

    //do while is not imp

    // for loop(helps in writing in systematic formate)
     for( var f = 0; f<5; f++){   // everything can be mention in one place
        console.log(" hello in for loop")
     }

//