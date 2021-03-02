var principal = document.getElementById("principal");
var rate = 	document.getElementById("rate");
var years = document.getElementById("years");
var currentYear = new Date().getFullYear();

console.log(principal,rate,years)

function interest_value(){
  var x = document.getElementById("rate").value;
  document.getElementById("current_rate").innerHTML = x + " %";
}

function compute(){
	var deposit = (principal.value);
	var rate_final = (rate.value);
	var future_years = currentYear + (years.value)
	var amount = deposit * future_years * rate_final / 100
	
	document.getElementById("deposit").innerHTML = deposit;
	document.getElementById("rate_final").innerHTML = rate_final;
	document.getElementById("future_years").innerHTML = future_years;
	document.getElementById("amount").innerHTML = amount;
	document.getElementById("result").style.display = "block";
}
  