const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var n1=Number(e.body.weight);
    var n2=Number(req.body.height);
    var result=n1/(n2*n2);
    res.send("The BMI is "+result);
});

app.listen(3000,function(){
    console.log("Server has started on the port 3000.");
});
