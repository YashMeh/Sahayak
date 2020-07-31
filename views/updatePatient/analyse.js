function analyse(target)    {
    return new Promise(function (resolve,reject) {
        const url = "https://tbhack2.herokuapp.com/log";
        let stateTally = {};
        let states = "Andhra Pradesh/Arunachal Pradesh/Assam/Bihar/Chhattisgarh/Goa/Gujarat/Haryana/Himachal Pradesh/Jammu and Kashmir/Jharkhand/Karnataka/Kerala/Madhya Pradesh/Maharashtra/Manipur/Meghalaya/Mizoram/Nagaland/Orissa/Punjab/Rajasthan/Sikkim/Tamil Nadu/Telangana/Tripura/Uttarakhand/Uttar Pradesh/West Bengal/Andaman and Nicobar Islands/Chandigarh/Dadra and Nagar Haveli/Daman and Diu/Delhi/Lakshadweep/Puducherry";
        states = states.split("/");
        let medicineCombos = {
            "1110":"Isoniazid/Rifampin/Ethambutol",
            "0111":"Rifampin/Ethambutol/Pyrazinamide",
            "1011":"Isoniazid/Ethambutol/Pyrazinamide",
            "1101":"Isoniazid/Rifampin/Pyrazinamide"
        };
        states.forEach(function(element) {
            stateTally[element] = {
                "1110" : 0,
                "0111" : 0,
                "1011" : 0,
                "1101" : 0
            };
        });
        let maxMed = 0;
        $.get(url,function(data)   {
            for(let i=0;i<data.length;i++)   {
                if(data[i]["tbstatus"] === 2 && data[i].state === target)  {
                    let meds = data[i].medicine.join("");
                    stateTally[data[i].state][meds]++;
                }
            }
            let max = -1;
            maxMed = 0;
            if(stateTally)  {
                let keys = Object.keys(stateTally[target]);
                for(let i=0;i<keys.length;i++)  {
                    if(max < stateTally[target][keys[i]])   {
                        maxMed = keys[i];
                        max = stateTally[target][keys[i]];
                    }
                }
            }
        });
        setTimeout(function(e) {
            resolve(medicineCombos[maxMed]);
        },5000);
    })
}
