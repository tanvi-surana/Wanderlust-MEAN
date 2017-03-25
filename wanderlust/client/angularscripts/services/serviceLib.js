//var serviceModule=angular.module('stateService',[]);
//
//serviceModule.service('stateService',['$http',function($http){
// 
//    getStateList=function()
//    {
//        return $http({
//                    url: 'https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=1qn1n28qup6qko2gh96ebv3l',
//                    method: 'GET',
//                    dateType:'json',
//                    //Pass cookies and other info as headers
//                    headers: {
//                        'Content-Type':'application/x-www-form-urlencoded'
//                    }
//                })
//                .then(function(response){
//                   return reponse;
//                })
//    }
//  
////This returns a singleton obj    
//        return{
//            stateServiceObj:getStateList
//        }
//                    
//}]);
 
var serviceModule=angular.module('ServiceModule',[]);
serviceModule.service('stateService',['$http',function($http){

                                     
      var getStateList=function()
       {
           return $http(
           {
               method:'GET',
               dataType:'json',
               headers:{
                           'Content-Type':'application/x-www-form-urlencoded'              
                       },
                url:'https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=zkx1edb9z2f4ln4kn66jkrht'                     
           }).then(function(response){
                                     return response
                                     })                      
       
                                     
       }
       return{
       stateServiceObj :getStateList                       
       }
                                     
                                     
}])


serviceModule.service('addStateService',['$http',function($http){


                                       
      var addStateInfo=function(obj)
       {
           console.log(obj);
           return $http(
           {
               method:'POST',
               dataType:'json',
               headers:{
                           'Content-Type':'application/json'              
                       },
                  url:'https://localhost:3000/wanderlust/addState',                 params:obj                     
           }).then(function(response){
                                     return response
                                     })                      
       
                                     
       }
       return{
       addStateServiceObj :addStateInfo                       
       }
                                     
                                     
}])