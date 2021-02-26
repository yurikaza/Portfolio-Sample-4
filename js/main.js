function navSlide() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-list") {
        x.className += " active";
    } else {
        x.className = "nav-list";
    }
}

function burger() {
    var x = document.getElementById("hamburger");
    if (x.className === "burger") {
        x.className += " changedeg";
    } else {
        x.className = "burger";
    }
}

function left(){ 
    document.getElementById('myImage') 
    .src="../images/illustration-features-tab-1.svg"; 
    document.getElementById('message') 
    .innerHTML="Bookmark in one click";
    document.getElementById('para')
    .innerHTML="Organize your bookmarks however you like. Our simple drag-and-drop interface  gives you complete control over how you manage your favourite sites";
} 
function middle(){ 
    document.getElementById('myImage') 
    .src="../images/illustration-features-tab-2.svg"; 
    document.getElementById('message') 
    .innerHTML="Intelligent search"; 
    document.getElementById('para')
    .innerHTML="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."; 
   
} 
function right(){
    document.getElementById('myImage') 
    .src="../images/illustration-features-tab-3.svg"; 
    document.getElementById('message') 
    .innerHTML="Share your bookmarks"; 
    document.getElementById('para')
    .innerHTML="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
} 

/*
function color1() {
    document.getElementById('left').style.color = 'black';
}
function color2() {
    document.getElementById('middle').style.color = 'red';
}
function color3() {
    document.getElementById('right').style.color = 'red';
 
}
*/


var colorChange = ["#fff", "#000", "#333", "#351"];
var i = 0;
document.getElementById("right").addEventListener("click",
 function(){
     i = i < color.lenght ? ++i : 0;
     document.querySelector("body").style.background = color[i]
 }); 



 var acc = document.getElementsByClassName("fqabuttons");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}