function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var currentYear = now.getFullYear()
    console.log("Current year is: " + currentYear);

    
}
   compute()     