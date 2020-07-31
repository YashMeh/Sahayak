var states=["Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Chandigarh",
"Dadra and Nagar Haveli",
"Daman and Diu",
"Delhi",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala","Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Orissa","Punjab",
"Pondicherry",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Tripura",
"Uttar Pradesh",
"Uttarakhand",
"West Bengal"]
var aadhar=["256126892600", "256126892601", "256126892602", "256126892603", "256126892604", "256126892605", "256126892606", "256126892607", "256126892608", "256126892609", "256126892610", "256126892611", "256126892612", "256126892613", "256126892614", "256126892615", "256126892616", "256126892617", "256126892618", "256126892619", "256126892620", "256126892621", "256126892622", "256126892623", "256126892624", "256126892625", "256126892626", "256126892627", "256126892628", "256126892629", "256126892630", "256126892631", "256126892632", "256126892633", "256126892634", "256126892635", "256126892636", "256126892637", "256126892638", "256126892639", "256126892640", "256126892641", "256126892642", "256126892643", "256126892644", "256126892645", "256126892646", "256126892647", "256126892648", "256126892649", "256126892650", "256126892651", "256126892652", "256126892653", "256126892654", "256126892655", "256126892656", "256126892657", "256126892658", "256126892659", "256126892660", "256126892661", "256126892662", "256126892663", "256126892664", "256126892665", "256126892666", "256126892667", "256126892668", "256126892669", "256126892670", "256126892671", "256126892672", "256126892673", "256126892674", "256126892675", "256126892676", "256126892677", "256126892678", "256126892679", "256126892680", "256126892681", "256126892682", "256126892683", "256126892684", "256126892685", "256126892686", "256126892687", "256126892688", "256126892689", "256126892690", "256126892691", "256126892692", "256126892693", "256126892694", "256126892695", "256126892696", "256126892697", "256126892698", "256126892699"]
var sputum=[true,false]
var names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai", "Arafat", "Aran", "Arandeep", "Arann", "Aray", "Arayan", "Archibald", "Archie", "Arda", "Ardal", "Ardeshir", "Areeb", "Areez", "Aref", "Arfin", "Argyle", "Argyll", "Ari", "Aria", "Arian", "Arihant", "Aristomenis", "Aristotelis", "Arjuna", "Arlo", "Armaan", "Arman", "Armen", "Arnab", "Arnav", "Arnold", "Aron", "Aronas", "Arran", "Arrham", "Arron", "Arryn", "Arsalan", "Artem", "Arthur", "Artur", "Arturo", "Arun", "Arunas", "Arved", "Arya", "Aryan", "Aryankhan", "Aryian", "Aryn", "Asa", "Asfhan", "Ash", "Ashlee-jay", "Ashley", "Ashton", "Ashton-Lloyd", "Ashtyn", "Ashwin", "Asif", "Asim", "Aslam", "Asrar", "Ata", "Atal", "Atapattu", "Ateeq", "Athol", "Athon", "Athos-Carlos", "Atli", "Atom", "Attila", "Aulay", "Aun", "Austen", "Austin", "Avani", "Averon", "Avi", "Avinash", "Avraham", "Awais", "Awwal", "Axel", "Ayaan", "Ayan", "Aydan", "Ayden", "Aydin", "Aydon", "Ayman", "Ayomide", "Ayren", "Ayrton", "Aytug", "Ayub", "Ayyub", "Azaan", "Azedine", "Azeem", "Azim", "Aziz", "Azlan", "Azzam", "Azzedine", "Babatunmise", "Babur", "Bader", "Badr", "Badsha", "Bailee", "Bailey", "Bailie", "Bailley", "Baillie", "Baley", "Balian", "Banan", "Barath", "Barkley", "Barney", "Baron", "Barrie", "Barry", "Bartlomiej", "Bartosz", "Basher", "Basile", "Baxter", "Baye", "Bayley", "Beau", "Beinn", "Bekim", "Believe", "Ben", "Bendeguz", "Benedict", "Benjamin", "Benjamyn", "Benji", "Benn", "Bennett", "Benny", "Benoit", "Bentley", "Berkay", "Bernard", "Bertie", "Bevin", "Bezalel", "Bhaaldeen", "Bharath", "Bilal", "Bill", "Billy", "Binod", "Bjorn", "Blaike", "Blaine", "Blair", "Blaire", "Blake", "Blazej", "Blazey", "Blessing", "Blue", "Blyth", "Bo", "Boab", "Bob", "Bobby", "Bobby-Lee", "Bodhan", "Boedyn", "Bogdan", "Bohbi", "Bony"]
var gender=["Male","Female"]
var pincodes=["368412", "321209", "279771", "355041", "289362", "296319", "246374", "336975", "398139", "325986", "346217", "258104", "298361", "375698", "316150", "345379", "395954", "313255", "388119", "329013", "342941", "279574", "337212", "259976", "374833", "292605", "353981", "295052", "333943", "399696", "272712", "307915", "343940", "306953", "397420", "308702", "300543", "221271", "303170", "377722", "275500", "212986", "316951", "277696", "357247", "382262", "330412", "282255", "325695", "300979", "226049", "229415", "360058", "311157", "254882", "348285", "249433", "246309", "336856", "365312", "336813", "212315", "316127", "367245", "287834", "257743", "227426", "284606", "319090", "274980", "383006", "313767", "370697", "312019", "288304", "211798", "312054", "393530", "333990", "282538", "234314", "233571", "322899", "314931", "333333", "252134", "299642", "291372", "265759", "276089", "310265", "295338", "244314", "276210", "244006", "373897", "244957", "251115", "238704", "230197"]
var cities=["Mumbai","Delhi","Bengaluru","Ahmedabad","Gandhinagar","Hyderabad","Chennai",  "Kolkata",  "Pune","Jaipur","Surat","Lucknow",  "Kanpur",  "Nagpur","Patna","Indore",  "Thane","Bhopal",  "Visakhapatnam",  "Vadodara","Firozabad",  "Ludhiana","Rajkot","Agra",  "Siliguri",  "Nashik","Faridabad","Patiala","Meerut",  "Kalyan-Dombivali","Vasai-Virar","Varanasi",  "Srinagar",  "Dhanbad","Jodhpur","Amritsar","Raipur","Allahabad",  "Coimbatore",  "Jabalpur",  "Gwalior",  "Vijayawada",  "Madurai",  "Guwahati","Chandigarh","Hubli-Dharwad","Amroha",  "Moradabad",  "Gurgaon","Aligarh",  "Solapur","Ranchi","Jalandhar","Tiruchirappalli",  "Bhubaneswar","Salem",  "Warangal","Mira-Bhayandar","Thiruvananthapuram","Bhiwandi","Saharanpur",  "Guntur",  "Amravati","Bikaner","Noida",  "Jamshedpur","Bhilai Nagar","Cuttack","Kochi","Udaipur","Bhavnagar","Dehradun","Asansol",  "Nanded-Waghala","Ajmer","Jamnagar","Ujjain",  "Sangli","Loni",  "Jhansi",  "Pondicherry","Nellore",  "Jammu",  "Belagavi","Raurkela","Mangaluru","Tirunelveli",  "Malegaon","Gaya","Tiruppur",  "Davanagere","Kozhikode","Akola","Kurnool",  "Bokaro Steel City","Rajahmundry",  "Ballari","Agartala","Bhagalpur","Latur","Dhule","Korba","Bhilwara","Brahmapur","Mysore","Muzaffarpur","Ahmednagar","Kollam","Raghunathganj",  "Bilaspur","Shahjahanpur",  "Thrissur","Alwar","Kakinada",  "Nizamabad","Sagar",  "Tumkur","Hisar","Rohtak","Panipat","Darbhanga","Kharagpur",  "Aizawl","Ichalkaranji","Tirupati",  "Karnal","Bathinda","Rampur",  "Shivamogga","Ratlam",  "Modinagar",  "Durg","Shillong","Imphal","Hapur",  "Ranipet",  "Anantapur",  "Arrah","Karimnagar","Parbhani","Etawah",  "Bharatpur","Begusarai","New Delhi","Chhapra","Kadapa",  "Ramagundam","Pali","Satna",  "Vizianagaram",  "Katihar","Hardwar","Sonipat","Nagercoil",  "Thanjavur",  "Murwara (Katni)",  "Naihati",  "Sambhal",  "Nadiad","Yamunanagar","English Bazar",  "Eluru",  "Munger","Panchkula","Raayachuru","Panvel","Deoghar","Ongole",  "Nandyal",  "Morena",  "Bhiwani","Porbandar","Palakkad","Anand","Purnia","Baharampur",  "Barmer","Morvi","Orai",  "Bahraich",  "Sikar","Vellore",  "Singrauli",  "Khammam","Mahesana","Silchar","Sambalpur","Rewa",  "Unnao",  "Hugli-Chinsurah",  "Raiganj",  "Phusro","Adityapur","Alappuzha","Bahadurgarh","Machilipatnam",  "Rae Bareli",  "Jalpaiguri",  "Bharuch","Pathankot","Hoshiarpur","Baramula",  "Adoni",  "Jind","Tonk","Tenali",  "Kancheepuram",  "Vapi","Sirsa","Navsari","Mahbubnagar","Puri","Robertson Pet","Erode",  "Batala","Haldwani-cum-Kathgodam","Vidisha",  "Saharsa","Thanesar","Chittoor",  "Veraval","Lakhimpur",  "Sitapur",  "Hindupur",  "Santipur",  "Balurghat",  "Ganjbasoda",  "Moga","Proddatur",  "Srinagar","Medinipur",  "Habra",  "Sasaram","Hajipur","Bhuj","Shivpuri",  "Ranaghat",  "Shimla",  "Tiruvannamalai",  "Kaithal","Rajnandgaon","Godhra","Hazaribag","Bhimavaram",  "Mandsaur",  "Dibrugarh","Kolar","Bankura",  "Mandya","Dehri-on-Sone","Madanapalle",  "Malerkotla","Lalitpur",  "Bettiah","Pollachi",  "Khanna","Neemuch",  "Palwal","Palanpur","Guntakal",  "Nabadwip",  "Udupi","Jagdalpur","Motihari","Pilibhit",  "Dimapur","Mohali","Sadulpur","Rajapalayam",  "Dharmavaram",  "Kashipur","Sivakasi",  "Darjiling",  "Chikkamagaluru","Gudivada",  "Baleshwar Town","Mancherial","Srikakulam",  "Adilabad","Yavatmal","Barnala","Nagaon","Narasaraopet",  "Raigarh","Roorkee","Valsad","Ambikapur","Giridih","Chandausi",  "Purulia",  "Patan","Bagaha","Hardoi ",  "Achalpur","Osmanabad","Deesa","Nandurbar","Azamgarh",  "Ramgarh","Firozpur","Baripada Town","Karwar","Siwan","Rajampet",  "Pudukkottai",  "Anantnag",  "Tadpatri",  "Satara","Bhadrak","Kishanganj","Suryapet","Wardha","Ranebennuru","Amreli","Neyveli (TS)",  "Jamalpur","Marmagao","Udgir","Tadepalligudem",  "Nagapattinam",  "Buxar"]
var aadharIndex=0;
var symptoms=[
    "0",
    "1",
    "1",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
    ]
var medicine=[
    "0",
    "1",
    "1",
    "1"
    ]    
var dob=["1978-01-13",
"1978-01-30",
"1978-02-01",
"1978-02-07",
"1978-03-23",
"1978-04-30",
"1978-05-14",
"1978-05-17",
"1978-05-24",
"1978-05-28",
"1978-06-12",
"1978-06-29",
"1978-07-03",
"1978-07-12",
"1978-07-22",
"1978-08-03",
"1978-08-16",
"1978-09-24",
"1978-09-28",
"1978-10-05",
"1978-10-11",
"1978-12-16",
"1978-12-25",
"1978-12-31","1988-01-01",
"1988-01-08",
"1988-01-16",
"1988-01-30",
"1988-02-01",
"1988-03-07",
"1988-03-11",
"1988-03-12",
"1988-04-13",
"1988-04-15",
"1988-06-10",
"1988-06-26",
"1988-07-26",
"1988-07-28",
"1988-08-07",
"1988-08-12",
"1988-08-23",
"1988-09-07",
"1988-09-25",
"1988-09-26",
"1988-10-13",
"1988-10-30",
"1988-11-09",
"1988-12-15",
"1999-02-05",
"1999-02-22",
"1999-03-08",
"1999-03-12",
"1999-03-15",
"1999-04-04",
"1999-04-22",
"1999-04-29",
"1999-05-18",
"1999-05-26",
"1999-06-06",
"1999-06-21",
"1999-07-04",
"1999-07-13",
"1999-08-18",
"1999-08-25",
"1999-08-26",
"1999-09-05",
"1999-09-15",
"1999-09-23",
"1999-09-27",
"1999-11-01",
"1999-12-13",
"1999-12-18",
"1998-01-12",
"1998-01-30",
"1998-02-13",
"1998-03-15",
"1998-03-19",
"1998-04-19",
"1998-04-28",
"1998-05-06",
"1998-05-20",
"1998-05-24",
"1998-06-03",
"1998-06-07",
"1998-06-21",
"1998-06-29",
"1998-07-07",
"1998-07-10",
"1998-07-14",
"1998-09-10",
"1998-10-25",
"1998-11-08",
"1998-11-15",
"1998-11-20",
"1998-12-05",
"1998-12-15",
"1985-01-08",
"1985-02-17",
"1985-02-28",
"1985-03-17",
"1985-04-03",
"1985-04-11",
"1985-04-18",
"1985-04-25",
"1985-04-28",
"1985-05-08",
"1985-05-20",
"1985-06-27",
"1985-07-12",
"1985-07-28",
"1985-07-30",
"1985-08-30",
"1985-09-01",
"1985-09-04",
"1985-09-20",
"1985-10-02",
"1985-10-30",
"1985-11-27",
"1985-12-16",
"1985-12-18"

]

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
function arbMed()
{
    var med=["1","1","1","1"];
    var medIndex=getRandomArbitrary(0,med.length-1);
    med[medIndex]="0";
    return med;
}  
function arbSymp()
{
    var symp=[];
    for(var i =0;i<9;i++)
    {
        symp.push(String(getRandomArbitrary(0,1)))
    }
    return symp;
}  
// for(var i=0;i<100;i++)
// {
    
//     var nameIndex=getRandomArbitrary(0,names.length-1);
//     var dobIndex=getRandomArbitrary(0,dob.length-1);
//     var cityIndex=getRandomArbitrary(0,cities.length-1);
//     var genderIndex=getRandomArbitrary(0,gender.length-1);
//     var pincodeIndex=getRandomArbitrary(0,pincodes.length-1);
//     var stateIndex=getRandomArbitrary(0,states.length-1);
//     var arbMedicine=arbMed();
//     var arbSymptoms=arbSymp();
//     var tbstatus=getRandomArbitrary(0,3);
//     var symptomCount=getRandomArbitrary(0,10);
//     var user={"aadhar":aadhar[aadharIndex],"name":names[nameIndex],"dob":dob[dobIndex],"city":cities[cityIndex],"gender":gender[genderIndex],"address":"Allahabad","pincode":pincodes[pincodeIndex],"state":states[stateIndex],"symptoms":arbSymptoms,"medicine":arbMedicine,"date":Date.now(),"tbstatus":tbstatus,"symptomCount":symptomCount}
//     aadharIndex=aadharIndex+1;
//     $.ajax({
//         method:"POST",
//         url:"https://tbhack2.herokuapp.com/api/user",
//         data:user
//     }).done(function(data){
//         console.log(data);
        
//     }).fail(function(err){
//         console.log(err);
//     })
//     console.log(user);
// }
for(var i=0;i<100;i++)
{
    var initialCount=getRandomArbitrary(50,100);
    var finalCount  =getRandomArbitrary(10,50);
    var cityIndex=getRandomArbitrary(0,cities.length-1);
    var stateIndex=getRandomArbitrary(0,states.length-1);
    var data={"initialCount":initialCount,"presentCount":finalCount,"city":cities[cityIndex],"state":states[stateIndex]}
    $.ajax({
                method:"POST",
                url:"https://tbhack2.herokuapp.com/shop",
                data:data
            }).done(function(data){
                console.log(data);
                
            }).fail(function(err){
                console.log(err);
            })
}

