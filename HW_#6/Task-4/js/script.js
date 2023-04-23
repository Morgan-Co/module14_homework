function submitNumbers() {
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Введите числа.";
    } else if (num1 < 100 || num1 > 300 || num2 < 100 || num2 > 300) {
        document.getElementById("result").innerHTML = "Одно из чисел вне диапазона от 100 до 300.";
    } else {
        fetch("https://picsum.photos/" + num1 + "/" + num2)
            .then(function (response) {
                let img = document.createElement("img");
                img.src = response.url;
                document.body.appendChild(img);
            });
    }
}