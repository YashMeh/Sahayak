var express = require("express"),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    app = express()

mongoose.connect("mongodb://localhost/tbhack");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var apiroutes = require("./routes/apiRoutes"),
    apiroutesDoc = require("./routes/apiRoutesDoc"),
    patientroutes = require("./routes/patientList"),
    homeroutes = require("./routes/pageRoutes"),
    logroutes = require("./routes/logRoutes"),
    logreportroutes = require("./routes/logReportRoutes"),
    shoproutes = require("./routes/shopRoutes")
app.use(express.static(__dirname + '/views'));
app.use("/api/user", apiroutes);
app.use("/api/doc", apiroutesDoc);
app.use("/api/patient", patientroutes);
app.use("/", homeroutes);
app.use("/log", logroutes);
app.use("/report", logreportroutes);
app.use("/shop", shoproutes)

app.get("/", function (req, res) {
    res.send("The api routes are at /api/user  and /api/doc");
})
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else
        console.log("Server running at port " + port);
})