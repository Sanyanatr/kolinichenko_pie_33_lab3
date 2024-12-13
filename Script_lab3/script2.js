function checkHigherNumber() {
    let number_one = parseInt(document.getElementById("num_one").value);
    let number_two = parseInt(document.getElementById("num_two").value);
    if (isNaN(number_one) || isNaN(number_two)) {
        alert("Входные данные должны быть числами");
    } else {
        if (number_one > number_two) {
            document.getElementById("result_two").innerText = `Большее число: ${number_one}`;
        } else {
            document.getElementById("result_two").innerText = `Большее число: ${number_two}`;
        }
    }
}