function findValue () {
    let x  = parseFloat(document.getElementById("x").value);
    let a  = parseFloat(document.getElementById("a").value);
    let b  = parseFloat(document.getElementById("b").value);
    if (isNaN(x) || isNaN(a) || isNaN(b)) {
        alert("Входные данные должны быть числами");
    } else {
        if (x <= 3) {
            y = b - Math.pow(x, 2) - 1;
            document.getElementById("function_result").innerText = `Значение функции: ${y.toFixed(6)}`;
        } 
        else if ((x > 3) && (x < 8)) {
            y = Math.pow(Math.cos(a*x**2 + 3), 2)
            document.getElementById("function_result").innerText = `Значение функции: ${y.toFixed(6)}`;
        } 
        else {
            y = Math.sqrt(Math.log(x + a))
            document.getElementById("function_result").innerText = `Значение функции: ${y.toFixed(6)}`;
        }
    }
}