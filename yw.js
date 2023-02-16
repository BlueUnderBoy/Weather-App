var msg = document.querySelector(".msg");
function hide() {
    msg.remove();
}

var tempt1= document.querySelector(".tempt1");
var tempt2= document.querySelector(".tempt2");

var temptm1= document.querySelector(".temptm1");
var temptm2= document.querySelector(".temptm2");

var tempm1= document.querySelector(".tempm1");
var tempm2= document.querySelector(".tempm2");

var temptu2= document.querySelector(".temptu2");
var temptu1= document.querySelector(".temptu1");

function chooseTemp(element) {
    if (element.value == "°C") {
    tempt1.innerText = "17°";
    tempt2.innerText = "3°"
   temptm1.innerText = "20°"
   temptm2.innerText = "5°"
    tempm1.innerText = "22°"
    tempm2.innerText = "8°"
   temptu1.innerText = "19°"
   temptu2.innerText = "7°"
        }
    else if (element.value == "°F") {
    tempt1.innerText = "63°"
    tempt2.innerText = "37°"
   temptm1.innerText = "68°"
   temptm2.innerText = "41°"
    tempm1.innerText = "71°"
    tempm2.innerText = "47°"
   temptu1.innerText = "66°"
   temptu2.innerText = "44°"
    }
}