var div = document.getElementById('background-pop');
var close = document.getElementById('close-button');  
function show(){    
    div.style.display = "block";
}
close.onclick = function close() {  
    div.style.display = "none";
}
window.onclick = function close(e) {
    if (e.target == div) {
        div.style.display = "none";
    }
}