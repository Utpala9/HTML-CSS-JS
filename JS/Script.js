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

  
//    while(10>5){
//     console.log (" Hello in loop")
//    }
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

//Comparision operator
     //- (==) for comparing the values string mai ho ya int mai ho , eg: var a = 10 and var b = '10' both r same 
     //-(===) compair value + check data type also therefore in this case above example would be wrong
     
// Functions (assesable pice of code and it helps in)
    
    function hey (){
        console.log("Good morning")
    }
     
    hey() // calling function
    
    function walk(){
        console.log("Lets walk n enjoy")
    }

    function sing(){
        console.log("sa re ga ma pa dha ni saaa")
    }

    function dance(){
        console.log("💃🪭")
    }

    walk()
    sing()
    dance()
    // all the function can be called all together

    function greet(h){
        console.log("Hello, welcom",h)
    }

    greet(10)
    greet(20)
    greet(8000)
    greet("Users")
    // u can assigne values in function and also u can call it as much time you want
    // jiss name sai u r calling , mentiion that inside the () in function statement and also in console.logwala () for example
    
    function xyz(){
        console.log("Namaste")

        return 20
    }   

    xyz() // for function

    var i = xyz // for the return value mentioned inside the function
    console.log(i)

    //NOTE: console.log is not permanent , wes use it to test n try out websites

    //other ways to make function

function art(){
    console.log("Art is love")
}

art()

//other way(first class function) 

var craft = function(){   //here craft as variable
    console.log("Craft is a part of art")
}

craft()

//other way (fatt arrow function: use of arrow <,>)
var life =()=>{
    console.log("life is good art n craft is there")
}

life()


//ARRAYS: let us collect mulipal data in one variable
// we cant put 10,20,30 or strings... inside var bcz its an premitive data type it allows one at a time

var arr = [10,'Ab',20,'cd',30,'ef',40,'gh',50,'ij']

console.log(arr) // arr r saved in the form of index

var arr2 =[ 10,20,30,40,50]

 console.log(arr2)

 //now to add an element inside the arr2 for eg here 99

arr2.push(99) // push to add element

 console.log(arr2) 

 arr2.pop(99) // pop to remove element

 console.log(arr2)

 console.log(arr2.length)//arr2.length for length (index starts with 1, therefore here its 5)


 //hughter order functions in arr: requires functions on call backs .

//loop in arry

var arr3 = [10,20,30,40,50]
  arr3.forEach (function(),elem){  // forEach helps in catching n targets each elements inside the arry & elem here is to write all the elemets inside the arr wuth hiiii written in console.log
//function will run 5 times bcz the size of array is 5
    console,log('hiiiii',elem)
}

//NOTE:
  //() = functions
  //{} = Objects
  //[] = array

//OBJECTS:Values written in the form of properties and values
 
 var obj = {
    user:'Tiya', // "," at the end is imp
    age:22
 }

 console.log(obj) 
 console.log(obj.user) // obj. any special property u wanna see like here user
 console.log(obj.age) // here property is age

var obj1 = {
    model:"iPhone",
    price: 70000,
    color: 'white'
}

var obj2 ={
    model: 'oneplus',
    price:30000,
    color:'blue'

}

var obj3 ={
    model: 'Samsung',
    price: 50000,
    color:'black'
}

console.log(obj1)
console.log(obj2)
console.log(obj3)

console.log(obj1.model)//1st obj ka model
console.log(obj2.price)//2nd obj ka price
console.log(obj1.color)//3rd model ka color

//Now building functions inside the objects
 
var ppl = {
    pplName:'Human',
    umar:69,
    greet:function(){
        console.log ("Good morning ppl")
        
    }

}

console.log(ppl.pplName)
console.log(ppl.umar)
console.log(ppl.greet()) //greet with () bcz its a function (here it will show undefine bcz when u r calling ppl function is not returning anything)
// if we mention return = some value under "console.log ("Good morning ppl")" then it would return that value insted of undefine
ppl.greet() // we can call like this as well, in this case there will be no undefine statement

// ARRAY OF OBJ

 var arr4 =[
    {naam:"Tiya",dob:2003}
    {naam:"Riya",dob:2004}
    {naam:"Jiya",dob:2005}
    {naam:"Diya",dob:2006}
 ]

 console.log(arr4[0].naam)
 console.log(arr4[1].dob)
 console.log(arr4[2].naam)
 console.log(arr4[3].dob)


//DOM: Use of language in frontend(document object model:frontend ki js)
//  4 pillars of DOM
//   -selection of an Element
//   -Changing HTML in js 
//   -Changing CSS in js
//   -Event Listener


//selection of an Element

var htmlDoc = document.querySelector ('h1') //document: means html document 
//querySelector means go inside html and select a query

console.log(html)

// hanging HTML in js 
h1.innerHTML"Changed" //html inside the h1

// Changing CSS in js
h1.style.color ='pink' 
h1.style.backgroundColor = 'White'

// Event Listener
 
document.querySelector ("h1")

h1.addEventListener("click",function()){
//    console.log("Hello ji") 
      h1.innnerHTML = "Changed"
      h1.style.color = "black" 
}


