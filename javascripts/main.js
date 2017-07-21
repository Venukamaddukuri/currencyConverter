
$(document).ready(function () {
	// var html_code = '';
	var rateData;

	// $('#curreny_one').onchange(currencyOneSelected);

$.ajax({
	type: 'GET',
	url: 'https://api.fixer.io/latest',
	success: function(data){
		 console.log('success',data.rates['CAD']);
		 rateData = data.rates;

		 var select = document.getElementById('curreny_one');

		 for (key in data.rates) {
		     
		    var option = document.createElement('option');
            option.setAttribute('value', key);
            option.appendChild(document.createTextNode(key));
            select.appendChild(option);
		 }
  

		
	}
});


$('#curreny_one').change(function() {
    // var val = $("#myOptions option:selected").text();
     var val = $("#curreny_one option:selected").text();
     var currencyValue =  rateData[val];
     //var calculatedCurrency = document.getElementById('inputedCurrency').value * currencyValue;
     //document.getElementById('inputedCurrency').value = currencyValue;
     console.log('selected value is ',currencyValue);
		document.getElementById('convertedCurrency').value = document.getElementById('inputedCurrency').value * currencyValue;
		//document.getElementById('boldStuff').innerHTML
     alert(currencyValue);
});


});