function changeTab(n){
    var events = document.getElementById('events');
    var skills = document.getElementById('skill');
    var eventmain = document.getElementById('eventmain');
    var skillsmain = document.getElementById('skillsmain');

    if (n === 1){
        eventmain.style.display ='block';
        skillsmain.style.display ='none';
        events.classList.add("active");
        skills.classList.remove("active");
    }

    else if (n === 2){
        eventmain.style.display ='none';
        skillsmain.style.display ='block';
        events.classList.remove("active");
        skills.classList.add("active");
    }
  }