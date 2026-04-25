function add() {
    let text = document.getElementById("input").value;   //taking value from user

    let li = document.createElement("li");   //creating list
    li.innerText = text;       //adding user input to this list

    // click = strike
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    // remove button
    let btn = document.createElement("button");
    btn.innerText = " remove-item";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("list").appendChild(li);
    input.value = "";
}