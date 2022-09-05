function myFunction() {
  var btn = document.getElementById('responsive-menu');
  var menu = document.getElementById('menu');
  const display = window.getComputedStyle(btn).display; 
  if (display === "flex"){
    btn.style.display = 'none';
    menu.style.filter = 'invert(1)';
    menu.style.width ='6.5%';
    menu.setAttribute("src", 'assets/image/logos/more.png');
  }
  else{
    btn.style.display = 'flex';
    menu.style.filter = 'invert(0)';
    menu.style.width ='5%';
    menu.setAttribute("src", 'assets/image/logos/close.png');
  }
}

let slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function carousel() {
  showSlides(slideIndex += 1);
  setTimeout(carousel, 7000); 
}


window.onload = function(){ 
  showSlides(1);

  let sleep = ms => {  
    return new Promise(resolve => setTimeout(resolve, ms));  
  };  
  sleep(7000).then(() => {  
    carousel();
  }); 
  var hideMe = document.getElementById('companiesmenu');
  const display1 = window.getComputedStyle(hideMe).display; 
       document.onclick = function(e){
          if(e.target.id !== 'companiesmenu' && display1==='flex'){
             hideMe.style.display = 'none';
          }
       };
}

function changeAbout(n){
  var ab = document.getElementById('ab');
  var we = document.getElementById('we');
  var om = document.getElementById('om');
  var about = document.getElementById('about');
  var whatwe = document.getElementById('whatwe');
  var miss = document.getElementById('mission');

  if (n === 1){
    about.style.display ='grid';
    whatwe.style.display ='none';
    miss.style.display ='none';
    ab.classList.add("active");
    we.classList.remove("active");
    om.classList.remove("active");
  }
  else if (n === 2){
    about.style.display ='none';
    whatwe.style.display ='grid';
    miss.style.display ='none';
    ab.classList.remove("active");
    we.classList.add("active");
    om.classList.remove("active");

  }
  else if (n === 3){
    about.style.display ='none';
    whatwe.style.display ='none';
    miss.style.display ='grid';
    ab.classList.remove("active");
    we.classList.remove("active");
    om.classList.add("active");

  }
}