// ! SYNCHRONOUS 
// console.log('start');
// for(let i = 0 ; i <=5; i++){
//     console.log(i);
    
// }
// console.log('end');

// ! ASYNCHRONOUS 
// ! setTimeout() : accepts call back function and timeout in milli seconds, executes only one time
// console.log('start');

// setTimeout(()=>{
//     console.log('hello');
    
// },2000);     //2000 means 2 sec
// console.log('end');

// ! setInterval(): accepts call back function and timeout in milli seconds, executes multiple  times
// console.log('start');

// setInterval(()=>{
//     console.log('hello');
    
// },2000);
// console.log('end');

// ! to stop that setInterval
// ! clearInterval()
// let greet = setInterval(()=>{
//     console.log('hello---');
    
// },1000)

// setTimeout(()=>{
//     clearInterval(greet)
// },3000)        //it will stop after 3 sec

// let greet = setInterval(()=>{
//     console.log('Running...');
    
// },1000);

// setTimeout(()=>{
//     clearInterval(greet);
// },5000);

// ! clearTimeout()
// let id = setTimeout(()=>{
//     console.log('Runningg....');
// },2000);
// clearTimeout(id);  //cancel this operation before its executes

// ! 13-04-26
// ! another way to make asynchronous
// ! async & await  ==> both are keywords
// !aynsc ==> async function always returns a Promise
// ! await => pause the executing while fetching or converting
// ! await can be used only in async function
// async function getData() {
//     let resp = await fetch("https://fakestoreapi.com/products"); //if we will not use await then if we print ,a promise object will be created with pending state
//     console.log(resp);
    // coverting response object to java script object
//     let data = await resp.json();
//     console.log(data);

//     console.log(data[3]);
//     console.log(data[3].category);
//     console.log(data[3]['title']);
// }
// getData()

// !JSON [JAVASCRIPT OBJECT NOTATION]
// let person = {
//     userName :'vaibav',
//     age:19,
//     isMarried : true,
//     skills : ['js','ts','reactJs'],
//     greet : function(){
//         console.log('hello all...');
        
//     },
//     address : {
//         pin : 413467,
//         country : 'india'
//     },
//     kids : undefined,
//     ex : null,
// salary : 8999945677n         BIGINT CANNOT BE CONVERTED , FUNCTION CANNOT, UNDEFINED CANNOT
// };
// console.log(person);

// converting java obj to json
// let res = JSON.stringify(person);
// console.log(res);

// console.log(typeof(res));  //DATA TYPE OF JSON ==> STRING

// converting json to java
// let final = JSON.parse(res);
// console.log(final);





 


