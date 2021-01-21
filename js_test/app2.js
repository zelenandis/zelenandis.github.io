/*
var totalInventory = 700,
numberPurchased = 200,
numberSales = 0

while (totalInventory > numberPurchased){
    totalInventory = totalInventory - numberPurchased
    numberSales++
}

document.writeln("запас позволяет обеспечить" + numberSales + "партий товаров")
*/

/*
var resultSale = 0

function displaySalesResult(stock, monthSale){
    if (!stock){
        alert("Заполните оба поля")
    }
    if (!monthSale){
        alert("Заполните оба поля")
    }
    while (stock > monthSale){
        stock = stock - monthSale
        resultSale++
    }
    alert("Вашего товара хватит на " + resultSale + " месяцев продаж")

    console.log(stock);
}

displaySalesResult();
*/

/*
function testExample(a){
    var greeting = "Hi my name is " + a;
    return greeting;
}

console.log(testExample(name));
*/

function salesculc(){
    var stock = parseInt(document.querySelector("#userStock").value);
    var monthSale = parseInt(document.querySelector("#userMonthSale").value);
    var resultSale = 0;

    while(stock > monthSale){
        stock = stock - monthSale
        resultSale++
    }

    document.querySelector("#salesres").innerHTML = resultSale;
}