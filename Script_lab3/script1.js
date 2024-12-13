function checkInt() {
    let A = parseInt(document.getElementById("A").value);
    let B = parseInt(document.getElementById("B").value);
    let C = parseInt(document.getElementById("C").value);
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert("Входные данные должны быть числами");
    } else {       
        if (A < B && B < C) {
            document.getElementById("result_one").innerHTML = "Ответ: True"
        } else {
            document.getElementById("result_one").innerHTML = "Ответ: False"
        }
    }
}