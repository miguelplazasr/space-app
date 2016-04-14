/**
 * Master Controlle dev test 1
 */

angular.module('app')
    .controller('TestCtrl', ['$scope', '$cookieStore', TestCtrl]);

function TestCtrl($scope, $cookieStore) {
	
	$scope.title = 'Test Controller Up    1,2,3,4,5';

}