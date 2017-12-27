    function donorDataRequest() {
    	console.log('in req')
    	var xhttp = new XMLHttpRequest();
    	xhttp.onreadystatechange = function() {
    		console.log('run')
    		if (this.readyState == 4 && this.status == 200) {
    			console.log(this.responseText);

    		}
    	};
    	xhttp.open("GET", "donors.json", true);
    	xhttp.send();
    }

    donorDataRequest()
