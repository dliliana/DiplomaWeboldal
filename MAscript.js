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
    } else {
      panel.style.display = "block";
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
    document.getElementById("oldalpanel").style.top = "0px";
  } else {
    document.getElementById("oldalpanel").style.top = "25.19%";

  }
}

function showPic(){
  document.getElementById("szemelyek1").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/acs_zsuzsanna.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Ács Zsuzsanna</p> </figure> \
   <figure class=\"fingure\"><img src=\"kepek2/boi_2.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Barta Dávid</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/biczó_marianna.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Biczó Marianna</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/czanik_georgina.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Czanik Georgina</p> </figure>";

  document.getElementById("szemelyek2").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/debreczeni_zsuzsanna.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Debreczeni Zsuzsanna</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/kiss_melinda.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Kiss Melinda</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/orosz_tina.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Orosz Tina</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/papai_daniel_gyorgy.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage(''szemely1MA.html')\">Papai Dániel György</p> </figure>";

  document.getElementById("szemelyek3").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/paulin_fanny.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Paulin Fanny</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/szabó_ildiko.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Szabó Ildikó</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/teleki_viola.jpg\" onclick=\"window.transitionToPage('szemely1MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1MA.html')\">Teleki Viola</p> </figure>";
}

function showTervGraf(){
  document.getElementById("szemelyek1").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/bácsi_gabriella.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Bácsi Gabriella</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/baumgartner_ildiko.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Baumgartner Ildikó</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/beke_matyas_laszlo.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Beke Mátyás László</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/grozdics_nikolett.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Grozdics Nikolett</p> </figure>";

  document.getElementById("szemelyek2").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/kétyi_balazs.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Kétyi Balázs</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/korda_zoltan_tamas.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Korda Zoltán Tamás</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/némedi_varga_reka.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Némedi-Varga Réka</p> </figure> \
  <figure class=\"fingure\"><img src=\"kepek2/boi_1.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Szilágyi András</p> </figure>";

  document.getElementById("szemelyek3").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/taskin_aysu.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Taskin Aysu</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/valentini_nikolett.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Valentini Nikolett</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/zsidek_barbara.jpg\" onclick=\"window.transitionToPage('szemely2MA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely2MA.html')\">Zsidek Barbara</p> </figure>";
}



