// 
let count = 0;
let display = document.getElementById('count-display');

// ! INCREMENT BUTTON
document.getElementById('incr').addEventListener('click',function(){
    count += 1;
    display.innerText = `count = ${count}`;
});

// ! DECREMENT BUTTON
document.getElementById('decr').addEventListener('click',function(){
    count -= 1;
    display.innerText = `count = ${count}`;
});

// ! RESET BUTTON
document.getElementById('reset').addEventListener('click',function(){
    count = 0;
    display.innerText = `count = ${count}`;
});

