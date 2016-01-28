eventApp.controller("EventListCtrl", ["$scope", "myData", function ($scope, myData) {
    $scope.data = myData.data;
}]);

eventApp.controller("EventDetailCtrl", ["$scope", "$routeParams", "myData", function ($scope, $routeParams, myData) {
    $scope.eventId = $routeParams.eventId;
    $scope.data = myData.data;
    for(var i = 0; i < myData.data.length; i++) {
        $scope.event = myData.data[i];
        if($scope.event.id === $routeParams.eventId) {
            return $scope.event;
        }
      }
}]);