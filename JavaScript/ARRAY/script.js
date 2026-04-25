// ARRAY IN JS
// MUTTABLE IN NATURE
// let subject=['java',"OS",'cloud',100,80,40];
// console.log(subject);
//!-- accessing through index
// console.log(subject[3]);
//!-- modifying array
// subject[4]=600;
// console.log(subject);

// !--PROPERTIES
// !--LENGTH
// console.log(subject.length);

// !-- METHODS OF ARRAY
// let marks=[40,50,70,80];
// console.log(marks);

// !--  adding element at last : PUSH
// marks.push(100);
// console.log(marks);

// !-- removing last element : POP
// marks.pop();
// console.log(marks);

// !-- adding element at first : UNSHIFT
// marks.unshift('100');
// console.log(marks);

// !-- removing elements at first: SHIFT
// marks.shift();
// console.log(marks);

// !-- taking particular part of array : SLICE
// slice:not modifying original array === returning new array
// let marks=[40,50,70,80];
// console.log(marks);

// let part1 = marks.slice(1,3);
// console.log(part1);

// let part2 = marks.slice(-2);
// console.log(part2);

// !-- SPLICE : REMOVING AND REPLACE ELEENTS
// let marks = [40,50,70,80,90,100,110];
// console.log(marks);

// let final = marks.splice(1,3,1,2,3);
// console.log(final);
// console.log(marks);

// CREATING MULTIPLE ARRAYS
// let students=['sanath','vishwanth','tanmoy','vaibhav','subodh'];
// let marks = [-1,101,42,0,3];
// !-- CONCATINATE ARRAYS
// let allData = students.concat(marks);
// console.log(allData);

// !-- REVERSING A STRING AND JOIN
// let userName = 'Khasim Basha';
// let res = userName.split('').reverse().join('');
// console.log(res);

// !-- MAP: iterate through array and do some modification
//!--  ACCEPTS CALL BACK FUNC
//!--  MAP WILL RETURN SAME NO OF ELEMENTS
// let marks = [40,50,60,70,80];
// marks.map((m)=>{
//     console.log(m);
// })
// marks.map(m=>console.log(m)) //reducing arrow func

// let marks = [40,50,60,70,80];
// console.log(marks);
// marks.map(m=>console.log(m+10));
// console.log(marks);

// !--FILTER
// !--FILTER WILL RETURN NO OF ELEMENTS BASED ON CONDITION
// MARKS > 70
// let marks = [40,50,60,70,80];
// console.log(marks);

// let toppers = marks.filter(a=>a>=70);
// console.log(toppers);

// !-- REDUCE : REDUCING THE ELEMENTS
// !-- O/P WILL BE ONE ELEMET
// acc=> accumalator cur=> current value
// it is mandotory to have 2 values
// let marks = [40,50,60,70,80];
// let totalMarks = marks.reduce((acc,cur)=>{
//     return acc+cur;
// },0); //!-- 0 is initial vale for accmalator
// console.log(totalMarks);

// !-- CHANGING TYPE OF ARRAY
// !-- ARRAY.ISARRAY()
// let marks = [40,50,60,70,80];
// console.log(typeof(marks)); //object
// let res = Array.isArray(marks);
// console.log(res);           //true





























