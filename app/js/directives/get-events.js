/**
 * Created by miguelplazas on 14/04/16.
 */



app.directive('getEvents', ['$http', function($http) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            category:"="
        },
        controller:function($scope){

            $scope.gallery = [];

            $http({
                method: 'GET',
                url:'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/' + $scope.category,
                params: {
                    status: 'open'
                }
            }).success(function(data){
                $scope.resultado = data.events.length;
            });
        },
        template: '<div>{{resultado}}</div>',
    };


}]);