function My_First_Function() {
    var str="The text should be pink. I hope this actually works!";
    var result=str.fontcolor("pink");
    document.getElementById("Pink_Text").innerHTML=result;
}

function myFunction() {
    var sentence="I am learning";
    sentence+=" a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence;
}