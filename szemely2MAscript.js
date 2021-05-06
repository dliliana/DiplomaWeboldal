var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");


    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("accordion").innerHTML = "Leírás +";
    } else {
      panel.style.display = "block";
      document.getElementById("accordion").innerHTML = "Leírás -";
    }
  });
}

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("informacio").style.top = "0px";
  } else {
    document.getElementById("informacio").style.top = "25.19%";

  }
}



var modal = document.getElementById("myModal");

var imgs = document.getElementsByClassName("myImg");
for (img in imgs){
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  imgs[img].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}