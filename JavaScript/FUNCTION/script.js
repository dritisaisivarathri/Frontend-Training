// FUNCTION IN JS
// NAMED FUNCTION:FUNCTION HAVING SOME NAME
// function add(a,b){ //func declaration
//     console.log(a+b);
    
// }
// add(10,20); //function calling statement //30

// function add(a=10,b=20){ //func declaration
//     console.log(a+b);
// }
// add(); //function calling statemet  //30

// function add(a=20,b=20){ //func declaration
//     console.log(a+b);
// }
// add(10,20); //function callig statemet //30 ==> it will take actual arguments if both default and actual are given


// ANONYMOUS FUNCTION
// WAYS TO CALL ANONYMOUS FUNCTION
// 1 WAY KEEP THEM IN PARENTHESIS
// (function (a,b){
//     console.log(a+b);
    
// } (20,30) )

// IIFE IMMEDIATE INVOKE FUNCTION EXPRESSION
// (function (a,b){
//     console.log(a*b);
    
// }) (3,5)

// FUNCTION EXPRESSION: WE HAVE TO STORE THE FUNCTION IN VARIABLE
// WE CAN USE WHERE EVER WE WANT
// let div = function (a,b){
//     console.log(a/b);
    
// }
// div(20,5)

// HIGHER-ORDER FUNCTION && CALLBACK FUNCTION
// HIGHER ORDER FUNCTION: FUNCTION WHICH ACCEPTS ANOTHER FUNCTION AS A PARAMETER
//CALLBACK FUNCTION: FUNCTION WHICH PASS AS A ARGUMENT TO ANOTHER FUNCTION

// function hof(name,clb){
//     console.log(name);
//     clb();
// }
// function callback(){
//     console.log("i am from callback function");
    
// }
// hof("driti",callback)


// ARROW FUNCTION
// ways to call arrow function
// 1 way ==> store it in variable
// let div = (a,b)=>{
//       console.log(a*b);
// };
// div(3,4)

// ARROW FUNC IS ACCEPTING 1 PARAMETER THEN NO NEED OF PARENTHESIS
// let mul = a =>{
//     console.log(a*a);
// // }
// mul(5)

// ARROW FUNC IS HAVING 1 STATEMENT NO NEED OF CURLY BRACKETS
// let mul = a =>console.log(a*a);
// mul(5)

// EXPLICITLY RETURN
// function add(a,b){
//      return a+b;
// }
// add(10,20)   //no outpt
//we need to invoke function in variable
// function add(a,b){
//      return a+b;
// }
// let res = add(10,20)
// console.log(res); //30

// console.log(add(50,50));


// IMPLICIT RETURN
// ONLY AVAILABLE FOR ARROW FUNC
// ONLY 1 STATEMENT AND NO CURLY BRACKETS
// let mul = (a,b)=> console.log(a*b);
// let mul = (a,b)=> a*b
// let res = mul(3,5)
// console.log(res); //15 

// let mul = (a,b)=> {a*b}
// let res = mul(3,5)
// console.log(res);  //undefined because of {a*b} we should not use curly brackets if we want implicitly

// let mul = (a,b)=> {return a*b}
// let res = mul(3,5)
// console.log(res);  //15 because we use return keyword inside brackets

// NESTED FUNCTION:FUNCTION INSIDE FUNCTION
// function parent(name,city){
//     console.log(name);

//     function child(){
//         console.log(city);
        
//     }
//     child()
// }
// parent('driti','nellore');

// CLOSURE: WHEN WE ARE ACCESSING PARENT VARIABLE INSIDE CHILD FUNCTION
// CLOSURE IS ONLY CREATED FOR CITY
// console.log('start');

// function parent(name,city){
//     console.log(name);

//     function child(){
//         console.log(city);
//     }
//     child();
    
// }
// parent('chotu','hyd');
// console.log('end');


// console.log('start');

// function parent(){
//     let name = 'driti';
//     let city = 'nlr'
//     console.log(name);

//     function child(){
//         console.log(city);
        
//     }
//     child();
// }
// parent();
// console.log('end');

// FUNCTION CURRYING : IF WE ARE HAVING MULTIPLE FUNCTIONS INSTEAD OF CALLING ONE BY ONE WE CAN RETURN THE FUNCTION
// !------------- parent should not be shown in closure
// function outer(a){
//     let name = 'driti';

//     return function inner(b){
//         console.log(name);

//         return function innerMost(c){
//             console.log('i am innermost function');
//             console.log(a+b+c);
//             }
//         }
//     }
// outer(10)(30)(50);      //one() is outer func and () is inner function


// FUNCTION CURRYING WITH ARROW FUNCTION
let mult = a=>b=>c=>a*b*c;
let res = mult(3)(2)(2);
console.log(res
    
);




 
