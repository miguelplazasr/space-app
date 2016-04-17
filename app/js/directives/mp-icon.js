/**
 * Icons Directive
 */

app.directive('mpIcon', ['$filter', function($filter){

    var styles = {
        "categories": [
            {
                "id": 6,
                "title": "Drought",
                "style": 'drought'
            },
            {
                "id": 7,
                "title": "Dust and Haze",
                "style": 'dust-haze'
            },
            {
                "id": 16,
                "title": "Earthquakes",
                "style": 'earthquakes'
            },
            {
                "id": 9,
                "title": "Floods",
                "style": 'floods'
            },
            {
                "id": 14,
                "title": "Landslides",
                "style": 'landslides'
            },
            {
                "id": 19,
                "title": "Manmade",
                "style": 'manmade'
            },
            {
                "id": 15,
                "title": "Sea and Lake Ice",
                "style": 'sea-lakes-ice'
            },
            {
                "id": 10,
                "title": "Severe Storms",
                "style": 'severe-storms'
            },
            {
                "id": 17,
                "title": "Snow",
                "style": 'snow'
            },
            {
                "id": 18,
                "title": "Temperature Extremes",
                "style": 'temperature-extremes'
            },
            {
                "id": 12,
                "title": "Volcanoes",
                "style": 'volcanoes'
            },
            {
                "id": 8,
                "title": "Wildfires",
                "style": 'wildfires'
            },
            {
                "id": 13,
                "title": "Water Color",
                "style": 'water-color'
            }
        ]
    };
    var directive = {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            category: "="
        },

        controller: function($scope){

            var result = $filter('filter')(styles.categories, {title: $scope.category})[0];

            $scope.style = result.style;

            console.log($scope.category);
            console.log(result);

        },

        template: '<div class="widget-icon {{style}}-color pull-left"><i class="icon {{style}}-icon"></i></div>',

    };

    return directive;
}]);
