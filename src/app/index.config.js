(function() {
  'use strict';

  angular
    .module('ekSites')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider) {
    var mainColorMap = $mdThemingProvider.extendPalette('green', {
      '400': '78ba3b',
      '500': '78ba3b',
      'hue-2': '538624'
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('mainColor', mainColorMap);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
      .primaryPalette('mainColor')
  }

})();