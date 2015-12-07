(function() {
  'use strict';

  angular
    .module('ekSites')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($mdMenu, $timeout) {
      var vm = this;
      var timer;

      vm.mouseIn = function(){
        $timeout.cancel(timer);
      };

      vm.mouseOut = function(){
        timer = $timeout(function () {
          $mdMenu.hide(null, { closeAll: true })
        }, 500);
      };
    }
  }

})();
