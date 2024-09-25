const Greet =()=>
  {
    document.getElementById("greet").innerHTML = "Bye Folks"
  }

//Javascrpt concepts as per the aksay saini videos


// 1. How js code excuted? 

/* 
  1. Everything will happen inside a call stack
  2. At first a global execution context is created 
  3. GEC contains two parts
    a. Memory component
    b. Code component
  4. Every program excuted in two phases they are
   a. memory creation phase 
   b. code execution phase
  5. Js is a synchrounous single threaded language
*/

var x = 10;
function a()
{
  console.log("Hello Ajay")
}

console.log(x)
a()

/*  output : 10
             Hello Ajay
*/

//2. Hosting in js?

/* Even before execution of single of code ,
 memory space will be created for variables and functions , this is called hosting */

console.log(x)
a()

var x = 10;
function a()
{
  console.log("Hello Ajay")
}

/*  output : Undefined
             Hello Ajay
*/


//3. Shortest program in js is , empty program, because of the window object or global object

//4. undefined vs not defined -> place holder vs reference error

console.log(x)
console.log(y)
var x=10;

/* output : undefined
            refrence error , x is not defined.
*/


//5. Scope chain and lexical environment?

var x = 10;

function a()
{
  var y = 20;
  function b()
  {
    function c()
      {
        console.log(x , y)
      }
    c()
  }
  b();
}
a()

//6. Var , let and const difference?

/*
    var -> global or functional scope, re-intialised, re-declared
    let -> block scope, re-intialised, no re-declared
    const ->block scope, no re-intialising, no re-declared
*/

var x = 100;
let y = 200;
const z = 300;
{
  var x = 10;
  let y = 20;
  const z = 30;
  console.log(x)
  console.log(y)
  console.log(z)
}
console.log(x)
console.log(y)
console.log(z)

/* output : 10
            20
            30
            10
            200
            300
*/

//7. Temporial dead zone -> The time gap between hosting and intialisation of a variable , this occurs in let and const 

console.log(x)
let x = 10;

//output : reference error, x cant be acessed before intialisation

//9. Closure -> Function along with its lexical scope bundle together will form a closure

function outer(){
  var a= 10;
  function inner()
  {
    console.log(a)
  }
  return inner
}

var result = outer()
result();

//10. setTimeout

function a()
{
  var i = 0;
  setTimeout(function (){
    console.log(i)
  },1000)
  console.log("Hello world")
}
a()//simple setTimeout func which takes a call back function

/*output -> Hello World
            0
 */

function a()
{
  for(var i=1;i<=5;i++)
  {
    setTimeout(function (){console.log(i)},i*1000)
  }
}
a()// guess the output question
/*output -> 6,6,6,6,6 */
//fix the above question to print 1,2,3,4,5

function a()
{
  for(var i=1;i<=5;i++)
  {
   function close(x)
  {
    setTimeout(function (){console.log(x)},x*1000)
  }
  close(i)
  }
}
a()// or else simply use let , this is because happens of their behaviour scope

//11.Garbage collector -> The program which cleans up the unused memory 

//12. Constructor class usage for increment and decrement program using closures

function Counter(){
  var count = 0;
  this.increment = function()
  {
    count++
    console.log(count)
  }
  this.decrement = function()
  {
    count--
    console.log(count)
  }
}
var countRes = new Counter()
countRes.increment()
countRes.increment()
countRes.decrement()

/* output -> 1
             2
             1 
*/
//First class functions in js
/* Because of different powerful abilities of functions they are called first class functions */

//Function statement vs function expression vs function declaration? //--> Main dffrnc is hoisting

//function statement

function a(){
  console.log("Funtion statement or funtion declaration")
}

a();

//function expression

var b = function ()
{
  console.log("Function expression")
}

b();

//anonymous function -> function without a name is called anonymous function

//named function expression

var c = function abc()
{
  console.log("Function expression")
}

c();

//arrow functions

const arrow = () =>
  {
    console.log("Arrow functions")
  }

arrow()

//callback functions -> function which passed as an argument to a function is called call back function

function x(y)
{
  console.log("Higher order function")
  y();
}
x(function y()
{
  console.log("callback function")
});

//Higher order function -> function which accepts functions as an arguments are called higher order functions

function x(y)
{
  console.log("Higher order function")
  y();
}
x(function y()
{
  console.log("callback function")
});

//program to display , how to write functional programming and also basic of creating a map polyfill

const radius = [3,2,1,4]
//calculate the circumference

const circumference = (r) =>
{
    return Math.PI*r*r
}

const diameter = (r) =>
{
    return 2*r;
}

console.log(radius.map(circumference))

Array.prototype.calculate = function(logic)
{
    let output = []
    for(let i=0;i<this.length;i++)
    {
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.calculate(circumference))
console.log(radius.calculate(diameter))

//Map, filter and reduce methods

const arr = [2,4,5,6,1]
const output = arr.map(n=>n*2)
console.log(output)
const output2 = arr.filter(n=>n>2)
console.log(output2)
const output3 = arr.reduce((a,b)=>a+b)
console.log(output3)
const output4 = arr.reduce((acc, curr)=> {
  acc = acc + curr
  return acc
}, 0)
console.log(output4)
const output5 = arr.reduce((max, curr)=>{if(curr>max){max=curr}return max},0)
console.log(output5)

//maps, filter and reduce on objects
const list = [
  {firstname:"Ajay",lastname:"Kumar",age:25},
  {firstname:"Siddu",lastname:"roy",age:25},
  {firstname:"Kumara",lastname:"roy",age:50}
  ]
console.log(list)

const result = list.reduce((acc,curr)=>{
  if(acc[curr.lastname])
  {
      acc[curr.lastname]++
  }
  else
  {
      acc[curr.lastname] = 1
  }
  return acc
},{})
console.log(result)
const firstname = list.map(x=>x.firstname)
console.log(firstname)
const firstnamesof25 = list.reduce((acc, curr)=>{
  if(curr.age==25)
  {
      acc.push(curr.firstname)
  }
  return acc
},[])
console.log(firstnamesof25)
const firstnameof50 = list.filter(x=>x.age==50).map(x=>x.firstname)
console.log(firstnameof50)

const firstnameof51 = list.reduce((acc,curr)=>
{
  if(curr.age===50)
  {
    acc.push(curr.firstname)
  }
},[])
console.log(firstnameof51)


// Call, Apply & bind, as well as bind polyfill creation

const name = {
  firstname:"Ajay",
  secondname:"Siddu",
  printFullname : function()
  {
      console.log(this.firstname+" "+this.secondname);
  }
}

const namez = { firstname:"Sara",secondname:"Tendulkar"}

name.printFullname()
name.printFullname.call(namez)
//
let name1 = {
  firstname:"Ajay",
  lastname:"Siddu"
}


let name2 = {
  firstname:"Virat",
  lastname:"Kohli"
}

let name3 ={
  firstname:"Sara",
  lastname:"Tendulkar"
}

function fullname(){
  console.log(this.firstname+" "+this.lastname)
}

function info(a, b){
  console.log(this.firstname+" "+this.lastname+" from "+a+","+b)
}
info.call(name1,"kavali","Nellore")
info.apply(name2,["Delhi","India"])
let name3info = info.bind(name3,"Mumbai","Maharastra")
name3info()

//polly fill for bind method
const namex ={firstname:"Ajay",secondname:"Siddu"}

const namey ={firstname:"Sara",secondname:"Tendulkar"}

function printFullname(a,b,c)
{
    console.log(this.firstname+" "+this.secondname+","+a+" "+b+" "+c)
}

let bindExample = printFullname.bind(namex,"Kavali","Nellore")
bindExample("Ap")


//Polly fill for bind method
Function.prototype.mybind = function(...args)
{
    let obj = this
    let params = args.splice(1)
    return function(...args2)
    {
        obj.apply(args[0],[...params,...args2])
    }
}


let custombind = printFullname.mybind(namex,"Kavali","Nellore")
custombind("Ap")
//Currying in js
const sum = (x)=>
{
  return (y)=>
  {
      console.log(x+y)
  }
}
sum(1)(2)

//Debouncing in js

let count  = 0 
const getData = () =>
{
  console.log("The Api call is being made ", count++)
}
const Debounce = (fn, d) =>
{
  let timer;
  return function()
  {
    let context = this
    let args = arguments
    clearTimeout(timer)
     timer = setTimeout(()=>
      {
        fn.apply(context, args)
      },d)
  }
}

const betterFn = Debounce(getData, 300);
betterFn()

//Event Bubling and Event Capturing 
document.getElementById("Grandparent").addEventListener("click",()=>
  {console.log("Grand Parent is clicked")},false)
  
  document.getElementById("Parent").addEventListener("click",()=>
  {console.log("Parent is clicked")},false)
  
  document.getElementById("Child").addEventListener("click",()=>
  {console.log("Child is clicked")},false)

/*output , if you click the child box , the output will be
child is clicked
parent is clicked
grand parent is clicked 
i.e is event bubling the events will from inner to outer root */
 

document.getElementById("Grandparent").addEventListener("click",()=>
  {console.log("Grand Parent is clicked")},true)
  
  document.getElementById("Parent").addEventListener("click",()=>
  {console.log("Parent is clicked")},true)
  
  document.getElementById("Child").addEventListener("click",()=>
  {console.log("Child is clicked")},true)

/*if you click the child box, the output will be
Grand parent is clicked 
Parent is clicked
Child is clicked
i.e is event capturing or trickling the event propagation will flow from outer to inner nodes */

document.getElementById("Grandparent").addEventListener("click",()=>
  {console.log("Grand Parent is clicked")},true)
  
  document.getElementById("Parent").addEventListener("click",()=>
  {console.log("Parent is clicked")},false)
  
  document.getElementById("Child").addEventListener("click",()=>
  {console.log("Child is clicked")},true)

  /*  The output will be
  Grand parent is clicked
  Child is clicked
  parent is clicked*/
//e.stopPropagation() to stop the flow of event B 0r Evnet C

//Event Delegation -> Is possible due to event bubbling behaviour, to reduce the event handlers we wil use the event delegation
// See an example program before interview

//Async vs defer
/* They are used in the script tags, it behaves differently when we used async and defer rather than the normal flow
Normal flow - html parsing, script tag finds, fetching the script , excuting than , continues the html parsing
async flow- html parsing and fetching the scripts happens simantaneously , once the fetching is complete, exceution takes place
by stopping the hml parsing after completion of the execution o the script , the html parsing continues
deferflow - html parsing and fetching takes place simataneously , after the completion of html parsing the execution of the script takes place*/

//prototypal inheritance

//Thinking recursively 

let user = 
{
  name:"Ajay",
  address:
  {
    personal :
    {
      city: "Nellore",
      area:"Shantinagar"
    },
    office:
    {
        city:"Hyderabad",
        area:
        {
            landmark:"Hitech city"
        }
    }
  }
}

let res = {}
let Magic = (obj, parent) =>
{
    
    for(let key in obj)
    {
        if(typeof obj[key] === "object")
        {
            Magic(obj[key], parent+"_"+key)
        }
        else
        {
            res[parent+"_"+key] = obj[key]
        }
    }
    
}
Magic(user,"User")
console.log(res)

/* 
{
  User_name: 'Ajay',
  User_address_personal_city: 'Nellore',
  User_address_personal_area: 'Shantinagar',
  User_address_office_city: 'Hyderabad',
  User_address_office_area_landmark: 'Hitech city'
}
*/


//Throttling in javascript 

const getDataz = () =>
{
  console.log("Data is called")
}

const betterfn = Throttle(getDataz, limit)

const throttle = (fn,d) =>
{
  let flag= true
  return function()
  {
    let context = this
    let args = arguments
    if(flag)
    {
      fn.apply(context, args)
      flag=false
      setTimeout(()=>
      {
        flag=true
      },d)
    }
  }
}

betterfn()

//Call back resultant to achieve the asynchrous programming, but due to callbacks there are mainly to two problems
// 1. callback Hell also called pyramid of doom
// 2. Inversion of control

// To over come these problems Promises are used effectively

//Promise - It is an object which represnts the eventual completion of the async opeartion
//Mainly consists of 3 stages, they are pending , fullfilled, rejected

const sample_api = "https://www.google.com"
const data = fetch(sample_api)
console.log(data)
//This data will returns a promise, because of fetch will returns the promise

//To display that data, we have to use "then"

data.then(function()
{
  console.log(data)
})

//if getting the data from the api is failed by any case, then we have to handle it by using "catch"

data.then(function()
{
  console.log(data)
}).catch(function(){
  console.log("Invalid data..!")
})


//Creating an new Promise

//Using Callbacks , We will leads to callback hell and inversion of hell so we will implement the promise
const cart = ["shoes","pants","shirts"]
//createOrder
//proceedToPayment
//showPaymentDetails
//updateWallet

//call back hell ->>

// createOrder(cart, function(orderId){
//   proceedToPayment(orderId, function(paymentInfo){
//     showPaymentDetails(paymentInfo, function(){
//       updateWallet()
//     })
//   })
// })

//----> creating the promise
function createOrder(cart)
{
    const p = new Promise(function(resolve,reject){
        if(true)
        {
            let orderId = 123
            resolve(orderId)
        }
        else
        {
            const err = new Error("Inavlid Info, promise is rejected")
            reject(err)
        }
    })
    return p
}
const promise = createOrder(cart)

promise.then(function(orderId){
    console.log(orderId)
}).catch(function(){
    console.log("Promise is rejected")
})

//---> This will be promise chaninging

// const promise = createOrder(cart)
// promise.then(function(orderId)
// {
//   return proceedToPayment(orderId)
// })
// .then(function(paymentInfo){
//   return showPaymentDetails(paymentInfo)
// })
// .then(function(){
//     return updateWallet()
// })

//---> Async and Await 

//->Async : Wil makes a functions to return a promise
//->await : Will makes a fucntion wait for the promise

async function output()
{
    console.log("Output1");
    console.log("Output2");
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("output3")
        resolve()
    },1000)
    })
    console.log("Output4");
}

output()

//In the above program the flow of execution is controlled by using await and async

//Promise.api's
/* a.promise.all()
    b.promise.allSettled()
    c.promise.race()
    d.promise.any() */

//Promise.all()
/*It will take array of promises, and return the array of result if all or success, 
it will written error of any one of promise is failed */

const p1 = new Promise((resolve,reject)=>
  {
     setTimeout(()=>{resolve("P1 is success")},3000) 
     //setTimeout(()=>{reject("P1 is failed")},3000) 
  })
  
  const p2 = new Promise((resolve,reject)=>
  {
     setTimeout(()=>{resolve("P2 is success")},1000) 
  })
  
  const p3 = new Promise((resolve,reject)=>
  {
     setTimeout(()=>{resolve("P3 is success")},2000) 
  })
  
  
  Promise.all([p1,p2,p3])
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.error(err)})

  //Output : After 3 secs the output will be :  [ 'P1 is success', 'P2 is success', 'P3 is success' ]

  //if any of the above promises are failed, it will throw the reject msg, dont care about other promises result if s or f

  //Promise.allSettled()
  //It waits for all the promises to get settle untill all are completed then it will give the result

  const p11 = new Promise((resolve,reject)=>
    {
       //setTimeout(()=>{resolve("P1 is success")},3000) 
       setTimeout(()=>{reject("P1 is failed")},3000) 
    })
    
    const p22 = new Promise((resolve,reject)=>
    {
       setTimeout(()=>{resolve("P2 is success")},1000) 
    })
    
    const p33 = new Promise((resolve,reject)=>
    {
       setTimeout(()=>{resolve("P3 is success")},2000) 
    })
    
    
    Promise.allSettled([p11,p22,p33])
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.error(err)})

    //Output - It will the array of objects
    /* [
  { status: 'rejected', reason: 'P1 is failed' },
  { status: 'fulfilled', value: 'P2 is success' },
  { status: 'fulfilled', value: 'P3 is success' } ]
    */

//promise.race()
//It will return the first settled promise, irrespective of the its result success or failure
const p111 = new Promise((resolve,reject)=>
  {
     //setTimeout(()=>{resolve("P1 is success")},3000) 
     setTimeout(()=>{reject("P1 is failed")},3000) 
  })
  
  const p222 = new Promise((resolve,reject)=>
  {
     setTimeout(()=>{resolve("P2 is success")},1000) 
  })
  
  const p333 = new Promise((resolve,reject)=>
  {
     setTimeout(()=>{resolve("P3 is success")},2000) 
  })
  
  
  Promise.race([p111,p222,p333])
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.error(err)})

//output - p2 is success

//promise.any()
//unlike race, it will check for first settled success

const p10 = new Promise((resolve,reject)=>
  {
     setTimeout(()=>{resolve("P1 is success")},3000) 
     //setTimeout(()=>{reject("P1 is failed")},3000) 
  })
  
  const p20 = new Promise((resolve,reject)=>
  {
     //setTimeout(()=>{resolve("P2 is success")},1000)
     setTimeout(()=>{reject("P2 is failed")},1000) 
  })
  
  const p30 = new Promise((resolve,reject)=>
  {
     //setTimeout(()=>{resolve("P3 is success")},2000)
     setTimeout(()=>{reject("P3 is failed")},2000)
  })
  
  
  Promise.any([p10,p20,p30])
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.error(err)})

  //output - P1 is success after 3 sec

  //if all of the promises are failed then it will display the aggregate error
  const p100 = new Promise((resolve,reject)=>
    {
       //setTimeout(()=>{resolve("P1 is success")},3000) 
       setTimeout(()=>{reject("P1 is failed")},3000) 
    })
    
    const p200 = new Promise((resolve,reject)=>
    {
       //setTimeout(()=>{resolve("P2 is success")},1000)
       setTimeout(()=>{reject("P2 is failed")},1000) 
    })
    
    const p300 = new Promise((resolve,reject)=>
    {
       //setTimeout(()=>{resolve("P3 is success")},2000)
       setTimeout(()=>{reject("P3 is failed")},2000)
    })
    
    
    Promise.any([p100,p200,p300])
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.error(err)})

/* output -> ERROR!
[AggregateError: All promises were rejected] {
  [errors]: [ 'P1 is failed', 'P2 is failed', 'P3 is failed' ]
} 
  */