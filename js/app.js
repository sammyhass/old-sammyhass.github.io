var age = document.getElementById("age");
var date= new Date();
var year = date.getFullYear();
htmlYear = document.getElementById("year");
htmlYear.innerHTML = year;
if (date.getMonth() < 6) { // Get Month starts at index 0.
	year -= 1;
} 
var currentAge = year - 2001;
age.innerHTML = currentAge;

