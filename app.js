var hrs = new Date().getHours()
var greet

if (hrs <= 11){
    greet = "GOOD MORNING"
}
if (hrs > 11 && hrs <= 17){
    greet = "GOOD DAY"
}
if (hrs > 17 && hrs <= 21){
    greet = "GOOD EVENING"
}
if (hrs > 21){
    greet = "GOOD NIGHT"
}
document.write(greet);
