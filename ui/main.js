console.log('Loaded!');

//change the text

var element = document.getElementById("main-text");
element.innerHTML = "new value";

//move somethin...
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft = '150px';
};