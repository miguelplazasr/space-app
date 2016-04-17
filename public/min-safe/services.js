/**
 * Created by miguelplazas on 13/04/16.
 */

var domain = 'http://eonet.sci.gsfc.nasa.gov/api/';
var version = domain + 'v2.1/';

/*
angular
    .module('app')
    .factory('Categories', Categories);
*/

/* Categories */

/*
function Categories($resource) {

    var url = version + 'categories';

    var category = $resource(url, {
            id: '@id', source: '@sourceId', status: '@status', days: '@days'
        },
        {
            all: {
                method: 'get',
                isArray: true,
            }
        });

    return category;
}
*/


app.factory('Categories', ['$resource', function($resource) {

    var url = version + 'categories';

    var category = $resource('http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories', {
        id: '@id', source: '@sourceId', status: '@status', days: '@days'
    },
        {
            all: {
                method: 'get',
                isArray: true,
            }
        });

    return $resource('http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories');
}])