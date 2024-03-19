// Initializing value:
var count = 0;

//Grapping objects:
var disBtn = document.getElementById("disPlay");
var resBtn = document.getElementById("re");
var decBtn = document.getElementById("decCount");

// Event for increment:
disBtn.addEventListener('click',function(){
    count = count + 1;
    document.getElementById("re").innerHTML = count;
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
    count = count - 1;
    document.getElementById("disPlay").innerHTML = count;
    console.log(count)
});