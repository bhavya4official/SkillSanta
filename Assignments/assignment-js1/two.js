document.getElementById('myDob').valueAsDate = new Date(); //to set default date to today's date

function checkDob() {
    var x = document.getElementById("myDob").value;
    if(x >= 18 && x <= 44) {
        window.location.href = "https://selfregistration.cowin.gov.in";
    }
    else {
        document.getElementById('message').innerHTML = "<br/> You are not elegible for Vaccination.";
    }
}