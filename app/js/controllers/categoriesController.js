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

                angular.forEach(data.categories, function(rs) {
                    console.log(rs.id);

                    $http.get(url + '/' + rs.id, {
                        params: {
                            status: 'closed'
                        }
                    })
                        .success(function(res){
                            console.log(res);
                        })

                })

            })
            .error(function (err) {

            });




    }]);