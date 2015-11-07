(function() {
  'use strict';

  angular
    .module('ac')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;

    $scope.myInterval = 40000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [
      {
        image: 'assets/images/vans.png'
      },
      {
        image: 'assets/images/units.png'
      },
      {
        image: 'assets/images/people.png'
      }
    ];

    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1446245474424;
    // vm.showToastr = showToastr;

    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }
  }
})();
