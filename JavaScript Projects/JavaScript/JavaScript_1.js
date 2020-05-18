var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "45px Arial";
ctx.strokeText("Smile, You're Beautiful!",10,50);


var d = document.getElementById("secondCanvas");
var ctx = d.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect(30, 30, 250, 200);

function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " is very delicious!";
    switch(Foods) {
        case "Bacon":
            Food_Output = "Bacon" + Food_String;
        break;
        case "French_Toast":
            Food_Output = "French_Toast" + Food_String;
        break;
        case "Waffles":
            Food_Output = "Waffles" + Food_String;
        break;
        case "Sausage":
            Food_Output = "Sausage" + Food_String;
        break;
        case "Pancakes":
            Food_Output = "Pancakes" + Food_String;
        break;
        default:
        Food_Output = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}


function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}