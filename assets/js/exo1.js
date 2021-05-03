let yearMin= 2020;
let yearMax= 2030;
let bissextile = false;

while (yearMin <= yearMax) {
    if (yearMin%400 == 0){
        bissextile = true;
    }
    else if (yearMin%100 == 0){
        bissextile = false;
    }
    else if (yearMin%4 == 0){
        bissextile = true;
    }
    else{
        bissextile = false;
    }

    if (bissextile == true){
        console.log('%c'+yearMin, 'color: #bada55');
    }
    else{
        console.log(yearMin);
    }

    yearMin++;
}
