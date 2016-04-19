/**
 * Widget Directive
 */

angular
    .module('app')
    .directive('rdWidget', rdWidget);

function rdWidget() {
    var directive = {
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
};
/**
 * Widget Header Directive
 */

angular
    .module('RDash')
    .directive('rdWidgetHeader', rdWidgetTitle);

function rdWidgetTitle() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            title: '@',
            icon: '@'
        },
        transclude: true,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
        restrict: 'E'
    };
    return directive;
};
/**
 * Widget Body Directive
 */

angular
    .module('app')
    .directive('rdWidgetBody', rdWidgetBody);

function rdWidgetBody() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            loading: '@?',
            classes: '@?'
        },
        transclude: true,
        template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: 'E'
    };
    return directive;
};
/**
 * Widget Footer Directive
 */

angular
    .module('RDash')
    .directive('rdWidgetFooter', rdWidgetFooter);

function rdWidgetFooter() {
    var directive = {
        requires: '^rdWidget',
        transclude: true,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: 'E'
    };
    return directive;
};
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
        controller:['$scope', function($scope){

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
        }],
        template: '<div>{{resultado}}</div>',
    };


}]);
/**
 * Loading Directive
 * @see http://tobiasahlin.com/spinkit/
 */

angular
    .module('RDash')
    .directive('rdLoading', rdLoading);

function rdLoading() {
    var directive = {
        restrict: 'AE',
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
    return directive;
};
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
