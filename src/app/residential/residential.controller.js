(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('ResidentialController', ResidentialController);

  /** @ngInject */
  function ResidentialController($scope) {
    var self = this;
	self.contracts = [
		'assets/images/site-photos/Commercial_Maintanance_1.jpeg',
		'assets/images/site-photos/Commercial_Maintanance_2.jpeg',
		'assets/images/site-photos/Commercial_Maintanance_3.jpeg'
	]
    
  }
})();