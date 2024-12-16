function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function clearOne() {
  document.getElementById("display").value = document
    .getElementById("display")
    .value.slice(0, -1);
}

function calculatorResult() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value.replaceAll("%", " * 0.01")
    );
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
