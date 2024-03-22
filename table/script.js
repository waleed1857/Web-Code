var numBER = document.getElementById("num");
var btn = document.getElementById("operate");


numBER.addEventListener('input', function () {

	// Convert Input (text) to a number
	let valAsNumber = parseInt(num.value);

btn.addEventListener("click",function(){
        alert("This script display table!");
        for (let i=1 ; i<=10 ; i++)
        {
            console.log(valAsNumber + " x " + i + " = " + valAsNumber*i);
            document.write(valAsNumber + " x " + i + " = " + valAsNumber*i);
            document.write("<br>")
        }
    });

});




// Table:-
// for (let i=1 ; i<=10 ; i++)
// {
//     console.log(3 + " x " + i + " = " + 3*i)
// }