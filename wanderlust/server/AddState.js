var mongoose=require('mongoose');

var StateModel=require('./city-route-state-schema.js').StateModel;
var config=require('./config')
//mongoose.connect('mongodb://localhost:27017/wanderLust');

var options={
  user:'tanvi',
  pass:'tanvi',
  auth:{
    authdb:'admin'
  }
}
mongoose.connect(config.url,config.mongodb,config.mongoport,options);

//Function expression
//The function below will be exported in another 
module.exports.Add=function(Id,Name){
    console.log(Id);
    console.log(Name);
    

    var db=mongoose.connection;
    db.once('open',function(){
    })

    var obj=new StateModel({
        stateId:Id,
        name:Name
    });

    obj.save(function(err,res){
     if(!err)
     {
        console.log(res);
     }   
  })


}


