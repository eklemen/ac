(function() {
  'use strict';

  angular
    .module('ekSites')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'con'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      // Residential routes
      .when('/residential/service/', {
        templateUrl: 'app/residential/partials/service.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .when('/residential/installation/', {
        templateUrl: 'app/residential/partials/installation.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .when('/residential/repairs/', {
        templateUrl: 'app/residential/partials/repairs.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      // .when('/residential/contracts/', {
      //   templateUrl: 'app/residential/partials/contracts.html',
      //   controller: 'ResidentialController',
      //   controllerAs: 'res'
      // })

      // Commercial routes
      .when('/commercial/generalInfo/', {
        templateUrl: 'app/residential/partials/generalInfo.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
