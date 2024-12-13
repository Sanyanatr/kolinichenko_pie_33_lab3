function findValueSwith () {
    let x  = parseFloat(document.getElementById("x_two").value);
    let a  = parseFloat(document.getElementById("a_two").value);
    let b  = parseFloat(document.getElementById("b_two").value);
    if (isNaN(x) || isNaN(a) || isNaN(b)) {
        alert("Входные данные должны быть числами");
    } else {
        switch(x) {
            case 3:
                y = b - Math.pow(x, 2) - 1;
                document.getElementById("function_result_two").innerText = `Значение функции: ${y.toFixed(6)}`;
                break;
            case 8:
                y = Math.sqrt(Math.log(x + a))
                document.getElementById("function_result_two").innerText = `Значение функции: ${y.toFixed(6)}`;
                break;
            case 7:
                y = Math.pow(Math.cos(a*x**2 + 3), 2)
                document.getElementById("function_result_two").innerText = `Значение функции: ${y.toFixed(6)}`;
                break;
            default:
                alert("Недопустимое значение x")
                break;
        }
    }
}