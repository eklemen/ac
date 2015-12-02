(function() {
  'use strict';

  angular
    .module('ekSites')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
