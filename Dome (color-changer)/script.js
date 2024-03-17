// Declaring variable to grap element:
var whiteBtn = document.getElementById("whiteBtn");
var redBtn = document.getElementById("redBtn");
var grnBtn = document.getElementById("grnBtn");
var bluBtn = document.getElementById("bluBtn");
var blackBtn = document.getElementById("blackBtn");
// var myBody = document.body;


// Styling button's background:
whiteBtn.style.background = "white";
redBtn.style.background = "red";
grnBtn.style.background = "green";
bluBtn.style.background = "blue";
blackBtn.style.background = "black";


// Event listner to perform operation
whiteBtn.addEventListener("click", function(){
    document.body.style.background = "white";  // to change background color
});
redBtn.addEventListener("click", function(){
    document.body.style.background = "red";  // to change background color
});
grnBtn.addEventListener("click", function(){
    document.body.style.background = "green";  // to change background color
});
bluBtn.addEventListener("click", function(){
    document.body.style.background = "blue";  // to change background color
});
blackBtn.addEventListener("click", function(){
    document.body.style.background = "black";  // to change background color
});


