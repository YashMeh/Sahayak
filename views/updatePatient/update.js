$(".next").click(function(){
    $(".cont1").fadeOut(1000,function(){
        $(".formDiv").fadeIn(1000);
    });
});

let scanner = new Instascan.Scanner({ video: document.getElementById('preview'),backgroundScan: false});
let x;
let data = {};
let medicines = ["Isoniazid","Rifampin","Ethambutol","Pyrazinamide"];
let aadhar = "",city="",state="",name,dob,pincode,gender,address;
let latestRecord,secondLast = false;
let numSymptoms = 0;
let patient = {};
scanner.addListener('scan', function (content) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(content,"text/xml");
    x = Array.from(xmlDoc.all[0].attributes);
    for(let i=0;i<x.length;i++) {
        data[x[i].nodeName] = x[i].nodeValue;
    }
    aadhar = data["uid"];
    let address = [data["house"],data["street"],data["lm"],data["loc"]].join(", ");
    city = data["vtc"];
    state = data["state"];

    name = data["name"];
    dob = data["dob"];
    pincode = data["pc"];
    gender = (data["gender"] === "M")?"Male":"Female";

    analyse(state).then(function(e) {
        let sugg = document.createElement("p");
        sugg.innerText =  "Suggestion: " + e;
        // $("#suggestionDiv").innerText = "Suggestion: " + e;
        document.getElementById("suggestionDiv").appendChild(sugg);
    });


    document.getElementById('aadhar').innerText= aadhar;
    document.getElementById('name').innerText = name;
    document.getElementById('dob').innerText = dob;
    document.getElementById('gender').innerText = gender;
    document.getElementById('address').innerText = address;
    document.getElementById('city').innerText = city;
    document.getElementById('state').innerText = state;
    document.getElementById('pincode').innerText = pincode;
    scanner.stop().then(() =>   {
        getData();

    });
});

Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        if(cameras.length > 1)
            scanner.start(cameras[1]);
        else
            scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }

}).catch(function (e) {
    console.error(e);
});
//document.getElementById("aadharButton").addEventListener("click", getData);
function getData()  {
    $("#unscanned").hide();
    $("#scanned").show();
    $("#preview").hide();
    $("#loadingRec").show();
    let records=[];
    const url = "https://tbhack2.herokuapp.com/report/"+aadhar;
    $.get(url,function(data)   {
        $("#displayOption").show();
        $("#loadingRec").hide();
        if(data.length<=1)  {
            $("#history").hide();
        }
        records = data;
        records.sort(function(a,b)  {
            return b.date - a.date;
        });
        latestRecord = records[0];
        if(latestRecord.tbstatus > 0)   {
            $("#suggestionRow").slideDown();
            $("#medRow").slideDown();
        }
        else    {
            $("#suggestionRow").hide();
            $("#medRow").hide();
        }
        if(records.length >1)   {
            secondLast = records[1];
        }
        if(secondLast !== false)    {
            let historyDiv = document.getElementById("history");
            let tempDiv = document.createElement("div");
            $(tempDiv).addClass("historyRec");
            let patSymptoms = 0;
            let patMeds = [];
            for(let m in secondLast.medicine)
                if(secondLast.medicine[m] == "1")
                    patMeds.push(medicines[m]);
            patMeds = patMeds.join("/");
            let d = new Date(secondLast.date);
            let p1 = document.createElement('p');
            $(p1).addClass("recordP");
            p1.innerText = "Date: " + d.toTimeString().substring(0,8) + " " + d.toDateString().substring(0,15) + "\nSymptoms: " + secondLast.symptomCount;
            tempDiv.appendChild(p1);
            let p2;
            if(secondLast.medicine.join("")!=="0000") {
                p2 = document.createElement('p');
                p2.innerText = "Medicine: " + patMeds;
                $(p2).addClass("recordP");
                tempDiv.appendChild(p2);
            }
            historyDiv.appendChild(tempDiv);
        }

        let symptoms = document.getElementsByName("symptoms");
        for(let i=0;i<symptoms.length;i++)    {
            symptoms[i].checked = parseInt(latestRecord.symptoms[i]);
            if(symptoms[i].checked) {
                numSymptoms++;
            }
        }

        let patMed = latestRecord.medicine.join("");
        $('#medicine').val(patMed);
        $('#medicine').formSelect();

        if(latestRecord["tbstatus"])
            patient["tbstatus"] = latestRecord["tbstatus"];
        else
            patient["tbstatus"] = 0;
    });
}


let checkboxes = document.getElementsByName("symptoms");
checkboxes.forEach((element) => {
    $(element).change(()=>  {
        if(element.checked) {
            numSymptoms++;
            if(numSymptoms > parseInt(latestRecord.symptomCount)) {
                $("#medRow").slideDown();
                $("#suggestionRow").slideDown();
                patient["tbstatus"] = 1;
            }
        }
    });
});

document.getElementById("patCured").addEventListener("click", ()=>  {
    patient["tbstatus"] = 2;
    sendData();
});

document.getElementById("submit").addEventListener("click", sendData);
function sendData() {
    $(".container").hide();
    $("#success").hide();
    $("#loading").show();

    patient["aadhar"] = aadhar;

    let symptoms = document.getElementsByName("symptoms");
    patient["symptoms"] = [];
    patient["symptomCount"] = 0;
    for(let i=0;i<symptoms.length;i++)    {
        patient["symptoms"][i] = (symptoms[i].checked)?1:0;
        if(symptoms[i].checked == true)
            patient["symptomCount"] += 1;
    }

    if(patient.tbstatus>0)  {
        let meds = document.getElementById("medicine").options;
        let medicine;
        for(let i=1; i<meds.length;i++) {
            if (meds[i].selected === true)
                medicine = meds[i].value;
        }
        medicine = medicine.split("");
        for(let i=0;i<medicine.length;i++)  {
            medicine[i] = parseInt(medicine[i]);
        }
        patient["medicine"] = medicine;
    }
    else
        patient["medicine"] = ["0","0","0","0"];
    patient["date"] = Date.now();
    patient["city"] = city;
    patient["state"] = state;

    // console.log(patient);
    let url;
    if((latestRecord.medicine.join("") === "0000") && patient.tbstatus == 1 )   {
        url = "https://tbhack2.herokuapp.com/api/user";
        // console.log("Posting to user");
    }
    else    {
        url = "https://tbhack2.herokuapp.com/log";
        // console.log("Posting to log");
    }


    patient["name"] = name;
    patient["dob"] = dob;
    patient["pincode"] = pincode;
    patient["gender"] = gender;
    patient["address"] = address;
    // console.log(patient);
    $.post(url,patient,function(data, status)   {
        // console.log(status);
        // console.log(data);
        if(status === "success") {
            $(".container").hide();
            $("#success").show();
            $("#loading").hide();
        }
    });
}





