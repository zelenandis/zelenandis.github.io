// Ваш рост - ___ см!

/*
function rostmagiccalc() {
    var userrost = document.querySelector("#valuerost").value;

    if(userrost < 239){
        alert("Ваш рост - " + userrost + " см!")
    } else
    alert("Пишите правду! Ещё раз")

}
*/

function rostmagiccalc() {
    var userrost = document.querySelector("#valuerost").value;

    if(userrost < 239){
        if(userrost > 101){
            alert("Ваш рост - " + userrost + " см!")
        } else
        alert("Пишите правду! Ещё раз")
    } else
    alert("Пишите правду! Ещё раз")

}