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
