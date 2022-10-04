

//variables
// var,  const , let 

// let language = 'javascript';


// const secondsInMinute = 60;
// // secondsInMinute = 40;
// console.log(secondsInMinute);sole.log(language);

// function scope
// var language = 'javascript';

// let is block scope
// function heloo (){

// }

//  if(true){

//     let age = 25;
//     console.log(age);
//  }
// const name = 30;

//hoisting 
// console.log(greeting);
// var greeting = 'helo';
// // undeifind 


// let num = 0;
// num = num+1000;
// console.log(num);

// primitive Data type
// 1. Number 
// let age = 14;
// let temp = -35;
// let price = 56.5;


// 2. String 
// let name = 'ayush';
// boolean
 // true , false

//  let isLoggedIn  = true;


// 4. Undefined


//5. BigInt
// 6. Symbol
// Unique

// 2 structural type
// 1.Object
// 1.1 function
// non-data structure
// callable

//1.2 Array
// collection of values
// const number [4,3 ,4];

// 1.3 Maps 

// 1.4 sets

// 1.5 Dates

// 3.0 structural root
// 1.1 null 

// //  1. Assignment Operator

// let x = 11;
// let y = x;
// console.log(y);


// Ternary Operator

// condition ? '' : '';
// coercion


 
//  const language= ['javascript' , 'python', 'c++'];
//  console.log(language[1]);

//  language.push('dart');
//  language.unshift('java');
// language.pop();
// language.shift();
//  console.log(language);

// for(let i =0; i<5;i++){
//     console.log('8');
// }

// for each


// arr.forEach((x) =>{
//     console.log(x);
// })
let arr =[3 , 4 ,2 , 4];

// for off loop
// for(let a of arr){
//     a = a-2;
//     console.log(a);
// }


// filter

// const students = [
//     {
//         name : "Ayush",
//         roll : '20cse14',
//         marks : 60
//     },
//     {
//         name : "prashant",
//         roll : '20cse39',
//         marks : 60
//     },
//     {
//         name : "Pras1",
//         roll : '20cse39',
//         marks :39
//     }
// ];
//     // console.log(students);
// const failed = students.filter((student) => {
//     return student.marks > 40;
//     });

//     console.log(failed);

// map 


// const users=[

//     {
//         fname : 'johs',
//         lname : 'doe'
//     },
    
//     {
//         fname : 'johs',
//         lname : 'doe'
//     }
// ];
// const finalUser = users.map((user)=>{
//     return{
//          fullname :- `${user.fname}   ${user.lname}`
//      };

// });

// console.log(finalUser);

// Reduce 

// const movies =[

//     {
//         name : "Jack",
//         Budged : 100
//     },

//     {
//         name : "social",
//         Budged : 200
//     },
//     {
//         name : "Matrix",
//         Budged : 300
//     }

// ];

// let total =0;

// movies.forEach((movie)=>{
//     total = total+movie.Budged;
// });


//  const total = movies.reduce((total,movie) => {
//     total = total+movie.Budged;
//     return total;
// }, 0);




// const admin = [2 , 4 , 5];

// const user ={
//     name : 'XYZ',
//     id : 4
// }

// // 
// console.log(admin.includes(user.id));


// find
// const users = [
//     {
//         name: 'xyz',
//         id: 1
//     },

//     {
//         name: 'xyz',
//         id: 1
//     },
//     {
//         name: 'xyz',
//         id: 1
//     }
// ];

// const my_user = users.find((user) => {

//     return user.name == 'xyz';
// });
// console.log(my_user);

// sort 

// const name = ['john', 'jane', 'ram', 'Sameer' ];

// name.sort();

// console.log(name);

// splice

// const name = ['john', 'jane', 'ram', 'Sameer' ];
// console.log(name);
// name.splice(2,1);
// console.log(name);

// function

// function login(username , password){
//     // code
//     console.log(`${username}, Logged in successfully`);
// }

// login('john');
// login('janh');
// // john

// function uppercase(str){
//    console.log(str.toUpperCase())
// }

// let str = 'sdfhson';
// uppercase(str);

// function formateText(text,  formateCb){
//     return typeof formateCb === 'function' ? formateCb(text) : text.ToUpperCase();

// }

// const result = formateText('helo', function(text){

//     return text.charAt(0).ToUpperCase + text.slice(1);
// });

// console.log(result);



// IIFE (Immediately Invoked functi on expression)

// (function setup (){
//     console.log('setup done')
// })();

// arrow function

// const login = ()=>{
//     console.log('logged in');
// }
// login();\\

// console.log('helo');
// setTimeout(function(){
//     console.log("i am from 3 sec");

// },3000);
// console.log('javascript');
 

