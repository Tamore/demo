function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
  
  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height);
    const bmiResult = document.getElementById("bmi-result");

    fetch(`https://api.bmicalc.com/bmi?weight=${weight}&height=${height}&unit=metric`)
      .then(response => response.json())
      .then(data => {
        bmiResult.innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${data.interpretation})`;
      })
      .catch(error => {
        bmiResult.innerHTML = "Error fetching interpretation: " + error;
      });
  } else {
    bmiResult.innerHTML = "Please enter valid weight and height.";
  }
}
