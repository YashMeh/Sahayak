var dropDown = document.getElementsByClassName("selection")[0];
var dd = document.getElementsByClassName("area")[0];
var area = "India";
dd.addEventListener("change",function(){
	area = dd.value;
	console.log(area);
	if (activeCanvas === "Age"){
		ageCases = [0,0,0,0,0,0,0,0,0,0];
		parseDataByAge();
	}
	if (activeCanvas === "Gender"){
		genderCases = [0, 0];
		parseDataByGender();
	}
});

var activeCanvas;

var canvases = document.querySelectorAll("canvas");
var stateWiseCanvas = canvases[0];
var genderWiseCanvas = canvases[1];
var ageWiseCanvas = canvases[2];

var buttons = document.querySelectorAll("button");
var sortByState = buttons[1];
var sortByAge = buttons[2];
var sortByGender = buttons[3];
sortByState.addEventListener("click", function(){
	reset();
	parseDataByState();
	activeCanvas = "State";
	stateWiseCanvas.style.display = "block";
});
sortByAge.addEventListener("click", function(){
	reset();
	parseDataByAge();
	activeCanvas = "Age";
	dropDown.style.display = "block";
	ageWiseCanvas.style.display = "block";
});
sortByGender.addEventListener("click", function(){
	reset();
	parseDataByGender();
	activeCanvas = "Gender";
	dropDown.style.display = "block";
	genderWiseCanvas.style.display = "block";
});

function reset(){
	stateWiseCanvas.style.display = "none";
	ageWiseCanvas.style.display = "none";
	genderWiseCanvas.style.display = "none";
	dropDown.style.display = "none";
	area = "India";
	genderCases = [0, 0];
	ageCases = [0,0,0,0,0,0,0,0,0,0];
	dd.selectedIndex = 0;
}


var response_data;
var genderList = ["Male", "Female"];
var genderCases = [0, 0]; 
var stateWise = {};
var stateList = [];
var ageList = ["0-10","11-20","21-30","31-40","41-50","51-60","61-70","71-80","81-90","91-100"];
var ageCases = [0,0,0,0,0,0,0,0,0,0];
var xLabel = [];
var yLabel = [];
var cases = [];
var GenderChart;
var AgeChart;

function parseDataByState(){
	dropDown.style.display = "none";
	response_data.forEach(function(ele){
	    state = ele.state;
	    if (state != "false"){
		    // when state is not present in dict
		    if (stateWise[state] === undefined){
		        // initialilse state with population 1
		        stateWise[state] = 1;
		        // add a new state in stateList
		        stateList.push(state);
		    }
		    else {
		        stateWise[state] += 1;
		    }
		}
	    else {
	    	console.log(ele);
	    }
	});

	// Add num of patients in cases
	for(var stateName in stateWise){
		cases.push(stateWise[stateName]);
	}

	// console.log(cases);
	// console.log(stateList);
	xLabel = stateList;
	yLabel = cases;
	drawGraphByState();
}

function parseDataByGender(){
	response_data.forEach(function(ele){
		if (ele.gender === "Male"){
			if(ele.state === area || area === "India"){
				genderCases[0] += 1;				
			}
		}
		else {
			if(ele.state === area || area === "India"){
				genderCases[1] += 1;			
			}
		}
	});
	xLabel = genderList;
	yLabel = genderCases;
	drawGraphByGender();
}

function parseDataByAge(){
	response_data.forEach(function(ele){
		if(ele.dob === undefined){
			console.log(ele);
		}
		age = 2018 - Number(ele.dob.slice(0,4));
		if (age >=0 && age <=10){
			i=0;
		}
		else if (age >11 && age <=20){
			i=1;
		}
		else if (age >21 && age <=30){
			i=2;
		}
		else if (age >31 && age <=40){
			i=3;
		}
		else if (age >41 && age <=50){
			i=4;
		}
		else if (age >51 && age <=60){
			i=5;
		}
		else if (age >61 && age <=70){
			i=6;
		}
		else if (age >71 && age <=80){
			i=7;
		}
		else if (age >81 && age <=90){
			i=8;
		}
		else {
			console.log(age, ele);
		i=9;
		}

		if(ele.state === area || area === "India"){
			ageCases[i] += 1;
		}
	});
	xLabel = ageList;
	yLabel = ageCases;
	drawGraphByAge();
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
		parseDataByState();
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


function drawGraphByState(){
	var myChart = document.getElementById("stateWiseGraph").getContext('2d');

	//Global Options
	Chart.defaults.global.defaultFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 18;
	Chart.defaults.global.defaultFontColor = '#777';


	var popChart = new Chart(myChart, {
			type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
			data: {
				labels: xLabel,
				datasets: [{
					label: 'Patient Count',
					data: yLabel,
					backgroundColor: 'rgba(33,147,176,0.6)',
					borderWidth: 1,
					borderColor: '#cccccc',
					hoverBorderWidth: 2,
					hoverBorderColor: '#000000'
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
					text: 'State wise data representation',
					fontSize: 25
				}
			}
		});
}

function drawGraphByGender(){
	if(GenderChart){
		GenderChart.data = {
			labels: xLabel,
			datasets: [{
				label: 'Patient Count',
				data: yLabel,
				backgroundColor: ['rgba(33,147,176,0.6)','rgba(142,45,226,0.6)'],
				borderWidth: 1,
				borderColor: '#cccccc',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000000'
			}]
		};
		GenderChart.update();
	}
	else{

	var myChart = document.getElementById("genderWiseGraph").getContext('2d');

	//Global Options
	Chart.defaults.global.defaultFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 18;
	Chart.defaults.global.defaultFontColor = '#777';


	GenderChart = new Chart(myChart, {
			type: 'pie', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
			data: {
				labels: xLabel,
				datasets: [{
					label: 'Patient Count',
					data: yLabel,
					backgroundColor: ['rgba(33,147,176,0.6)','rgba(142,45,226,0.6)'],
					borderWidth: 1,
					borderColor: '#cccccc',
					hoverBorderWidth: 2,
					hoverBorderColor: '#000000'
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Gender wise data representation',
					fontSize: 25
				}
			}
		});
}
}

function drawGraphByAge(){
	if(AgeChart){
		AgeChart.data = {
			labels: xLabel,
			datasets: [{
				label: 'Patient Count',
				data: yLabel,
				backgroundColor: 'rgba(33,147,176,0.6)',
				borderWidth: 1,
				borderColor: '#cccccc',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000000'
			}]
		};
		AgeChart.update();
	}
	else{
	var myChart = document.getElementById("ageWiseGraph").getContext('2d');

	//Global Options
	Chart.defaults.global.defaultFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 18;
	Chart.defaults.global.defaultFontColor = '#777';


	AgeChart = new Chart(myChart, {
			type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
			data: {
				labels: xLabel,
				datasets: [{
					label: 'Patient Count',
					data: yLabel,
					backgroundColor: 'rgba(33,147,176,0.6)',
					borderWidth: 1,
					borderColor: '#cccccc',
					hoverBorderWidth: 2,
					hoverBorderColor: '#000000'
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
					text: 'Age wise data representation',
					fontSize: 25
				}
			}
		});
}
}
