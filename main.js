// > greater than
// < less than

var getWeight, getHeight, weight, height, measure, bmi ;


function calculate() {
   weight = document.getElementById("weight");
   height = document.getElementById("height");
   height = height/100;
   height = height * height;
   bmi = weight/height;
	if (bmi >= 0 && bmi <= 18.4) {
		measure = "You are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "You are Overweight";
	} else if (bmi >= 30) {
		measure = "You are Obese";
	}
	document.getElementById("results").innerHTML = measure;
}