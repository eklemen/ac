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
    function NavbarController($scope, $mdMenu, $timeout, $log, $mdSidenav, $mdComponentRegistry) {
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
      vm.toggle = angular.noop;
        vm.isOpen = function() { return false };
        
        $mdComponentRegistry
          .when('left')
          .then( function(sideNav){

        vm.isOpen = angular.bind( sideNav, sideNav.isOpen );
        vm.toggle = angular.bind( sideNav, sideNav.toggle );

      });

      vm.close = function() {
        $mdSidenav('left').close()
          .then(function(){
            $log.debug("close LEFT is done");
          });
      };

      $scope.$on('$routeChangeStart', function(next, current) { 
        vm.close();
      });

      vm.mouseIn = function(){
        $timeout.cancel(timer);
      };

      vm.mouseOut = function(){
        timer = $timeout(function () {
          $mdMenu.hide(null, { closeAll: true })
        }, 500);
      };

      vm.menuItems = [
        {
          title: "About",
          isList: false,
          href: "#/about"
        },
        {
          title: "Contact",
          isList: false,
          href: "#/contact"
        },
        {
          title: "Residential",
          isList: true,
          subItems: [
            {
              name: "Service",
              href: "#/residential/service"
            },
            {
              name: "Installation",
              href: "#/residential/installation"
            },
            {
              name: "Repairs",
              href: "#/residential/repairs"
            },
            {
              name: "Maint. Contracts",
              href: "#/residential/contracts"
            }
          ]
        },
        {
          title: "Commercial",
          isList: true,
          subItems: [
            {
              name: "Controls",
              href: "#/commercial/controls"
            },
            {
              name: "IAQ",
              href: "#/commercial/iaq"
            },
            {
              name: "Maint. Contracts",
              href: "#/commercial/contracts"
            }
          ]
        }
      ]
    }
  }

})();
