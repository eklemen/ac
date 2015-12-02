(function() {
  'use strict';

  angular
    .module('chairYg')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
