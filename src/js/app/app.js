eventApp = angular.module('eva', ['ngRoute', 'ngResource']);
(function () {
    eventApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
        $locationProvider.html5Mode({
            enabled:true,
            requireBase:false,
        })
        $routeProvide
            .when('/',{
              templateUrl:'views/index.jade',
              controller:'EventListController'
            })
            .when('/events/:eventId', {
              templateUrl:'events/single-event.jade',
              controller:'EventDetailController'
            })
            .otherwise({
              redirectTo: '/'
            });
      }
    ])
})();



