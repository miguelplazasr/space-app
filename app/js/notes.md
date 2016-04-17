##Retrieve all events by category

```
$http.get(url)
            .success(function (data) {
                $scope.categories = data.categories;
                angular.forEach(data.categories, function(rs) {
                    console.log(rs.id);
                    $http.get(url + '/' + rs.id, {
                        params: {
                            status: 'open'
                        }
                    })
                        .success(function(res){
                            console.log(res);
                        })
                })
            })
            .error(function (err) {
            });
```