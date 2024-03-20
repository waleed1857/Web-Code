// Declaring variable to grap element:
var whiteBtn = document.getElementById("whiteBtn");
var redBtn = document.getElementById("redBtn");
var grnBtn = document.getElementById("grnBtn");
var bluBtn = document.getElementById("bluBtn");
var blackBtn = document.getElementById("blackBtn");
var hexCode = document.getElementById("hex-code");
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
    document.getElementById("hex-code").innerHTML = "Hex Code:  #FFFFFF";
});
redBtn.addEventListener("click", function(){
    document.body.style.background = "red";  // to change background color
    document.getElementById("hex-code").innerHTML = "Hex Code:  #FF0000";
});
grnBtn.addEventListener("click", function(){
    document.body.style.background = "green";  // to change background color
    document.getElementById("hex-code").innerHTML = "Hex Code:  #00FF00";
});
bluBtn.addEventListener("click", function(){
    document.body.style.background = "blue";  // to change background color
    document.getElementById("hex-code").innerHTML = "Hex Code:  #0000FF";
});
blackBtn.addEventListener("click", function(){
    document.body.style.background = "black";  // to change background color
    document.getElementById("hex-code").innerHTML = "Hex Code:  #000000";
});

