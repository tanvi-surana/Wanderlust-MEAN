var express=require("express");
var config=require("./config");
var cors=require("cors");
var bodyParser=require("body-parser")
var refAddState=require('./addState')
var fs=require('fs');
var app=express();

var https=require("https")


app.use(cors());

//application /something followed by json, that is why application/*+json
//This is in case of unsecured connection
//app.use(bodyParser.json({type: 'application/*+json'}))


//In case of secured use foll for body parser
app.use(bodyParser.json())


//Generally body-parser is for request

app.get("/wanderlust",function(request,response) {
	response.send("Testing express .. ")
})

app.post('/wanderlust/addState',function(request,response){

	//These are optional.We are doing here to put restrictions on the data,who can access etc
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Methods','GET','POST');
	//response.header allows us to set multiple values whereas setHeader allows us to set one value
	//In serviceLib.js we have put 'Content-Type':'application/x-www-form-urlencoded', which may change to json
	response.header("Access-Control-Allow-Headers","X-Requested-With,Content-Type");
	response.setHeader("Access-Control-Allow-Credentials","true");

	refAddState.Add(request.query.ID,request.query.Name);

	//console.log(request);
	//console.dir(request);
	console.dir(request.query);
    
    
    //secure connection data comes as a part of body, therfore change query to body
//    refAddState.Add(request.body.ID,request.body.Name);
//
//	//console.log(request);
//	//console.dir(request);
//	console.dir(request.body);
	response.end("Object recieved successfully")
})

app.set('port',config.port)

//secured connection
https.createServer({
    key:fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase:'tanvi',
},app).listen(app.get('port'),function(){
    console.log("server started at.. "+app.get('port'));
})


//unsecured connection
//app.listen(app.get('port'),function(){
//	console.log('Server started at ')
//})