var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

function kt(){
    var li = document.createElement('li');
    li.textContent = content.value;
    list.appendChild(li);

    content.value = "";
    content.focus();
}