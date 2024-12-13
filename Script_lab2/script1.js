function calcVolumeSurfaceArea() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
        // Проверяем, являются ли входные данные числами
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Входные данные должны быть числами");
    }
  
    // Рассчитываем объем
    let volume = a*b*c;
  
    // Рассчитываем площадь поверхности
    let surfaceArea = 2 *(a*b + b*c + a*c);
  
    document.getElementById("volume").innerText = `Объём параллелепипеда: ${volume}`;
    document.getElementById("surfaceArea").innerText = `Площадь поверхности параллелепипеда: ${surfaceArea}`;
  }