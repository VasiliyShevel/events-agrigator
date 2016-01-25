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
    ]).run(['$rootScope',
        '$document',
        '$timeout',
        function ($rootScope, $document, $timeout) {
          watchDigest();

          function watchDigest () {
            var unregister = $rootScope.$watch(function(){
              console.log('digest-end');
              unregister();

              $timeout(function(){
                $rootScope.$emit('digest-end');
                watchDigest();
              },0,false);
            });
          }
      }]);
})();



