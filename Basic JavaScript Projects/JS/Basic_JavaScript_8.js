function full_Sentence() {
    var part_1 = "I hope ";
    var part_2 = "we don't lose ";
    var part_3 = "the Football season ";
    var part_4 = "because of Covid-19";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Work hard, play hard is how Scott likes to get down!";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function my_Function() {
    var str = "is the best!";
    var res = str.toUpperCase();
    document.getElementById("big").innerHTML = res;
}

function this_Function() {
    var str = "Visit ESPN.com!";
    var n = str.search("ESPN.com");
    document.getElementById("demo").innerHTML = n;
}

function string_Method() {
    var X =128;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 69324.54269975932443;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function secondFunction() {
    var num = 8.69823;
    var n = num.toFixed(3);
    document.getElementById("recall").innerHTML = n;
}

function valueFunction() {
    var str = "What it do, World?";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}