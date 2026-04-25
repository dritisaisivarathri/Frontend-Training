// STRING PROPERTY
// let userName='Vikas';
// console.log(userName);
// // to find length
// console.log(userName.length);

// // STRING METHODS
// // to make UPPERCASE
// console.log(userName.toUpperCase());

// // to make LOWERCASE
// let upperName = userName.toUpperCase();
// console.log(upperName);
// console.log(upperName.toLowerCase());

//to make REPLACE 
// replace==>replaces only first occurance of string
// let loc = "punjab";
// let replace = loc.replace('p','z');
// console.log(replace);

// replaceAll ==>replace all occurances
// let a = "india";
// let b = a.replaceAll('i','s');
// console.log(b);

// 09-04-26
// let info = ' i am from LPU '
// console.log(info.length);
// // remove spaces at end TRIMEND()
// let removedEnd = info.trimEnd()
// console.log(removedEnd);
// console.log(removedEnd.length);
// // remove spaces at start TRIMSTART()
// let startInfo = removedEnd.trimStart()
// console.log(startInfo);
// console.log(startInfo.length);
// // remove spaces start and end TRIM()
// let finalTrim = info.trim()
// console.log(finalTrim);
// console.log(finalTrim.length);

// let info = "i am from punjab india";
// console.log(info);

// // retreive particular part of string  SUBSTRING
// let part1 = info.substring(5,9); //from
// console.log(part1);

// let part2 = info.substring(10,16);
// console.log(part2);

// SLICE
// let info = "i am from punjab india";
// let part1 = info.slice(2,9); //start from 3 if we give 2
// console.log(part1);

// let part2=info.slice(-2);
// console.log(part2); //ai last 2 digits

// let part4 = info.slice(-5,-2);
// console.log(part4);

// //inside substrig we cant pass negative value
// let part3 = info.substring(-3);
// console.log(part3); 

// SPLIT:COVERT STRING TO ARRAY
// let info = "i am from punjab_india";
// console.log(info);
// let res=info.split("a");
// console.log(res);

// CONCAT : ADDING TWO STRINGS
let firstName = "Driti";
let lastName = " Sai";
let fullName = firstName.concat(lastName);
console.log(fullName);
























