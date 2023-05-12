// navbar
var bool = true;
function menu(){
  if (bool == true) {
    let menu = document.getElementsByClassName("nav-bar-menu");
    for (var i=0;i<menu.length;i+=1){
      menu[i].style.display = 'block';
    }
    bool = false;
    
  }else{
    let menu = document.getElementsByClassName("nav-bar-menu");
    for (var i=0;i<menu.length;i+=1){
      menu[i].style.display = 'none';
    }
    bool = true;
  }

}
$(".nommenu").hide()
let bol = true;
function down() {
  $(".nommenu").toggle()
  if (bol == true) {
    $(".down").css("transform" , "rotate(90deg)");
    bol = false;
  }else if (bol == false) {
    $(".down").css("transform" , "rotate(0deg)");
    bol = true;
  }
}

// slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
