// Initializing value:
var count = 0;

//Grapping objects:
var disBtn = document.getElementById("count");
var resBtn = document.getElementById("re");
var decBtn = document.getElementById("decCount");
var display = document.getElementById("disPlay");

// Event for increment:
disBtn.addEventListener('click',function(){
    count = count + 1;
    document.getElementById("disPlay").innerHTML = count;
    console.log(count)
});

// Event for reset:
resBtn.addEventListener('click',function(){
    count = 0;
    document.getElementById("disPlay").innerHTML = count;
    console.log(count)
    
});

// Event for decrement:
decBtn.addEventListener('click',function(){
    if(count > 0)
    {
        count = count - 1;
        document.getElementById("disPlay").innerHTML = count;
        console.log(count)
    }
});
