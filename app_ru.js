var hrs = new Date().getHours()
var greet

if (hrs >= 0 && <= 4){
    greet = "ДОБРОЙ НОЧИ"
}
if (hrs >4 && <= 11){
    greet = "ДОБРОЕ УТРО"
}
if (hrs > 11 && hrs <= 17){
    greet = "ДОБРЫЙ ДЕНЬ"
}
if (hrs > 17 && hrs <= 21){
    greet = "ДОБРЫЙ ВЕЧЕР"
}
if (hrs > 21){
    greet = "ДОБРОЙ НОЧИ"
}
document.write(greet);
