var btn = document.getElementById("btn");
var p = document.getElementById("paragraph");

btn.onblur = function(){
    if(p.style.backgroundColor == "") p.style.backgroundColor = "red";
    else p.style.backgroundColor = "";
}