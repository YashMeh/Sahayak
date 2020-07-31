$(".next").click(function(){
    $(".cont1").fadeOut(1000,function(){
        $(".cont2").fadeIn(1000);
    });
});

let scanner = new Instascan.Scanner({ video: document.getElementById('preview'),backgroundScan: false});
let x;
let data = {};
scanner.addListener('scan', function (content) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(content,"text/xml");
    x = Array.from(xmlDoc.all[0].attributes);
    for(let i=0;i<x.length;i++) {
        data[x[i].nodeName] = x[i].nodeValue;
    }
    let address = [data["house"],data["street"],data["lm"],data["loc"]].join(", ");
    let city = data["vtc"];
    let state = data["state"];
    let aadhar = data["uid"];
    let name = data["name"];
    let dob = data["dob"];
    //let today = new Date();
    // let age = today.getFullYear() - dob.getFullYear();
    // let mdiff = today.getMonth() - dob.getMonth();
    // if (mdiff < 0 || (mdiff === 0 && today.getDate() < dob.getDate())) {
    //     age--;
    // }
    let pincode = data["pc"];
    let gender = (data["gender"] === "M")?"Male":"Female";

    document.getElementById('aadhar').value = aadhar;
    document.getElementById('name').value = name;
    document.getElementById('dob').value = dob;
    document.getElementById('gender').value = gender;
    document.getElementById('address').value= address;
    document.getElementById('city').value = city;
    document.getElementById('state').value = state;
    document.getElementById('pincode').value = pincode;
    //output = "Aadhar Nummber: " + aadhar + "\nName: "+ name + "\nAge: " + age +"\nGender: "+ gender +"\nAddress: " + address + "\nPincode: " + pincode;
    //console.log(data);
    scanner.stop().then(() =>   {
        $("#unscanned").hide();
        $("#scanned").show();
        $("#preview").hide();
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

document.getElementById("submit").addEventListener("click", sendData);
function sendData() {
    $(".cont2").hide();
    $("#success").hide();
    $("#loading").show();
    let patient = {};
    patient["aadhar"] = document.getElementById('aadhar').value;
    //patient["name"] = document.getElementById('name').value;
    //patient["dob"] = document.getElementById('dob').value;
    //patient["gender"] = document.getElementById('gender').value;
    //patient["address"] = document.getElementById('address').value;
    patient["city"] = document.getElementById('city').value;
    patient["state"] = document.getElementById('state').value;
    //patient["pincode"] = document.getElementById('pincode').value;

    let symptoms = document.getElementsByName("symptoms");
    patient["symptoms"] = [];
    patient["symptomCount"] = 0;
    for(let i=0;i<symptoms.length;i++)    {
        patient["symptoms"][i] = (symptoms[i].checked)?1:0;
        if(symptoms[i].checked) {
            patient["symptomCount"]++;
        }
    }
    // let meds = document.getElementById("medicine").options;
    // let medicine;
    // for(let i=1; i<meds.length;i++) {
    //     if (meds[i].selected === true)
    //         medicine = meds[i].value;
    // }
    // medicine = medicine.split("");
    // for(let i=0;i<medicine.length;i++)  {
    //     medicine[i] = parseInt(medicine[i]);
    // }
    // patient["medicine"] = medicine;
    patient["tbstatus"] = 0;
    patient["date"] = Date.now();
    patient["medicine"] = ["0","0","0","0"];

    console.log(patient);
    const url = "https://tbhack2.herokuapp.com/log";
    $.post(url,patient,function(data, status)   {
        console.log(data+" and status is "+status);
        console.log(data);
        console.log(status);
        if(status === "success") {
            // $(".container").hide();
            $(".cont2").hide();
            $("#success").show();
            $("#loading").hide();
        }
    });
}
