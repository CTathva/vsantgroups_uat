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
                var innerclass = '<img src="'+item.URL+'"/>';
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
