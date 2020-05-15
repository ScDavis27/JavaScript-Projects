var X = 69;
document.write(X);
{
    let X = 27;
    document.write("<br>" + X );
}
document.write("<br>" + X);


function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction() {
    var str = "Hello, what's up world?!"
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Picture = []
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "running";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "wagging";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " +
        Dog_Picture[1] + ".";
}

function constant_function() {
    const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1000";
    Musical_Instrument.brand = "Fender";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.brand + "&nbsp" +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function breakFunction() {
    var text = "";
    var i;
    for(i = 0; i < 5; i++) {
        if (i === 3) {
            break;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function funFunction() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
        if (i === 3) {
            continue;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}

let car = {
    make: "Audi ",
    model: "A4 ",
    year: "2013 ",
    color: "black ",
    description : function() {
        return "The badass car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();