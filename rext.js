// let fname = "john";
// let lname = "doe";
// console.log(fname+" "+lname);
// console.log(`Hello my name is ${fname} ${lname}`);

//multilinr string
// let mg=`hello dear students
// welcome to js class`;
// console.log(mg);


// const add=function(a,b){
//     return a+b;
// }
// console.log(add(5,3));


// let a=5;
// let b=8;
// console.log(`The sum of ${a} and ${b} is ${a+b}`);


// const obj={
//     name:"john",
//     age:30,
//     welcome:function(){
//         console.log("my name is ", this.name, this.age); 
//         console.log(this);//pure function ka reeference dega
//     }
// };
// // obj.welcome();
// // obj.name="alex";
// // obj.welcome();
// console.log(this);//window object


// "use strict";
// function abc(){
//     let q=10;
//     console.log(this.q);
// }
// abc();


//arrow function
// let add=(a,b)=>a+b;
// console.log(add(4,6));


// const obj={
//     name:"john",
//     normalFunc:function(){
//         console.log("normal func", this.name);
//     },
//     arrowFunc:()=>{
//         console.log("arrow func", this.name);//yahan par arrow fun ka apna this nahi hota aur uska koi parent bhi nahi hai 
//     }
// };
// obj.normalFunc();
// obj.arrowFunc();


//lexical scope of this
// const obj={
//     name:"john",
//     showname:function(){
//         const arrowFunc=()=>{//yahan par arrow function ka this apne parent function ka this le lega
//             console.log("arrow func", this.name);
//         }
//         arrowFunc();
//     }
// };
// obj.showname();


//create a simple calculator using arrow functions
// const calculator={
//     add:(a,b)=>{
//         return a + b;
//     },
//     sub:(a,b)=>a-b,
//     // mul:(a,b)=>a*b,
//     div:(a,b)=>a/b
// };
// console.log(calculator.add(5,3));
// // console.log(calculator.sub(7,3));
// console.log(calculator.mul(4,3));
// console.log(calculator.div(9,3));


//onject and array destrructuring
// const user={
//     fname: "john",
//     lname: "Doe",
//     address:{
//         city:"New York",
//         country:"USA"
//     }
// };
// // let a= user.fname;
// // console.log(a)
// // let b= user.address.city;
// // console.log(b);
// let{fname:fn, lname:ln, address:{city, country}}=user;//this syntax is called object destructuring // aliasing)(rename) kiya hai fname ko fn aur lname ko ln
// console.log(fn,ln);
// console.log(city);


// let arr=[1,2,3,4,5];
// let [a,b,c,,e]=arr;
// console.log(a,b,c,e);


// let colors=["red","green","blue","yellow","purple","pink"];
// let[a,b,,d,,f]=colors;
// console.log(a,b,d,f);


// const students={
//     age:20,
//     city:"ghazaibad",
// };
// function showstudent({age,city}){
//     console.log(age);
//     console.log(city);
// }
// showstudent(students);


// const student={
//     name:"john",
//     id:101,
//     marks:[85,90,78],
//     address:"New York",

// };
// function displaydata({name:n,id,marks:[maths,physics,chemistry],address}){
//     console.log(n);
//     console.log(id);
//     console.log(maths);
//     console.log(physics);
//     console.log(chemistry);
//     console.log(address);
//     let avg =(maths+physics+chemistry)/3;
//     console.log("average marks:", avg);
//     if(avg>=80){
//         console.log("Eligible for scholarship");
//     }
//     else{
//         console.log("Regular addmission");
//     }
// }
// displaydata(student);


// const calculator=({num1,num2,symb})=>{
//     switch(symb){
//         case '+':
//             return num1+num2;
//         case '-':
//             return num1-num2;
//         case '*':
//             return num1*num2;
//         case '/':
//             return num1/num2;
//         default:
//             return "Invalid";
//     }
// };
// console.log(calculator({num1:20,num2:10,symb:'+'}));
// console.log(calculator({num1:30,num2:5,symb:'*'}));
// console.log(calculator({num1:15,num2:3,symb:'/'}));
// console.log(calculator({num1:10,num2:4,symb:'-'}));


// to find the square of numbers of even numbers from an array using anonymous function and arrow function
// let numbers=[1,2,3,4,5,6,7,8,9,10]

// let sum=0;
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         let sq=numbers[i]*numbers[i];
//         console.log(sq);
//         sum=sum+sq
//     }

// }
// console.log("Total sum of squares of even numbers:", count);


//merging two lists
// const cs=["pratik","ajay","sachin"];
// const it=["john","doe","alex"];
// const all=[...cs,...it];
// console.log(all);


// const sum=(...num)=>{
//   console.log(num);
// }
// sum(1,2,3,4,5,6,7);


// function showdetails(name,...skills){
//     console.log( name);
//     console.log( skills);
// }
// showdetails("john","js","python","java");


//create a function using rest operator to accept multiple numbers and return their sum
// function sum(...numbers){
//     let total=0;
//     for(let num of numbers){
//         total+=num;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5));
// console.log(sum(10,20,30));
// console.log(sum(5,15,25,35,45));

//example for default values
// let marks = [80]; 
// let [math = 0, science = 0] = marks; 
// console.log(math); 
// console.log(science);

// let data = []; 
// let [a = 10, b = 20] = data; 
// console.log(a); 
// console.log(b);
// let data = [0, null];
// let [a = 10, b = 20] = data;
// console.log(a);
// console.log(b);


// console.log("hello");
// setTimeout(function()  {
//     console.log("hello2");
// }, 2000);
// console.log("hello3");

//Callback function
// function greet(name,callback,callback2){
//     console.log("hello",name);
//     callback();
//     callback2();
// }
// function saybye(){
//     console.log("goodbye");
// }
// function saythanks(){
//     console.log("thank you");
// }
// greet("john",saybye,saythanks);


//by using simple function
// function greet(name){
//     console.log("hello",name);
//     saybye();
//     saythanks();
// }
// function saybye(){
//     console.log("goodbye");
// }
// function saythanks(){
//     console.log("thank you");
// }
// greet("john");


//practical 2
// function check(callback){
//     setTimeout(() => {
//         console.log("USER IG LOGGING IN")
//         callback()
//     }, 5000);
// }

// function verify(callback){
//     setTimeout(() => {
//         console.log("USER VERIFY CART")
//         callback()
//     }, 5000);
// }

// function payment(callback){
//     setTimeout(() => {
//         console.log("PAYMENT DONE")
//         callback()
//     }, 5000);
// }

// function order(callback){
//     setTimeout(() => {
//         console.log("ORDER PLACED")
//         callback()
//     }, 5000);
// }

// check(() => {
//     verify(() => {
//         payment(() => {
//             order(() =>{
//                 console.log('ALL TASK DONE')
//             })
//         })
//     })
// })


//practical 1
// a 
// const sum = (...num) => {
//     let ans = 0
//     num.forEach(n=>{
//         ans+=n
//     });
//     console.log(ans)
// };
// sum(1,2,3,4,5,6,7,8)

// // b
// oldarray = [1,2,3,4,5]
// newarray = [...oldarray,"Ram", "Shyam", 6,7,8,9]
// console.log(newarray)

// // c 
// const student = {
//     name: "ram",
//     age: 20,
//     city: "ghaziabad"
// };

// const copy = {...student};
// console.log(copy)

// const updated = {
//     ...student,
//     age: 21
// };

// console.log(updated)

// // d 
// const add = (a,b,c) => a+b+c
// const arr = [10,20,30]
// console.log(add(...arr))


//promise
// const promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("doing async task");
//         resolve();
//     }, 2000);

// })
// promise.then(function(){
//     console.log("promise executed");
// })
//method 2
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("doing async task");
//         resolve();
//     }, 2000);

// }).then(function(){
//     console.log("promise executed");
// })


// const promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("doing async task");
//         resolve({username:"john",id:111});
//     }, 2000);
// })
// promise.then(function(u1){
//     console.log(u1)
//     return u1.username;
// }).then((username)=>{
//     console.log(username);
// })


//error handling using promise
// const promise = new Promise(function(resolve,reject){
//     let error = true;
//     if(error){
//         resolve({username:"john",id:111});
//     }
//     else{
//         reject("something went wrong");
//     }
// })
// promise.then(function(u1){
//     console.log(u1)
//     return u1.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("promise went through");
// });


//usning aync await
// const promise1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(error){
//             resolve({username:"john",id:111});
//         }
//         else{
//             reject("something went wrong");
//         }
//     }, 2000);
// })
// async function consumePromise1(){
//     try{ 
//         const response = await promise1;
//         console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }
// consumePromise1();


//pratical 3
// const promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username:"john",id:111});
//         }
//         else{
//             reject("something went wrong");
//         }
//     }, 2000);
// })
// promise
//     .then((successMessage) => {
//         console.log(successMessage);
//     })
//     .catch((errorMessage) => {
//         console.log(errorMessage);
//     });



n = int(input().strip())
arr = list(map(int, input().split()))

if len(arr) != n:
    print(-1)
else:
    max_val = max(arr)
    count = [0] * (max_val + 1)

    for num in arr:
        count[num] += 1

    result = []
    for i in range(len(count)):
        result.extend([i] * count[i])

    print(' '.join(map(str, result)))


