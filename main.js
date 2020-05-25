const fizzNumber = document.getElementById("fizzNum");
const buzzNumber = document.getElementById("buzzNum");
const submitButton = document.getElementById("button");
const result = document.getElementById("result");

submitButton.addEventListener("click", () => {
  const FizzValue = parseInt(fizzNumber.value);
  const BuzzValue = parseInt(buzzNumber.value);

  if (isNaN(FizzValue) && isNaN(BuzzValue)) {
    while (result.firstChild) {
      result.removeChild(result.firstChild);
    }
    result.appendChild(document.createElement("p")).textContent =
      "整数値を入力してください";
  } else if (FizzValue <= 0 || BuzzValue <= 0) {
    while( result.firstChild ){
      result.removeChild( result.firstChild );
    }
    result.appendChild(document.createElement("p")).textContent =
      "整数値を入力してください";
  } else if (!isNaN(FizzValue) && !isNaN(BuzzValue)) {
    while( result.firstChild ){
      result.removeChild( result.firstChild );
    }
    for (let i = 1; i < 100; i++) {
      if (i % FizzValue === 0 && i % BuzzValue === 0) {
        result.appendChild(
          document.createElement("p")
        ).textContent = `FizzBuzz : ${i}`;
      } else if (i % FizzValue === 0) {
        result.appendChild(
          document.createElement("p")
        ).textContent = `Fizz : ${i}`;
      } else if (i % BuzzValue === 0) {
        result.appendChild(
          document.createElement("p")
        ).textContent = `Buzz : ${i}`;
      }
    }
  }

  document.form.reset();
});
