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

      // $scope.$watch('demo.isOpen', function(isOpen) {
      //   if (isOpen) {
      //     $timeout(function() {
      //       $scope.tooltipVisible = self.isOpen;
      //     }, 600);
      //   } else {
      //     $scope.tooltipVisible = self.isOpen;
      //   }
      // });

      // vm.mouseIn = function(){
      //   $timeout.cancel(timer);
      // };

      // vm.mouseOut = function(){
      //   timer = $timeout(function () {
      //     $mdMenu.hide(null, { closeAll: true })
      //   }, 500);
      // };
    }
  }

})();
