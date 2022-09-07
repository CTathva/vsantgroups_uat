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
  var el = document.getElementById('swipezone');
  var head = document.getElementById('header');
  var stratergy = document.getElementById('stratergy');
  swipedetect(el, function(swipedir){
    // swipedir contains either "none", "left", "right", "top", or "down"
    if (swipedir==="left"){
      console.log('swiped lest');
      showSlides(slideIndex += 1);
    }
    if (swipedir==="right"){
      console.log('swiped right');
      showSlides(slideIndex -= 1);
    }
    if (swipedir==="up"){
      console.log('swiped down');
      window.scrollTo(stratergy.offsetLeft,stratergy.offsetTop);
    }
    if (swipedir==="down"){
      console.log('swiped up');
      window.scrollTo(head.offsetLeft,head.offsetTop);
    }
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

function swipedetect(el, callback){
  
  var touchsurface = el,
  swipedir,
  startX,
  startY,
  distX,
  distY,
  threshold = 30, //required min distance traveled to be considered swipe
  restraint = 100, // maximum distance allowed at the same time in perpendicular direction
  allowedTime = 300, // maximum time allowed to travel that distance
  elapsedTime,
  startTime,
  handleswipe = callback || function(swipedir){}

  touchsurface.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0]
      swipedir = 'none'
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      e.preventDefault()
  }, false)

  touchsurface.addEventListener('touchmove', function(e){
      e.preventDefault() // prevent scrolling when inside DIV
  }, true)

  touchsurface.addEventListener('touchend', function(e){
      var touchobj = e.changedTouches[0]
      distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime){ // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
              swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
          }
          else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
              swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
          }
      }
      handleswipe(swipedir)
      e.preventDefault()
  }, false)
}