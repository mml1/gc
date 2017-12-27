    function donorDataRequest() {
    	var xhttp = new XMLHttpRequest();
    	xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {

    			var data = JSON.parse(this.responseText)
    			var donorFormatted = [];
    			var total = 0;

    			for (var i = 0; i < data.length; i++) {

    				total += data[i].amount;
    				donorFormatted.push('\n<div class="table-row"> \n \t <div class="col-4 donor-name">' + data[i].name + '</div> <div class="col-4">$' + data[i].amount + '</div> <div class="col-4">' + data[i].type + '</div></div>')

    			}

    			// Using data from json req to create donor table rows and total
    			document.getElementById("donors").innerHTML = donorFormatted.join('');
    			document.getElementById("total").innerHTML = '<h1 class="college-header_1">$' + total + '</h1>';
    			document.getElementById("small-total").innerHTML = '<span class="em-text" id="small-total">$' + total + '</span> Donated';


    		}
    	};
    	xhttp.open("GET", "donors.json", true);
    	xhttp.send();
    }

    donorDataRequest()
