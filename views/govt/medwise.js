var log_data;
var shop_data;
var count = 0;

var stateList = [];
var curedCase = [];
var medSold = [];


// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status == 200) {
		// What do when the request is successful
		console.log('success!');
		log_data = JSON.parse(xhr.responseText);
		count += 1;
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://tbhack2.herokuapp.com/log');
xhr.send();

// Set up our HTTP request
var req = new XMLHttpRequest();

// Setup our listener to process completed requests
req.onload = function () {

	// Process our return data
	if (req.status == 200) {
		// What do when the request is successful
		console.log('success!');
		shop_data = JSON.parse(req.responseText);
		count += 2;
		setTimeout(getLabelData,5000);
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
req.open('GET', 'https://tbhack2.herokuapp.com/shop');
req.send();

function getLabelData(){
	log_data.forEach(function(ele){
		var index = stateList.indexOf(ele.state); 
		if (index === -1){
			stateList.push(ele.state);
			if(ele.tbstatus === 2){
				curedCase.push(1);
			}
			else {
				curedCase.push(0);
			}
			medSold.push(0);
		}
		else{
			if(ele.tbstatus === 2){
				curedCase[index] += 1;
			}
		} 
	});
	shop_data.forEach(function(elem){
		var index = stateList.indexOf(elem.state);
		medSold[index] = elem.initialCount-elem.presentCount;
	});
	drawGraph();
}

function drawGraph(){
	var myChart = document.getElementById("medWiseGraph").getContext('2d');
	//Global Options
	Chart.defaults.global.defaultFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 18;
	Chart.defaults.global.defaultFontColor = '#777';


	var popChart = new Chart(myChart, {
			type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
			data: {
				labels: stateList,
				datasets: [
				{
					label: 'Cured patients',
					data: curedCase,
					backgroundColor: 'rgba(131,96,195,0.6)',
					borderWidth: 1,
					borderColor: 'rgb(131,96,195)',
					hoverBorderWidth: 2,
					hoverBorderColor: 'rgb(131,96,195)'
				},
				{
					label: 'Medicine Sold',
					data: medSold,
					backgroundColor: 'rgba(46,191,145,0.6)',
					borderWidth: 1,
					borderColor: 'rgb(46,191,145)',
					hoverBorderWidth: 2,
					hoverBorderColor: 'rgb(46,191,145)'	
				}]
			},
			options: {
				responsive: true,
				scales: {
					xAxes: [{
						ticks: {
							autoSkip: false
						}
					}],
					yAxes: [{
						ticks: {
							min: 0
						}
					}]
				},
				title: {
					display: true,
					text: 'Medicine vs cure representation',
					fontSize: 25
				}
			}
		});
}