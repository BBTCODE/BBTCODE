calculate = () => {
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;
  let BMI = w / (((h / 100) * h) / 100);
  let total = BMI.toFixed(2);
  if (total < 18.5) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + total + " : UnderWeight";
  }
  if (total >= 18.5 && total <= 24.9) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + total + " : Normal";
  }
  if (total > 25) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + total + " : OverWeight";
  }
  setTimeout(function(){
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").innerHTML = "";

  },5000);
};
