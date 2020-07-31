var request=require("request"),
    express=require("express"),
    router=express.Router()

var gs=[];
function routerFunction(aadhar)
{
    var url="https://tbhack2.herokuapp.com/log";
    return new Promise(function(resolve,reject){
        request(url,function(err,response,body){
            if(!err && response.statusCode==200){
            var logList=JSON.parse(body);
            logList.forEach(function(log){
                if(log.aadhar==aadhar)
                {
                    gs.push(log);
                }
            })
        }
        })

        setTimeout(function(e){
            resolve(gs);
        },10000);
    })
                
            
}
router.get("/:num",function(req,res){
    var ID=req.params.num;
    routerFunction(ID).then(function(e){
        console.log(e);
        res.json(e);
        gs=[];
    })
})
module.exports=router    