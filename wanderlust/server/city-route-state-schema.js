 var mongoose=require('mongoose');
 
// mongoose.connect('mongodb://localhost:27017');
// var db=mongoose.connection;

var Schema=mongoose.Schema;

var stateSchema =  new mongoose.Schema({
	 stateId:{
	 	       type:Number,
	 	       unique:true
	 	     },
		name:{
		 	    type:String
	     	 }	
});


var citySchema =  new mongoose.Schema({
	 cityId:{
	 	       type:Number,
	 	       unique:true
	 	    },
	 name:  {
	 	      type:String
	 	    },
	stateRef:[{type: Schema.Types.ObjectId, ref: 'StateModel'}]
});



var routeSchema =  new mongoose.Schema({
	 routeId:{
	 	       type:Number,
	 	       unique:true
	 	     },
	 fromCity: [{
	 	 	    type:Schema.Types.ObjectId,ref:'CityModel'
	 	 	   }],
	 toCity: [{
	 	 	    type:Schema.Types.ObjectId,ref:'CityModel'
	 	 	   }]	
});


module.exports.StateModel=mongoose.model('StateModel',stateSchema);
module.exports.CityModel=mongoose.model('CityModel',citySchema);
module.exports.RouteModel=mongoose.model('RouteModel',routeSchema);