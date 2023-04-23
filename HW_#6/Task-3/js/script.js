const input = document.getElementById("number-input");
const button = document.getElementById("submit-button");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const number = parseInt(input.value);
  if (number < 1 || number > 10 || isNaN(number)) {
    resultDiv.textContent = "число вне диапазона от 1 до 10";
  } else {
    const url = `https://picsum.photos/v2/list?limit=${number}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        console.log(response);
        response.forEach((item) => {
          const img = document.createElement("img");
          img.src = item.download_url;
          resultDiv.appendChild(img);
        });
      } else {
        console.error(xhr.status);
      }
    };
    xhr.send();
  }
});