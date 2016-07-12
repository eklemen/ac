(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('ResidentialController', ResidentialController);

  /** @ngInject */
  function ResidentialController() {
    var self = this;
	self.contracts = [
		'assets/images/site-photos/Commercial_Maintenance_1.jpeg',
		'assets/images/site-photos/Commercial_Maintenance_2.jpeg',
		'assets/images/site-photos/Commercial_Maintenance_3.jpeg'
	]
    
  }
})();