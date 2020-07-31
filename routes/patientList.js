var request=require("request"),
    express=require("express"),
    router=express.Router()

var gs=[];
function distanceBetween(lat1,lon1,lat2,lon2)
{
    var R = 6371e3; // metres
    var pi=Math.PI;
    
    var φ1 = lat1*(pi/180);
    var φ2 = lat2*(pi/180);
    var Δφ = (lat2-lat1)*(pi/180);
    var Δλ = (lon2-lon1)*(pi/180);
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = (R * c)/1000;
return d;
}
function routerFunction(docId)
{
    var url="https://tbhack2.herokuapp.com/api/doc/"+docId;
    var docPc;
    var docLa;
    var docLo;
    var userList;
    
    return new Promise(function(resolve,reject){
        request(url,function(err1,response1,body1){
            if(!err1 && response1.statusCode==200)
            {
                var docDetails=JSON.parse(body1);
                docPc=docDetails.pincode;
            }
            var url2="https://maps.googleapis.com/maps/api/geocode/json?address="+docPc+"&key=AIzaSyAvEpdyB6qT4qmaU_qkkx8ziwX_8kAOEp0";
            request(url2,function(err2,response2,body2){
                if(!err2 && response2.statusCode==200){
                    var docCo=JSON.parse(body2);
                    docLa=docCo.results[0].geometry.bounds.northeast.lat;
                    docLo=docCo.results[0].geometry.bounds.northeast.lng;
                }
                var url3="https://tbhack2.herokuapp.com/api/user";
                request(url3,function(err3,response3,body3)
                {
                    if(!err3 && response3.statusCode==200)
                    {
                        var userL=JSON.parse(body3);
                        userList=userL;
                        userList.forEach(function(user){
                            var userPc=user.pincode;
                            //var currUser=userList[i];
                            var url4="https://maps.googleapis.com/maps/api/geocode/json?address="+userPc+"&key=AIzaSyAvEpdyB6qT4qmaU_qkkx8ziwX_8kAOEp0";
                            request(url4,function(err4,response4,body4){
                                if(!err4 && response4.statusCode==200)
                                {
                                    var userDet=JSON.parse(body4);
                                    var userLa=userDet.results[0].geometry.bounds.northeast.lat;
                                    var userLo=userDet.results[0].geometry.bounds.northeast.lng;
                                    var dist=distanceBetween(docLa,docLo,userLa,userLo);
                                    console.log("User Coordinates "+userLa,userLo);
                                    console.log("Doctor Coordinates "+docLa,docLo);
                                    console.log("distance "+dist);
                                    if(dist<100)
                                    {
                                        gs.push(user);
                                    }
                                }
                            })    
                           
                        });
                        
                    }
                    setTimeout(function(e){
                        resolve(gs);
                    },10000);
                
                    
                })
                
            })
        })
    })
}
router.get("/:id",function(req,res){
    var ID=req.params.id;
    routerFunction(ID).then(function(e){
        console.log(e);
        res.json(e);
        gs=[];
    })
})
module.exports=router    