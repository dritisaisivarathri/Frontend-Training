// ! EVENTS
// ! creating event
//see for onkeyup onkeydown onmouseover onmousedown onmousemove
//  function greet(){
//             alert('Welcome EveryOne')
// }
// ! PREVENTDEFAULT() : prevents the default action of the form
// let form = document.getElementById('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     confirm('are you sure');
// })

// ! access the input we wrote
// let form = document.getElementById('form');
// let inp = document.getElementById('userName')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     confirm('are you sure');
//     console.log(inp.value);
// })


// !if you want to show username also in ui ==> inp.value
//add hr and h2 tags
// let form = document.getElementById('form');
// let inp = document.getElementById('userName')
// let h2 = document.querySelector('#head2');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(inp.value);
//     let res = inp.value;
//     h2.innerText = `${res}`
// })

// for password
// add h3 and id = password for password type
// let form = document.getElementById('form');
// let inp = document.getElementById('password');
// let h3 = document.querySelector('#head3');
// form.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(inp.value);
//     let res = inp.value;
//     h3.innerText = `${res}`
// })

// ! if username is clicked line should come
//add another h2 and comment before h2
let form = document.getElementById('form');
let inp = document.getElementById('userName')
let h2 = document.querySelector('#head2');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(inp.value);
    let res = inp.value;
    h2.innerText = ` ${res}`
})
h2.addEventListener('click',()=>{
  h2.style.textDecoration = 'line-through'
})



