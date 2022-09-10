window.onload = function(){ 
  var value=location.search.split('display=')[1];
  try{
    value = value.replaceAll("%20", " ");
  }
  catch{
    var url = 'gallery.html';
    document.location.href = url;
  }
  console.log('value'+ value);
  if ( value === null){
    var url = 'gallery.html';
    document.location.href = url;
  }
  else{
    document.getElementById('heading').innerHTML=value;
    load_image();
  }
  function load_image(){
    fetch("assets/image/gallery.json")
    .then(response => response.json())
    .then(json => load_image_data(json,value));
}
}
var array = [];
var i = 0;
var slide = 0;

function loaded(i){
  document.getElementsByClassName('loader')[i].style.visibility = 'hidden';
}

function load_image_data(json,value){
    var photomain = document.getElementById("photolayout");
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var item = json[key];
            if (item.Title === value){
                array.push({
                    title: item.Title,
                    url: item.URL
                });    
                const photodiv = document.createElement("div");
                var innerclass = '<div class="loader"></div><img onload="loaded('+i+')" src="'+item.URL+'"/>';
                photodiv.setAttribute("class", "photo-display");
                photodiv.setAttribute("onclick", "view_full_screen("+i+")");
                photodiv.innerHTML = innerclass;
                photomain.appendChild(photodiv);
                i++; 
            }
                    
        }
    }
 
}

function view_full_screen(i){
    slide = i;
    console.log(slide);
    var popup=document.getElementById('popup');
    popup.style.opacity = 1;
    popup.style.visibility='visible';
    var photodiv = document.getElementById("image_Display");
    photodiv.setAttribute("src", array[i].url);
}

function plusSlides(n) {
    var slideIndex = slide+n;
    if (slideIndex > array.length-1) {slideIndex = 0}    
    if (slideIndex < 0) {slideIndex = array.length-1}
    var photodiv = document.getElementById("image_Display");
    photodiv.setAttribute("src", array[slideIndex].url);
    slide = slideIndex;
    console.log('slide is ' +slide);
  }

  window.addEventListener('load', function(){
 
    var touchsurface = document.getElementById('image_Display'),
        startX,
        startY,
        dist,
        threshold = 150, //required min distance traveled to be considered swipe
        allowedTime = 200, // maximum time allowed to travel that distance
        elapsedTime,
        startTime
 
    function handleswipe(isrightswipe){
        if (isrightswipe)
            plusSlides(1);
        else{
          plusSlides(-1);
        }
    }
 
    touchsurface.addEventListener('touchstart', function(e){
        touchsurface.innerHTML = ''
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
 
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
 
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleswipe(swiperightBol)
        e.preventDefault()
    }, false)
 
}, false)