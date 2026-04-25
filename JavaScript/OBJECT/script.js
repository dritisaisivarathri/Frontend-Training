// !-- OBJECT
// CREATING OBJECT
// STORES PROPERTIES AND METHODS IN KEY:VALE PAIR
let person = {
    name : 'driti',  //one property
    city : 'nellore',
    age : 21,
    isMarried : true,  //boolean
    skills : ['java','os','python'], //array
    greet:()=>{
        console.log("hello everyone"); //function
}
}
console.log(person);

// !-- access particular property
// . notation and [] notation
// console.log(person.name);
// console.log(person['city']);

// !-- EXECUTE GREET FUNCTION
// person.greet()

// !-- MODIFY THE CITY
// person.city='Punjab';
// console.log(person);

// !-- ADDING NEW PROPERTY
// person.Degree = 'B.Tech';
// console.log(person);

// !-- DELETE PROPERTY
// delete person.age;
// console.log(person);

// !-- SEAL: 
// Object.seal(person);
// we can modify
// person.name='vaibhav';
// console.log(person);
// we cant add new property
// person.Country = 'India';
// console.log(person);
// we cant delete property
// delete person.isMarried;
// console.log(person);

// !-- USER SHOLD NOT ADD DEL AND MODIFY
// Object.freeze(person);
// modify !--NO
// person.name='kasim';
// console.log(person);
// add     !-- NO
// person.country='India';
// console.log(person);
// del     !-- NO
// delete person.age;
// console.log(person);

// !-- TO CHECK OBJECT IS FREEZE OR NOT : ISFROZEN
// console.log(Object.isFrozen(person));

// !-- TO CHECK OBJECT IS SEALED OR NOT : ISSEALED
// console.log(Object.isSealed(person));

// !-- RETRIVES KEYS : OBJECT.KEYS
let keys = Object.keys(person);
console.log(keys);

// !-- RETRIVES VALUES : OBJECT.VALES
let val = Object.values(person);
console.log(val);

// !-- RETRIVES BOTH KEY AND VALUES : OBJECT.ENTRIES
let entry = Object.entries(person);
console.log(entry);















