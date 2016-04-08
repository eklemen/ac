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
      // .when('/residential/contracts/', {
      //   templateUrl: 'app/residential/partials/contracts.html',
      //   controller: 'ResidentialController',
      //   controllerAs: 'res'
      // })

      // Commercial
      .when('/commercial', {
        templateUrl: 'app/commercial/partials/commercial.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      // Maintenence Contracts
      .when('/maintenenceContracts', {
        templateUrl: 'app/manitContracts/maintCont.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      // Mini Splits
      .when('/miniSplit/general', {
        templateUrl: 'app/manitContracts/maintCont.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .when('/miniSplit/products', {
        templateUrl: 'app/manitContracts/maintCont.html',
        controller: 'ResidentialController',
        controllerAs: 'res'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
