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

        var url1 = {
            "title": "EONET Event Categories",
                "description": "List of all the available event categories in the EONET system",
                "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories",
                "categories": [
                {
                    "id": 6,
                    "title": "Drought",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/6",
                    "description": "Long lasting absence of precipitation affecting agriculture and livestock, and the overall availability of food and water.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/6"
                },
                {
                    "id": 7,
                    "title": "Dust and Haze",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/7",
                    "description": "Related to dust storms, air pollution and other non-volcanic aerosols. Volcano-related plumes shall be included with the originating eruption event.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/7"
                },
                {
                    "id": 16,
                    "title": "Earthquakes",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/16",
                    "description": "Related to all manner of shaking and displacement. Certain aftermath of earthquakes may also be found under landslides and floods.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/16"
                },
                {
                    "id": 9,
                    "title": "Floods",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/9",
                    "description": "Related to aspects of actual flooding--e.g., inundation, water extending beyond river and lake extents.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/9"
                },
                {
                    "id": 14,
                    "title": "Landslides",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/14",
                    "description": "Related to landslides and variations thereof: mudslides, avalanche.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/14"
                },
                {
                    "id": 19,
                    "title": "Manmade",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/19",
                    "description": "Events that have been human-induced and are extreme in their extent.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/19"
                },
                {
                    "id": 15,
                    "title": "Sea and Lake Ice",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/15",
                    "description": "Related to all ice that resides on oceans and lakes, including sea and lake ice (permanent and seasonal) and icebergs.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/15"
                },
                {
                    "id": 10,
                    "title": "Severe Storms",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/10",
                    "description": "Related to the atmospheric aspect of storms (hurricanes, cyclones, tornadoes, etc.). Results of storms may be included under floods, landslides, etc.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/10"
                },
                {
                    "id": 17,
                    "title": "Snow",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/17",
                    "description": "Related to snow events, particularly extreme/anomalous snowfall in either timing or extent/depth.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/17"
                },
                {
                    "id": 18,
                    "title": "Temperature Extremes",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/18",
                    "description": "Related to anomalous land temperatures, either heat or cold.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/18"
                },
                {
                    "id": 12,
                    "title": "Volcanoes",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/12",
                    "description": "Related to both the physical effects of an eruption (rock, ash, lava) and the atmospheric (ash and gas plumes). ",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/12"
                },
                {
                    "id": 13,
                    "title": "Water Color",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/13",
                    "description": "Related to events that alter the appearance of water: phytoplankton, red tide, algae, sediment, whiting, etc.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/13"
                },
                {
                    "id": 8,
                    "title": "Wildfires",
                    "link": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8",
                    "description": "Wildfires includes all nature of fire, including forest and plains fires, as well as urban and industrial fire events. Fires may be naturally caused or manmade.",
                    "layers": "http://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/8"
                }
            ]
        };

        $scope.title = 'Categories';

        $scope.categories1 = url1;

        $http.get(url)
            .success(function (data) {
                $scope.categories = data.categories;

                console.log($scope.categories);
            })
            .error(function (err) {

            });


    }]);