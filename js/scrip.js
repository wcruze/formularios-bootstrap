var sliderh = document.getElementById("altura");
var outputc = document.getElementById("altc");
var outputm = document.getElementById("altm");
outputc.innerHTML = sliderh.value;
outputm.innerHTML = sliderh.value;

sliderh.oninput = function () {  
  outputc.innerHTML = this.value;
  outputm.innerHTML = this.value /100;
}

var sliderm = document.getElementById("masa");
var outputk = document.getElementById("mk");
var outputl = document.getElementById("ml");
outputk.innerHTML = sliderm.value;
outputl.innerHTML = sliderm.value;

sliderm.oninput = function () {
  outputk.innerHTML = this.value;  
  outputl.innerHTML =  Math. round((this.value * 2.2)*100)/100;
}