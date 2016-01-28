eventApp = angular.module('eva', ['ngRoute', 'ngResource']);
eventApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
    $locationProvider.html5Mode({
        enabled:true,
        requireBase:false,
    })
    $routeProvide
      .when('/',{
        templateUrl:'/templates/index.html',
        controller:'EventListCtrl',
        controllerAs: "Events",
        resolve: {
            myData: ["httpDataLoader", function(httpDataLoader){
                return httpDataLoader.load();
            }]
        }
      })
      .when('/events/:eventId', {
        templateUrl:'/templates/single-event.html',
        controller:'EventDetailCtrl',
        controllerAs: "EventDetail",
        resolve: {
            myData: ["httpDataLoader", function(httpDataLoader){
                return httpDataLoader.load();
            }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);



