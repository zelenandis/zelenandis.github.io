var hrs = new Date().getHours()
var greet

if (hrs <= 11){
    greet = "ДОБРОЕ УТРО"
}
if (hrs > 11 && hrs < 18){
    greet = "ДОБРЫЙ ДЕНЬ"
}
if (hrs > 18 && hrs <= 21){
    greet = "ДОБРЫЙ ВЕЧЕР"
}
if (hrs > 21){
    greet = "ДОБРОЙ НОЧИ"
}
document.write(greet);
