const url = "https://tbhack2.herokuapp.com/log";
let medicineCombos = {
    "1110":"Isoniazid/Rifampin/Ethambutol",
    "0111":"Rifampin/Ethambutol/Pyrazinamide",
    "1011":"Isoniazid/Ethambutol/Pyrazinamide",
    "1101":"Isoniazid/Rifampin/Pyrazinamide"
};
$.get(url,function(data)
{
    console.log(data);
    for(let i=0;i<data.length;i++)  {
        let historyDiv = document.getElementById("logsDiv");
        let tempDiv = document.createElement("div");

        p2 = document.createElement('p');
        p2.innerText = "Aadhar Number: " + data[i].aadhar + "\nDate: " + (new Date(data[i].date)).toDateString() + "\n" + medicineCombos[data[i].medicine.join("")];
        $(p2).addClass("record");
        tempDiv.appendChild(p2);
        historyDiv.appendChild(tempDiv);
    }
});
