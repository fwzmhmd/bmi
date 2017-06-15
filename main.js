// > greater than
// < less than

function pageLoad() {
	var x = document.getElementsByClassName('height_metric');
	var y = document.getElementsByClassName('weight_metric')
	for(var i=0; i < x.length && i < y.length; i++) { 
		x[i].style.display='none';
		y[i].style.display='none';

	}
}

function showMetric() {
	var x = document.getElementsByClassName('height_metric');
	var y = document.getElementsByClassName('weight_metric');
	var z = document.getElementsByClassName('height_imperial');
	var u = document.getElementsByClassName('weight_imperial');

	for(var i=0; i < x.length && i < y.length && i < z.length && i < u.length; i++) { 
		z[i].style.display='none';
		u[i].style.display='none';
		x[i].style.display='block';
		y[i].style.display='block';
	}

}

function showImperial() {
	var x = document.getElementsByClassName('height_metric');
	var y = document.getElementsByClassName('weight_metric');
	var z = document.getElementsByClassName('height_imperial');
	var u = document.getElementsByClassName('weight_imperial');

	for(var i=0; i < x.length && i < y.length && i < z.length && i < u.length; i++) { 
		z[i].style.display='block';
		u[i].style.display='block';
		x[i].style.display='none';
		y[i].style.display='none';
	}

}