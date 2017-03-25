adminModule.controller('stateCtrl',['$scope','stateService','addStateService',function($scope,stateService,addStateService){
    
    
    $scope.selectedState={};
    
    stateService.stateServiceObj().then(function(res){
        console.log(res);
        $scope.result=res.data.Data;
    })
    
    $scope.selectState=function(){
        console.log($scope.selectedState);
        addStateService.addStateServiceObj($scope.selectedState).then(function(response){
        	console.log(response)
        })
    }
    
}]);