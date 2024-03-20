// declaring var to grap the target (right-side)
var BUTTON = document.getElementById("logic");
var newClr = document.getElementById("right-container");
var rightSide = "55%";

//
BUTTON.addEventListner('click',function(){
    alert("color:");
    newClr.style.background = 'red';
    newClr.style.right = rightSide;
});

// newClr.style.background = 'red'
// newClr.style.right = rightSide;
