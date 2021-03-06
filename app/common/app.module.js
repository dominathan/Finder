(function () {
  "use strict";

  angular
    .module('FindStuff', [
      'ngRoute',
      'underscore',
      'moment',
      'Search',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'common/views/home.html',
          controller: 'MainController'
        })
        .when('/404', {
          template: 'common/views/404.html'
        })
        .otherwise({ redirectTo: '/404'});
    });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });
  angular
    .module('moment', [])
    .factory('moment', function ($window) {
      return $window.moment;
    });




})();
