// ! PROMISE
// ! PROMISE IS AN OBJECT WHICH REPRESENT EVENTUAL COMPLETION OR FAILURE OF AN ASYNCHRONOUS TASK
// !INSIDE PROMISE WE ARE HAVING 3 STATES PENDING,FULFILLED , REJECTED
// ! PENDING : INITIAL STATE

// !CREATE PROMISE
let myPromise = new Promise((res,rej)=>{            //resolve reject
       let pizzaReady = false
       ;
       
       if(pizzaReady){
        res('Pizza is ready')
       } else{
        rej('Pizza is not ready')    //if our promise is in rejected state then we need to handle the promise for that we have some methods
       }
})
console.log(myPromise);
// handling promise
myPromise.then(t=>console.log(t))   //when fulfilled
         .catch(c=>console.log(c))   //when rejected pizza is not ready is stored
         .finally(()=>console.log('i am finally'))
