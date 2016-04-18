/**
 * Created by TextMate.
 * User: miguelplazas
 * Date: 11/04/16 
 * Time: 22:37
 */

"use strict";

var app = angular.module('app',
    [
		'ui.bootstrap',
        'ui.router',
		'ngCookies',
        'ngResource',
    ]);
	
/**
 * Route configuration for the RDash module.
 */
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: './views/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: './views/tables.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: './views/categories.html',
				controller: 'CategoryCtrl'
            })
			;
    }
]);