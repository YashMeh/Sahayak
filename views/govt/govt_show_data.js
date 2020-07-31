var parentDiv = document.getElementsByClassName('col-xs-10')[0];
function parseData(){
	response_data.forEach(function(ele){
		var rowDiv = document.createElement("div");
		rowDiv.classList.add("row");
		rowDiv.classList.add("data");

		var adharDiv = document.createElement("div");
		adharDiv.classList.add("col-xs-2");
		var adharData = document.createTextNode(ele.aadhar);
		adharDiv.appendChild(adharData);
		rowDiv.appendChild(adharDiv);

		var nameDiv = document.createElement("div");
		nameDiv.classList.add("col-xs-1");
		var nameData = document.createTextNode(ele.name);
		nameDiv.appendChild(nameData);
		rowDiv.appendChild(nameDiv);

		var dobDiv = document.createElement("div");
		dobDiv.classList.add("col-xs-2");
		var dobData = document.createTextNode(ele.dob);
		dobDiv.appendChild(dobData);
		rowDiv.appendChild(dobDiv);

		var cityDiv = document.createElement("div");
		cityDiv.classList.add("col-xs-2");
		var cityData = document.createTextNode(ele.city);
		cityDiv.appendChild(cityData);
		rowDiv.appendChild(cityDiv);

		var genderDiv = document.createElement("div");
		genderDiv.classList.add("col-xs-1");
		var genderData = document.createTextNode(ele.gender);
		genderDiv.appendChild(genderData);
		rowDiv.appendChild(genderDiv);

		var stateDiv = document.createElement("div");
		stateDiv.classList.add("col-xs-2");
		var stateData = document.createTextNode(ele.state);
		stateDiv.appendChild(stateData);
		rowDiv.appendChild(stateDiv);

		var dateDiv = document.createElement("div");
		dateDiv.classList.add("col-xs-2");
		var date = new Date(ele.date);
		var dateData = document.createTextNode(date.getDate()+"-"+date.getMonth()+"-"+date.getYear());
		dateDiv.appendChild(dateData);
		rowDiv.appendChild(dateDiv);

		parentDiv.appendChild(rowDiv);
	});
}


// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status == 200) {
		// What do when the request is successful
		console.log('success!');
		response_data = JSON.parse(xhr.responseText);
		parseData();
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://tbhack2.herokuapp.com/api/user');
xhr.send();