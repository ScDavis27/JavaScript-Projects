window.alert(Math.random()*100);

var X=5;
X ++;
document.write(X);

var Y=10;
Y --;
document.write(Y);


function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML="2+2=" +addition;
}

function subtract_Function() {
    var subtraction = 2-2;
    document.getElementById("subtract").innerHTML="2-2=" +subtraction;
}

function multiplication() {
    var simple_Math= 6*8;
    document.getElementById("multiply").innerHTML="6*8=" +simple_Math;
}

function modulus_Operator() {
    var simple_Mathematics= 50 % 6;
    document.getElementById("modulus").innerHTML= "When you divide 50 by 6 you have a remainder of: " +simple_Mathematics;
}

var a = 50;
var b = 6;
var z = a % b;
document.getElementById("modulus").innerHTML = z;



