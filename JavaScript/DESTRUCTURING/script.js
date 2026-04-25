// creating arr
// let marks = [10,20,40,60];
// console.log(marks[2]);
// ! ARRAY DESTRUCTING
// ! GIVING NAME TO VALUES INSIDE ARRAY = DESTRUCTURING
// ! EXTRACTING ELEMENTS FROM ARRAY AND STORING INSIDE VARIABLES
// ! WE CAN GIVE ANY VARIABLE NAME
// !-- a=10 b=20 c=40
// let [a,b,c]= marks;
// console.log(c);
// TO SKIP SOME VALUES
// let[x,,z]=marks; //skipped 20
// console.log(z);


// ! OBJECT DESTRUCTURING
// ! EXTRACTING PROPERTIES FROM OBJ AND STORING INSIDE VARIABLE
// let person = {
//     name : 'driti',
//     city : 'nellore'
// }

// destructure the obj
// ! WE NEED TO GIVE SAME NAME FOR VARIABLE WHICH WE USED IN OBJECT PROPERTIES
// let{name,city} = person;  
// console.log(name);
// console.log(city);


// ! SPREAD AND REST (...)
// ! IF RHS = SPREAD
// ! IF LHS = REST
// let week1 = [10,20,30];
// let week2 = [40,50,60];
// SPREAD
// let combined = [...week1,...week2];
// console.log(combined);

// REST
// let marks = [10,30,50,40,70,80,80];
// let [a,b,...c] = marks;
// console.log(c);     //a=10 b=30 c=rest all

// ! IN OBJECT
// ! SPREAD
// let person = {
//     name : 'driti',
//     city : 'nellore'
// }
// let updatedPerson = {
//     ...person,
//     country : 'india'
// }
// console.log(person);
// console.log(updatedPerson);

// ! REST IN OBJECT
// let user = {
//     userName : 'driti',
//     role : 'admin',
//     salary : 9999
// }
// let {userName,...extra} = user;
// console.log(extra);   //role salary

// ! IN FUNCTION
// ! REST
// function add(a,b,c){    //NORMAL FUNCTION 
//     console.log(a+b+c);
//     }
// add(10,20,30,40,50,60,70);
// function add(a,b,...c){    //... in function declaration == REST
//     // console.log(a+b+c);
//     console.log(c);

//     let res = c.reduce((acc,cur)=>{
//         return acc+cur
//     },0);
//     console.log(res);
    
// }
// add(10,20,30,40,50,60,70);

// ! SPREAD 
// let marks = [10,20,30,50,90,80];
// function add(a,b,c,d,e,f){
//     console.log((a+b+c+d+e+f));
    
// }
// add(...marks);







