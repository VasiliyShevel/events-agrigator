eventApp.factory('Event', [
  '$resource', function($resource) {
    return $resource('events/:eventId.:format', {
      eventId: 'events',
      format: 'json'
    }, {
      update: {method: 'PUT', params: {eventId: '@event'}, isArray: true}
    });
  }
]);

eventApp.controller('EventListController',[
  '$scope','$http', '$location',
  function($scope, $http, $location) {
    $http.get('events/events.json').success(function(data) {
      $scope.events = data;
    });
  }
]);

eventApp.controller('EventDetailController',[
  '$scope','$http', '$location', '$routeParams',
  function($scope, $http, $location, $routeParams) {
    $scope.eventId = $routeParams.eventId;
    $http.get('events/events.json').success(function(data) {
      $scope.events = data;
      for(var i = 0; i < data.length; i++) {
        $scope.event = data[i];
        console.log($routeParams.eventId, $scope.event.name)
        if($scope.event.id === $routeParams.eventId) {
            return $scope.event;
        }
      }
    });
  }
]);