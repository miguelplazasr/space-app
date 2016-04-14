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