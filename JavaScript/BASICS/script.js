// printing statement
// console.log('Driti Sai');

// creating variable in js
//var, let, const ==> keywords
// var a = 10;
// var username = 'Chotu';
// let b = 20;

// declaration
// FOR VAR
//var a; //only declaration is possible
//a=10;  //initialization in diff line is possible
//console.log(a);

//a=20; //re-initialize is possible
//console.log(a);

//var a = 30;  //re-declaration is also possible
//console.log(a);

// FOR LET
//let a; //only declaration is possible
//a=10;  //initialization in diff line is possible
//console.log(a);

//a=20;  //re-initialization is also possible
//console.log(a);

//let a=30; //re-declaration is not possible

// FOR CONST
//const a; //only declaration is not possible
//const a = 10;

// a=20; //re-iitializatio not possible
//console.log(a);

//const a = 10; //re-declaration is not possible

//difference according to scope

//FOR VAR
// inside block
// {
//     var a = 10;
// }
// console.log(a);

// FOR LET
// only accessible inside block not outside block
// {
//     let a = 10;
// }
// console.log(a);

//FOR CONST
// only accessible inside block not outside block
// {
//     const a = 10;
// }
// console.log(a);

// SCRIPT SCOPE
// we can access b var anywhere inside script
// let b = 20;
// {
//     console.log(b); //output:20
// }

// FUNCTION SCOPE
//creating a function
// function add(){
//     var a = 10;
// }
// add();
// console.log(a);


//DATA TYPES
//NUMBER
//var a = 10;

//STRING
// let userName='Vikas';
// const college="LPU"
// // string interpolation==> accessing var names that can be done only using back ticks ``
// let details = `I am  ${userName} from college ${college}`
// console.log(details);

// highlight the LPU
//in single and double quote we cant go to next line but in back ticks`` we can go
// let details='i am from "LPU" punjab';
// let details="i am from 'LPU' punjab";
// console.log(details);


//BOOLEAN
// let isMarried = true;
// console.log(isMarried);
// // to check data type we use typeof
// console.log(typeof isMarried);

// UNDEFINED
// let a = undefined;
// console.log(typeof a); //output undefined

// NULL
// let b = null;
// console.log(b); //output null
// console.log(typeof b); //output object because it is one of bug in js

//BIGINT
// let salary = 999999999999999999999n;
// console.log(salary);
// console.log(typeof salary);

// NON-PRIMITIVE DATA TYPE
// ARRAY
// let arr=['vikas',18,true];
// console.log(arr);

//OPERATORS IN JS
// let a = 10;
// let b = 20;
// let res = a += b;
// console.log(res);

// let a = 10;
// let b = '10';
// console.log(a==b); //output true because == checks value present 
// console.log(a===b); //output false because === checks value as well as type

// CONDITIONAL STATEMENTS












