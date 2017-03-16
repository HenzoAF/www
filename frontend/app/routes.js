angular.module("app").config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "app/templates/home.html",
    controller: 'homeController'
  })
  .otherwise({redirectTo: '/'});
}]);
