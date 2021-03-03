/*
Coursera Full Stack Developer
Title: Project - Simple Interest Calculator
author: Rui Dinis
Version: 
0.1 - Initial version 
*/

// input=range Onchange function to parse the current rate value selected
function interest_value(){
  var x = document.getElementById("rate").value;
  document.getElementById("current_rate").innerHTML = x + " %";
}

//input=button Onclick function
function compute(){
	
	//Get input values by Element ID
	var deposit = 	document.getElementById("principal").value;
	var rate_final = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	
	// Get the current Civil year
	var currentYear = new Date().getFullYear();
	
	// Calculate the values converted from string to Int or Float
	var future_years = parseInt(currentYear) + parseInt(years);
	var amount = parseInt(deposit) * parseInt(years) * parseFloat(rate_final) / 100
		
	//debug values
	//console.log(parseInt(deposit),parseInt(years),parseFloat(rate_final),amount)
	
	// Verify if principal value is greater then 0  
	if (deposit < 1) {
		alert("Enter a positive number")
		// after click OK Leave the focus at the principal input and reset to 0
		document.getElementById("principal").focus();
		document.getElementById("principal").value = "0";
		
		//reset all fields to default
		document.getElementById("rate").value="10.25";
		document.getElementById("current_rate").innerHTML = "10.25 %";
		document.getElementById("years").value="1";
		document.getElementById("result").style.display = "none";
		
	} else{	
		// Else populate in the HTML page the values
		document.getElementById("deposit").innerHTML = deposit;
		document.getElementById("rate_final").innerHTML = rate_final + "%";
		document.getElementById("future_years").innerHTML = future_years;
		document.getElementById("amount").innerHTML = amount;
		document.getElementById("result").style.display = "block";
	}
}
  