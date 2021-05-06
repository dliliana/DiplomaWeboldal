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
  document.getElementById("szemelyek1").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/tervgraf/ahmad_mais.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Ahmad Mais</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/tervgraf/bátori-kurucz_mária.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Bátori-Kurucz Mária</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/bohoni_beáta.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Bohoni Beáta</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/csankovszki_csilla.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Csankovszki Csilla</p> </figure>";

  document.getElementById("szemelyek2").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/tervgraf/dér_bernadett.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Dér Bernadett</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/tervgraf/fülöp_lászló_levente.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Fülöp László Levente</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/gacsályi_bíborka_lina.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Gacsályi Bíborka Lina</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/hollósy_mónika_andrea.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Hollósy Mónika Andrea</p> </figure>";

  document.getElementById("szemelyek3").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/tervgraf/hranyczka_stephanie.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Hranyczka Stephanie</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/tervgraf/hulicska_áron.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Hulicska Áron</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/irfan_khadija.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Irfan Khadija</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/kalmár_beatrix.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Kalmár Beatrix</p> </figure>";

 document.getElementById("szemelyek4").style.position= "absolute";
 document.getElementById("szemelyek4").style.width= "1148px";
 document.getElementById("szemelyek4").style.height= "293px";
 document.getElementById("szemelyek4").style.left= "680px";
 document.getElementById("szemelyek4").style.top= "1037px";

  document.getElementById("szemelyek4").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/tervgraf/karakas_lili.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Karakas Lili</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/tervgraf/károsi_zsófia.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Károsi Zsófia</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/kupcsik_tamás.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Kupcsik Tamás</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/németh_renáta.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Németh Renáta</p> </figure>";

  document.getElementById("szemelyek5").style.position= "absolute";
 document.getElementById("szemelyek5").style.width= "1148px";
 document.getElementById("szemelyek5").style.height= "293px";
 document.getElementById("szemelyek5").style.left= "680px";
 document.getElementById("szemelyek5").style.top= "1368px";

  document.getElementById("szemelyek5").innerHTML="<figure class=\"fingure\"> <img src=\"fotok/tervgraf/özyurt_berkant.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Özyurt Berkant</p> </figure> \
   <figure class=\"fingure\"><img src=\"fotok/tervgraf/révász_réka.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Révász Réka</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/sipos_fanni.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Sipos Fanni</p> </figure> \
  <figure class=\"fingure\"><img src=\"fotok/tervgraf/szegfű_liliána.jpg\" onclick=\"window.transitionToPage('szemely1BA.html')\" width=\"242.49\" height=\"242.49\"/>\
  <p class=\"diaknev\" onclick=\"window.transitionToPage('szemely1BA.html')\">Szegfű Liliána</p> </figure>";

  document.getElementById("menupontokfo").style.top="1750px";

}


function showTervGraf(){

  document.getElementById("szemelyek4").innerHTML=""
  document.getElementById("szemelyek5").innerHTML=""

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
