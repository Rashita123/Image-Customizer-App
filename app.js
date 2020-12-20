var blurSelector = document.querySelector(".blur-selector");
var marginSelector = document.querySelector(".margin-selector");
var colorSelector = document.querySelector(".color-selector");
var image = document.querySelector(".image");
var root = document.querySelector(":root");

function blurManager(){
    root.style.setProperty('--blur-value',(blurSelector.value+"px"));
}


function MarginManager(){
    root.style.setProperty('--padding',marginSelector.value+"rem");
}


function ColorManager(){
    root.style.setProperty('--bg-color',colorSelector.value);
}


blurSelector.addEventListener("change",blurManager)
marginSelector.addEventListener("change",MarginManager)
colorSelector.addEventListener("change",ColorManager)
blurSelector.addEventListener("mousemove",blurManager)
marginSelector.addEventListener("mousemove",MarginManager)
colorSelector.addEventListener("mousemove",ColorManager)


var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};