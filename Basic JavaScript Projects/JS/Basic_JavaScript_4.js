function my_Dictionary() {
    var Car = {
        Make:"Audi",
        Model:"A4",
        Color:"Black",
        Year:2013,
        Style:"Sedan"
    };
    delete Car.Style
    document.getElementById("Dictionary").innerHTML = Car.Style;
    document.getElementById("Dictionary").innerHTML = Car.Make;
}

