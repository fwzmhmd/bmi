// > greater than
// < less than

function pageLoad() {
	var x = document.getElementsByClassName('height_metric');
	var y = document.getElementsByClassName('weight_metric');
	var z = document.getElementById('imperial_btn');
	var w = document.getElementById('metric_btn');

	for(var i=0; i < x.length && i < y.length; i++) { 
		x[i].style.display='none';
		y[i].style.display='none';
	}

	z.className = "selected_unit";
	w.className = "unselected_unit";
}

function showMetric() {
	var x = document.getElementsByClassName('height_metric');
	var y = document.getElementsByClassName('weight_metric');
	var z = document.getElementsByClassName('height_imperial');
	var u = document.getElementsByClassName('weight_imperial');
	var w = document.getElementById('metric_btn');
	var a = document.getElementById('imperial_btn');

	for(var i=0; i < x.length && i < y.length && i < z.length && i < u.length; i++) { 
		z[i].style.display='none';
		u[i].style.display='none';
		x[i].style.display='block';
		y[i].style.display='block';
	}

	w.className = "selected_unit";
	a.className = "unselected_unit";

}

function showImperial() {
	var x = document.getElementsByClassName('height_metric');
	var y = document.getElementsByClassName('weight_metric');
	var z = document.getElementsByClassName('height_imperial');
	var u = document.getElementsByClassName('weight_imperial');
	var a = document.getElementById('metric_btn');
	var w = document.getElementById('imperial_btn');


	for(var i=0; i < x.length && i < y.length && i < z.length && i < u.length; i++) { 
		z[i].style.display='block';
		u[i].style.display='block';
		x[i].style.display='none';
		y[i].style.display='none';
	}

	w.className = "selected_unit";
	a.className = "unselected_unit";

}

function calculate() {
	var feet, inches, pounds, cm, kg, age, bmi, imperialHeight;
	
	feet = document.getElementById("feet").value;
	inches = document.getElementById("inches").value;
	pounds = document.getElementById("pounds").value;
	kg = document.getElementById("kg").value;
	age = document.getElementById("age").value;
	cm = document.getElementById("cm").value;

	// Caluclate Imperial Height
	feet = feet * 30.48;
	inches = inches * 2.54;

	imperialHeight = feet + inches;

	imperialHeight = imperialHeight / 100;

	imperialHeight = imperialHeight * imperialHeight;


	// Calculate Imperial Weight

	pounds = pounds * 0.453592;
	pounds = Math.round(pounds);

	console.log(imperialHeight);

	// Calculate cm into metres
	cm = cm / 100;
	cm = cm * cm;

	// Calculate BMI
	bmi = kg / cm;
	bmi = pounds / imperialHeight;
	console.log(bmi);

	// Calculate feet

	// bmi = Math.round(bmi);
	bmi = Math.round(bmi*10)/10;
	console.log(bmi);
	
}