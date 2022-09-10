function calldisply(a) {
    var url = 'display.html?display='+a;
    document.location.href = url;
}
function loaded(i){
    document.getElementsByClassName('loader')[i].style.visibility = 'hidden';
}

window.onload = function(){ 

    function load_image(){
      fetch("assets/image/gallery.json")
      .then(response => response.json())
      .then(json => load_image_data(json));
  }
  
  load_image();
    
}

function load_image_data(json){
    var array = [];
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var item = json[key];
            array.push({
                title: item.Title,
                url: item.URL
            });            
        }
    }
    const unique = [...new Set(array.map(item1 => item1.title))];
    var arrayLength = unique.length;
    var photomain = document.getElementById("photolayout");
    for (var i = 0; i < arrayLength; i++) {
        var result = array.find(name => name.title === unique[i]);
        const photodiv = document.createElement("div");
        var innerclass = '<div class="loader"></div><img onload="loaded('+i+')" src="'+result.url+'"/><h2>'+unique[i]+'</h2>';
        photodiv.setAttribute("class", "photo-card");
        photodiv.setAttribute("onclick", "calldisply('"+unique[i]+"')");
        photodiv.innerHTML = innerclass;
        photomain.appendChild(photodiv);
    }
   
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
            touchsurface.innerHTML = 'Congrats, you\'ve made a <span style="color:red">right swipe!</span>'
        else{
            touchsurface.innerHTML = 'Condition for right swipe not met yet'
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
