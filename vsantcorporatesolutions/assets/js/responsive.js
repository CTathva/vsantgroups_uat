let slideIndex = 1;
let snapslideIndex = 1;

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
  console.log('pressed');
  showSlides(slideIndex += n);
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
  // slides[slideIndex-1].addEventListener('click',);
  dots[slideIndex-1].className += " active";
}
function carousel() {
  showSlides(slideIndex += 1);
  setTimeout(carousel, 7000); 
}

function snapplusSlides(n) {
  snapshowSlides(snapslideIndex += n);
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
  setTimeout(snapcarousel, 10000); 
}


window.onload = function(){ 
  var sli = document.getElementsByClassName("mySlides");
  sli[slideIndex-1].style.display ='block';
  showSlides(1);


  let sleep = ms => {  
    return new Promise(resolve => setTimeout(resolve, ms));  
  };  
  sleep(7000).then(() => {  
   carousel();
  });

  var x = window.matchMedia("(max-width: 420px)")
  if(x.matches===true){
    
    snapshowSlides(1);
    
    let snapsleep = ms => {  
      return new Promise(resolve => setTimeout(resolve, ms));  
    };  
    snapsleep(10000).then(() => {  
      snapcarousel();
    });

  }

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

