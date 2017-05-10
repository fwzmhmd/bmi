// > greater than
// < less than

var getWeight, getHeight, weight, height, measure, bmi ;


function calculate() {
   getWeight = prompt("Weight","enter in your weight");
   getHeight = prompt("ewrwf","enter in your height");
   weight = parseInt(getWeight);
   height = parseInt(getHeight);
   height = height/100;
   height = height * height;
   bmi = weight/height;
	if (bmi >= 0 && bmi <= 18.4) {
		measure = "Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Overweight";
	} else if (bmi >= 30) {
		measure = "Obese";
	}
	document.getElementById("results").innerHTML = measure;
}