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
      // Contact
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'con'
      })
      // About
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
      .when('/residential/contracts/', {
        templateUrl: 'app/residential/partials/contracts.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })

      // Commercial
      .when('/commercial/service/', {
        templateUrl: 'app/commercial/partials/service.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .when('/commercial/contracts/', {
        templateUrl: 'app/commercial/partials/contracts.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .when('/commercial/installation', {
        templateUrl: 'app/commercial/partials/installation.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })

      // Mini Splits
      .when('/miniSplit/general', {
        templateUrl: 'app/miniSplit/partials/general.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .when('/miniSplit/products', {
        templateUrl: 'app/miniSplit/partials/products.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })

      // IAQ
      .when('/iaq/general', {
        templateUrl: 'app/iaq/partials/general.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .when('/iaq/cleaning/', {
        templateUrl: 'app/iaq/partials/cleaning.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .when('/iaq/insulation', {
        templateUrl: 'app/iaq/partials/insulation.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })

      // Refrigeration 
      .when('/refrigeration/', {
        templateUrl: 'app/refrigeration/partials/refrigeration.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })

      .otherwise({
        redirectTo: '/'
      });
  }

})();
