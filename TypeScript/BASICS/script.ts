// export {};  //to not get error when both js and ts are opened
// console.log('Good morning');

// ! TYPE INFERENCE
// ! automatically ts detects which type of variable based on
// ! value which you stored inside variable
// let a = 10;
// a = 'driti' //this is not possible
// a=30; //this is possible
// console.log(typeof a);

// ! FOR NULL AND UNDEFINED AND ONLY DECLARATION TYPE IS [ANY] ==> SO THERE IS NO TYPE INFERENCE
// let marks = undefined;
// marks = 'a';
// let child = null;
// child = 1;
// child = 'a';
// let c ;

// ! TYPE ANNOTATION => EXPLICITLY WE NEED TO SAY DATA TYPE WE WANT USING ":" SYMBOL
// !on primitive vales
// let userName:string='driti';
// userName = 'lasya';
// console.log(userName);


// let marks:number=200;
// marks = '400'; //not possible
// marks = 100;   //possible
// console.log(marks);

// let isAvailable:boolean = true;
// isAvailable = false;
// isAvailable = ' driti'; ==>not possible
// console.log(isAvailable);

// ! on UNDEFINED AND NULL 
// let a:undefined = undefined;
// let b:null=null;
// a=10;
// b=30;  // not possible in TYPE ANNOTATION
// console.log(a);
// console.log(b);

// ! FUNCTION
// function add(a:number,b:string){
//     console.log(a+b);
// }
// add(10,'hello')   //1020 

// ! return type : WE ARE SAYING WHILE RETURNING WHAT DATA TYPE SHOULD BE THERE
// !FOR NUMBER
// function add(a:number,b:number):number{
//     return a+b;
// }
// let res = add(10,30);
// console.log(res);
// ! FOR VOID
// function add(a:number,b:number):void{
//     console.log(a+b);
// }
// let res = add(10,30);
// console.log(res);
// ! FOR STRING
// function add(a:number,b:number):string{
//     return 'driti';
// }
// let res = add(10,30);
// console.log(res);

// !---HOW MANY ARGUMENTS WE ARE TAKING THAT MANY PARAMETERS WE NEED TO GIVE
// function add(a:number,b:number,c:number):number{
//     return a+b+c;
// }
// add(10,20,10);

// ! MAKING PARAMETER AS OPTIONAL USE ?
// ! WE CAN GIVE OPTIONAL TO ONLY LAST VALUE
// function add(a:number,b:number,c?:number):number{
//     return a+b;
// }
// let res = add(10,20);
// console.log(res);

// ! variable should be string or number we use "|" => union
// function userId(a:number | string){
//     console.log(a);
// }
// userId('lasya')

// ! TYPE NARROWING : when you want to access something on particular data type like string or number
// function userId(a:number | string){
//     console.log(a);
//     if(typeof a==='string'){
//         console.log(a.toUpperCase());
//     } else{
//         console.log('not changing to uppercase');
//     }
// }
// userId('driti')
// userId(10)

// ! ARRAY
// ! TYPE INFERENCE
// let arr = [10,'driiti',true];
// console.log(arr);

// ! TYPE ANNOTATION
// let arr1:string[] = [10,20,30]  //not possible
// let arr1:string[] = ['dr','it','is'];
// console.log(arr1); //possible

// let mixArr:(string | number)[]=[10,'driti',20,'lasya'];
// console.log(mixArr);

// ! readonly property of array : make property as readonly so we cant change
// let tpl: string[] = ['lasya','driti','harsha'];
// tpl.push('rajini'); 
// console.log(tpl);

// let tpl: readonly string[] = ['lasya','driti','harsha'];
// tpl.push('rajini');  //not possible
// console.log(tpl);


// !TUPPLE : SAME LIKE ARRAY BUT FIXED NO OF ELEMENTS AND FOLLOWS ORDER
// let person:[string,number,boolean]=['driti',10,true];
// console.log(person);

// let person:[string,number,boolean]=[10,'driti',true];      //not possible because it follows order
//let person:[string,number,boolean]=['driti',10,true,false,34]; //not possible because of fixed size

// !OBJECT
// ! TYPE INFERENCE : JUST HOVER ON PERSON VARIABLE YOU CAN SEE TYPES
// let person = {
//     userName : 'driti',
//     marks:90
// }
// console.log(person);

// ! TYPE ANNOTATION:
// let person:{
//     userName:string;
//     marks:number;
//     address:{
//         city:string;
//         pin:number
//     }
// }={
//     userName:'driti',
//     marks:50,
//     address:{
//         city:'nellore',
//         pin:524004
//     }
// }
// console.log(person);

// !IF YOU WANT TO MAKE ANY THING OPTIONAL USE ?
// let person:{
//     userName:string;
//     marks:number;
//     address?:{
//         city:string;
//         pin:number
//     }
// }={
//     userName:'driti',
//     marks:50,
//     // address:{
//     //     city:'nellore',
//     //     pin:524004
//     // }
// }
// console.log(person);

// read-only so that we cant update that value
// let person:{
//     readonly userName:string;
//     marks:number;
//     address:{
//         city:string;
//         pin:number
//     }
// }={
//     userName:'driti',
//     marks:50,
//     address:{
//         city:'nellore',
//         pin:524004
//     }
// }
// console.log(person);
// console.log(person.userName='lasya'); //not possible to change as it is a read-only property

// ! TYPE ALIAS
// type id = number;
// let aadhar : id = 3456;
// console.log(aadhar);

// type id = (number | string);
// let aadhar : id = 'driti';
// console.log(aadhar);

// ! TYPE ALIAS IN UNION 
// type order = 'pending' | 'accepted' | 'rejected';
// let myOrder : order = 'accepted';
// console.log(myOrder);

// ! TYPE ALIAS IN ARRAY
// type marks = number[];
// let finalMarks:marks = [10,59,78,90];
// console.log(finalMarks); 

// ! TYPE ALIAS IN OBJECT
// we can use this same type for multiple objects
// type students = {
//     userName:string;
//     age:number;
//     isPass:boolean;
// }
// let vaibhav : students ={
//     userName:'vaibhav',
//     age:22,
//     isPass:true
// }
// let saumil:students ={
//     userName:'saumil',
//     age:24,
//     isPass:false
// }
// console.log(vaibhav);
// console.log(saumil);

// ! INTERSECTION WITH TYPE ALIAS
// type student = {
//     name:string;
// }
// type intern = {
//     salary:number;
// }
// combine both types into one
// type employee = student & intern;

// let newJoinee : employee = {
//     name:'driti',
//     salary:5000
// }
// console.log(newJoinee);

// ! UNKNOWN => similar like any but we need to use type narrowing
// let a : unknown;
// a=10;
// a='driti';
// a=true;
//a.toUpperCase //it will show'a' is of type 'unknown'
//use type narrowing
// if(typeof a === 'string'){
//     console.log(a.toUpperCase());
// } else{
//     console.log(a);  //it will take the latest value for variable a3
// }

// ! INTERFACE : DEFINE STRUCTURE OF THE OBJECT [only used for object]
// interface person{
//     userName:string,
//     marks:number,
//     address:{
//         country:string, 
//         pin:number
//     }
// }
// let driti : person = {
//     userName : 'driti',
//     marks : 30,
//     address:{
//         country:'india',
//         pin:5899
//     }
// }
// console.log(driti);

// !NEVER : when you know that function is infinite times and it will not execute
// function infinite():never{    
//     return 5;
// }