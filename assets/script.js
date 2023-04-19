function imc(weight, height) {
    return new Promise((resolve, reject) => {
      if (typeof weight !== "number" || typeof height !== "number")
        reject("arguments must be of type number");
      else resolve(weight / (height * height));
    });
  }
  
  function showImc(event) {
    event.preventDefault();
  
    const weightValue = document.getElementById("weight").value;
    const weightNumber = parseFloat(weightValue);
  
    const heightValue = document.getElementById("height").value;
    const heightNumber = parseFloat(heightValue);
  
    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      console.log("Valores de peso e altura inválidos");
      return;
    }
  
    const showResult = document.getElementById("result");
    const showSituation = document.getElementById("situation");
  
    imc(weightNumber, heightNumber)
      .then((result) => {
        showResult.innerHTML = `O resultado do IMC foi ${result.toFixed(2)}`;
  
        if (result < 18.5) showSituation.innerHTML = "MAGREZA";
        else if (result < 25) showSituation.innerHTML = "NORMAL";
        else if (result < 30) showSituation.innerHTML = "SOBREPESO";
        else if (result < 40) showSituation.innerHTML = "OBESIDADE";
        else showSituation.innerHTML = "OBESIDADE GRAVE";
      })
      .catch((err) => {
        console.log(err);
      });
  
    console.log(`Calculando o IMC para o peso ${weightValue}kg e altura ${heightValue}m`);
  }
  
  const form = document.getElementById("imc-form");
  form.addEventListener("submit", showImc);
  