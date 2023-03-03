
// rosdg = retail price / original price
var rosdg12 = 500.00;
var rosdg6 = 500.00;
var rosdg3 = 500.00;
var rosdg1 = 500.00;

// rsdg = on lazada price
var rsdg12 = 500.00;
var rsdg6 = 500.00;
var rsdg3 = 500.00;
var rsdg1 = 500.00;





// rssdg = savings price (auto calculated)
var rssdg12 = rosdg12 - rsdg12;
var rssdg6 = rosdg6 - rsdg6;
var rssdg3 = rosdg3 - rsdg3;
var rssdg1 = rosdg1 - rsdg1;






// DO NOT TOUCH //
let osdg12 = "S$" + rosdg12  ;
let osdg6 = "S$" + rosdg12 ;
let osdg3 = "S$" + rosdg12 ;
let osdg1 = "S$" + rosdg12 ;

let sdg12 = "S$" + rsdg12;
let sdg6 = "S$" + rsdg12;
let sdg3 = "S$" + rsdg12;
let sdg1 = "S$" + rsdg12;

let ssdg12 = "S$" + rssdg12;
let ssdg6 = "S$" + rssdg12;
let ssdg3 = "S$" + rssdg12;
let ssdg1 = "S$" + rssdg12;

document.getElementById("osdg1").innerHTML = osdg1;
document.getElementById("osdg3").innerHTML = osdg3;
document.getElementById("osdg6").innerHTML = osdg6;
document.getElementById("osdg12").innerHTML = osdg12;

document.getElementById("sdg1").innerHTML = sdg1;
document.getElementById("sdg3").innerHTML = sdg3;
document.getElementById("sdg6").innerHTML = sdg6;
document.getElementById("sdg12").innerHTML = sdg12;

document.getElementById("ssdg1").innerHTML = ssdg1;
document.getElementById("ssdg3").innerHTML = ssdg3;
document.getElementById("ssdg6").innerHTML = ssdg6;
document.getElementById("ssdg12").innerHTML = ssdg12;