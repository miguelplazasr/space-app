/**
 * Master Controlle dev test 1
 */

angular.module('app')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };
}
/**
 * Created by miguelplazas on 13/04/16.
 */

app.controller('CategoryCtrl', [
    '$scope',
    '$cookieStore',
    '$http',
    function ($scope, $cookieStore, $http) {

        var url = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories';

        $scope.title = 'Categories';

        $scope.categories = [];

        $http.get(url)
            .success(function (data) {
                $scope.categories = data.categories;

            })
            .error(function (err) {

            });




    }]);