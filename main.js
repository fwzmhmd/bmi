// > greater than
// < less than

var getWeight, getHeight, weight, height, measure, bmi, error;

// document.getElementById("results").addEventListener('click',calculate,true);

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height = height/100;
	height = height * height;
	bmi = weight/height;
	bmi = Math.round(bmi);

	if (bmi <= 18.4) {
		measure = "You are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "You are Overweight";
	} else if (bmi >= 30) {
		measure = "You are Obese";
	}
	
	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {
		document.getElementById("results").value = measure;
		document.getElementById("bmi").value = bmi;
	}
}