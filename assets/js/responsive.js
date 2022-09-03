function myFunction() {
  var btn = document.getElementById('responsive-menu'); 
  const display = window.getComputedStyle(btn).display; 
  console.log(display);
  if (display === "flex"){
    btn.style.display = 'none';
  }
  else{
    btn.style.display = 'flex';
  }
}

function displaycompany() {
  
  var companies = document.getElementById('companiesmenu'); 
  const display1 = window.getComputedStyle(companies).display; 
  console.log(display1);
  if (display1 === "flex"){
    companies.style.display = 'none';
    console.log("off");
  }
  else{
    companies.style.display = 'flex';
    console.log("on");
  }
}


function darkmode() {
  var dark = document.getElementById('darkmode');
  var text = dark.innerHTML;
  const container = document.querySelectorAll(".header, .heading, .menu-items,.responsive-menu-list,.responsive-menu, p, body, .horizontal,.icon,.header-identity,.companies,.tagline,.companies-menu-list,.menu-items-active");

  if (text === 'Turn On Dark Mode'){
    dark.innerHTML='Turn On Light Mode';
    container.forEach(x => x.classList.toggle('dark'));
  }
  else{
    dark.innerHTML='Turn On Dark Mode';
    container.forEach(x => x.classList.toggle('dark'));
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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.onload = function(){ 
  showSlides(1);
  var hideMe = document.getElementById('companiesmenu');
  const display1 = window.getComputedStyle(hideMe).display; 
       document.onclick = function(e){
          if(e.target.id !== 'companiesmenu' && display1==='flex'){
             hideMe.style.display = 'none';
          }
       };
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      var dark = document.getElementById('darkmode');
      const container = document.querySelectorAll(".header, .heading, .menu-items,.responsive-menu-list,.responsive-menu, p, body, .horizontal,.icon,.header-identity,.companies,.tagline,.companies-menu-list,.menu-items-active");
        dark.innerHTML='Turn On Light Mode';
        container.forEach(x => x.classList.toggle('dark'));
    }
}