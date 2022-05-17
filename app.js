let button = document.getElementById("btn");

button.addEventListener("click", function () {
  let word = document.getElementById("str").value;
  let count = word.length;
  let output = document.getElementById("num");

  output.innerHTML = `<h1>${count}</h1>`;
});

