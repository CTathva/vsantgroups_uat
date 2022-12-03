let slideIndex = 1;
let snapslideIndex = 1;
var timerHandle, timerSnapHandle;

function resetTimer() {
  window.clearTimeout(timerHandle);
  timerHandle = setTimeout(carousel, 7000); 
}
function resetSnapTimer() {
  window.clearTimeout(timerSnapHandle);
  timerSnapHandle = setTimeout(snapcarousel, 7000); 
}

function myFunction(a) {
  var btn = document.getElementById('responsive-menu');
  var menu = document.getElementById('menu');
  const display = window.getComputedStyle(btn).display; 
  if (a==='home'){
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
  else{
    if (display === "flex"){
      btn.style.display = 'none';
      menu.style.filter = 'invert(9%) sepia(15%) saturate(2214%) hue-rotate(168deg) brightness(92%) contrast(90%)';
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
  
}



function plusSlides(n) {
  showSlides(slideIndex += n);
  resetTimer();
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
  timerHandle = setTimeout(carousel, 7000); 
}



function snapplusSlides(n) {
  snapshowSlides(snapslideIndex += n);
  resetSnapTimer();

}
function snapshowSlides(n) {
  let i;
  let snapslides = document.getElementsByClassName("snap-card");
  let snapdots = document.getElementsByClassName("snap-dot");
  if (n > snapslides.length) {
    snapslideIndex = 1
  }    
  if (n < 1) {
    snapslideIndex = snapslides.length
  }
  for (i = 0; i < snapslides.length; i++) {
    snapslides[i].style.display = "none";  
  }
  for (i = 0; i < snapdots.length; i++) {
    snapdots[i].className = snapdots[i].className.replace(" active", "");
  }
  snapslides[snapslideIndex-1].style.display = "block";  
  snapdots[snapslideIndex-1].className += " active";
}
function snapcarousel() {
  snapshowSlides(snapslideIndex += 1);
  timerSnapHandle = setTimeout(snapcarousel, 7000); 
}


window.onload = function(){ 
  
  var sli = document.getElementsByClassName("mySlides");
  sli[slideIndex-1].style.display ='block';
  showSlides(1);
  timerHandle = setTimeout(carousel,7000);

  var x = window.matchMedia("(max-width: 420px)")
  if(x.matches===true){
    snapshowSlides(1);
    timerSnapHandle = setTimeout(snapcarousel,7000);
  }

}


