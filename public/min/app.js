"use strict";function MasterCtrl(a,b){var c=992;a.getWidth=function(){return window.innerWidth},a.$watch(a.getWidth,function(d,e){d>=c?angular.isDefined(b.get("toggle"))?a.toggle=!!b.get("toggle"):a.toggle=!0:a.toggle=!1}),a.toggleSidebar=function(){a.toggle=!a.toggle,b.put("toggle",a.toggle)},window.onresize=function(){a.$apply()}}function rdWidget(){var a={transclude:!0,template:'<div class="widget" ng-transclude></div>',restrict:"EA"};return a}function TestCtrl(a,b){a.title="Test Controller Up    1,2,3,4,5"}function rdWidgetBody(){var a={requires:"^rdWidget",scope:{loading:"@?",classes:"@?"},transclude:!0,template:'<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',restrict:"E"};return a}var app=angular.module("app",["ui.bootstrap","ui.router","ngCookies","ngResource"]);app.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("index",{url:"/",templateUrl:"./public/tpl/dashboard.html"}).state("tables",{url:"/tables",templateUrl:"./public/tpl/tables.html"}).state("test",{url:"/test",templateUrl:"./public/tpl/test.html",controller:"TestCtrl"})}]),angular.module("app").controller("MasterCtrl",["$scope","$cookieStore",MasterCtrl]),angular.module("app").directive("rdWidget",rdWidget),angular.module("app").controller("TestCtrl",["$scope","$cookieStore",TestCtrl]),angular.module("app").directive("rdWidgetBody",rdWidgetBody);