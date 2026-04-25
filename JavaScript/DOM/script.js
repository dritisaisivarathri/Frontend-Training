// ! DOM [DOCUMENT OBJECT MODEL] ==> INSIDE BOM DOM IS THERE
// ! DOM IS INTERFACE PROVIDED BY BROWSER TO MANIPULATE THE HTML

// access the elements
// ! document.getElementById('') ==> returns individual element
// let h1 = document.getElementById('head1');
// console.log(h1);

// ! document.getElementsByClassName() => returns html collection of  multiple elements with same class name
// let parag = document.getElementsByClassName('para');
// console.log(parag);

// ! document.getElementsByTagName() => returns html collection of multiple elements by their tag name
// let p = document.getElementsByTagName('div');
// console.log(p);

// ! document.getElementsByName() => returns node list of multiple elements of that name
// let heading = document.getElementsByName('heading');
// console.log(heading);

// ! target according to css
//!document.querySelector() => returns individual element of first occurance
// ! we can target using id, class name, or tagname
// let para = document.querySelector('.para');
// console.log(para);

// ! target all the elements
// ! document.querySelectorAll() =>returns node list having all the occurences
// let para1 = document.querySelectorAll('.para');
// console.log(para1);

// ! create html element using js
// let div = document.createElement('div');
//  console.log(div);  //you cant see in element 
// add h1 tag
//  div.innerHTML='<h1>hello everone</h1>'
// add text
// div.innerText='<h2>Hlo everyone</h2>'
//! add to dom append()
// document.body.append(div);

// !example of creating p tag and adding h2 data inside it
// let p = document.createElement('p');
// p.innerText='<h2>My name is driti</h2>'
// document.body.append(p);
// console.log(p);

// ! DIFFERECE B/W APPEND() AD APPENDCHILD()
// let main = document.createElement('main');
// document.body.append(main); //appending main
//create section and article and append inside main
// let section = document.createElement('section');
// let article = document.createElement('article');
// main.append(section); //inside main appending section
// main.append(article); //inside main appending article
// section.append(article);  //inside section appending article

// main.appendChild(section,article); //accepts only 1 to append in dom
// main.append(section,article); //accepts multiple

// ! MANIPULATING CSS 
// let p = document.createElement('p');
// p.innerText = 'Good Afteroon....';
// document.body.append(p);
// p.style.backgroundColor = 'red';
// p.style.color = 'yellow';

// INSTAED OF USING STYLE SO MANY TIMES:
// ! classList
// !classList.add()
// add div in 22 line and dark style for it and My name is driti in body
// let container = document.querySelector('#container');
// document.body.classList.add('dark')

// !classList.remove()
// add class in line 19 and light style for it
// remove class
// document.body.classList.remove('light')

// !classList.toggle() : if class is there it will remove if class is ot there it will add
// add btton tag in 24 line and comment .light style and body in line 19
// let btn = document.getElementById('btn');
// btn.addEventListener('click',()=>{      //parameters of addEventListener :event,callback func, boolean value true or false(opt)
//     document.body.classList.toggle('dark')
//     btn.innerText = 'Light'
//     console.log(document.body.classList.contains('dark'));
//  })

// ! contains() : tells class is there or not
// console.log(document.body.classList.contains('dark'));

// ! to change dark=>light and light=>dark
// if classae = dark then show light
let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{      
    document.body.classList.toggle('dark')
    console.log(document.body.classList.contains('dark'));
    (document.body.classList.contains("dark"))?btn.innerText='Light' : btn.innerText = 'Dark';
 })


 






    



