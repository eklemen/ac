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
      // vm.isOpen = true;
      // vm.checkOpen = function() {
      //   if(vm.isOpen){
      //     vm.isOpen = false;
      //   }
      //   vm.isOpen = true;
      // }
      // vm.closeMenu = function(){
      //   $timeout(function(){$mdMenu.hide(null, { closeAll: true })}, 500);
      // }


      var timer;
      vm.show = false;

      vm.mouseIn = function(){
        $timeout.cancel(timer);
        vm.show = true;
      };

      vm.mouseOut = function(){
        timer = $timeout(function () {
          $mdMenu.hide(null, { closeAll: true })
          // vm.show = false;
        }, 500);
      };
    }
  }

})();
