// var clkBtn = document.querySelector(".operation");

// var newClr = document.querySelector(".right-container").style.backgroundColor = 'green';
// newClr.style.background = 'green';


var clkBtn = document.getElementById("operation");
var newClr = document.getElementById("right-container");

clkBtn.addEventListener('click',function(){
    // alert("This event will change color of right container!");
    newClr.style.backgroundColor = 'green';
});

clkBtn.addEventListener('click',function(){
    // alert("This event will change color of right container!");
    newClr.style.backgroundColor = 'black';
});

