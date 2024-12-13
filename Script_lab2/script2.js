function splitNumber() {
    let number = parseInt(document.getElementById("number").value);
    if (isNaN(number)){
        alert("Входные данные должны быть числом")
    }
    else if (String(number).length != 2){
        alert("Число должно быть двузначным")
    }

    let tens = Math.floor(number / 10);
    let units = number % 10;

    document.getElementById("tens").innerText = `Десятки данного числа: ${tens}`;
    document.getElementById("units").innerText = `Единицы данного числа: ${units}`;
}
