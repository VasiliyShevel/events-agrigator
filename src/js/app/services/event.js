eventApp.service("httpDataLoader", ["$http", function($http) {
    this.load = function() {
      return $http.get("/api/events-list");
    }
}]);