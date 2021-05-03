let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

for (let count = 0; count <=6; count++){
    if (count >= 5){
        console.log("%c"+days[count], "font-weight:bold; font-size:15px;");
    }
    else{
        console.log(days[count]);
    }  

}