// printing statement
console.log('Driti Sai');

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
// let details='i am from "LPU" punjab';
//in single and double quote we cant go to next line but in back ticks`` we can go
let details="i am from 'LPU' punjab";
console.log(details);






