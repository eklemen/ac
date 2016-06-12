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
    function NavbarController($scope, $mdMenu, $timeout, $log, $mdSidenav, $mdComponentRegistry, $location) {
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
      vm.isActive = function(route){
        var base = $location.path().split('/')[1];
        var myPath = '/'+base;
        return route === myPath;
      }

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
            return;
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
        }, 300);
      };

      vm.menuItems = [
        {
          title: "Home",
          isList: false,
          href: "#/"
        },
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
              name: "Service",
              href: "#/commercial/service"
            },
            {
              name: "Installation",
              href: "#/commercial/installation"
            },
            {
              name: "Maint. Contracts",
              href: "#/commercial/contracts"
            }
          ]
        },
        {
          title: "Mini Splits",
          isList: true,
          subItems: [
            {
              name: "General",
              href: "#/miniSplit/general"
            },
            {
              name: "Products",
              href: "#/miniSplit/products"
            }
          ]
        },
        {
          title: "Indoor Air Quality",
          isList: true,
          subItems: [
            {
              name: "General",
              href: "#/iaq/general"
            },
            {
              name: "Duct Cleaning",
              href: "#/iaq/cleaning"
            },
            {
              name: "Attic Insulation",
              href: "#/iaq/insulation"
            }
          ]
        },
        {
          title: "Refrigeration",
          isList: false,
          href: "#/refrigeration"
        }
      ]
    }
  }

})();
