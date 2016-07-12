(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $httpParamSerializerJQLike) {
    var self = this;

    self.brands = [
      {
        src: "assets/images/brands/brand01.png",
        alt: "American Standard"
      },
      {
        src: "assets/images/brands/brand02.png",
        alt: "Amana"
      },
      {
        src: "assets/images/brands/brand03.png",
        alt: "Goodman"
      },
      {
        src: "assets/images/brands/brand04.png",
        alt: "Carrier"
      },
      {
        src: "assets/images/brands/brand05.png",
        alt: "Lennox"
      },
      {
        src: "assets/images/brands/brand06.png",
        alt: "Trane"
      },
      {
        src: "assets/images/brands/brand07.png",
        alt: "bryant"
      },
      {
        src: "assets/images/brands/brand08.png",
        alt: "YORK"
      },
      {
        src: "assets/images/brands/brand09.png",
        alt: "Westinghouse"
      },
    ]

    self.message = {};
    self.alertSuccess = function(){
      swal('Thanks!',
        'We will get back to you soon.',
        'success');
    };
    self.alertError = function(){
      swal('Oops...',
        'There was a problem sending your email.',
        'error');
    };

    self.sendMessage = function() {
      $http({
        method  : 'POST',
        url     : '//formspree.io/office@zenitservice.com',
        data    : $httpParamSerializerJQLike(self.message), // pass in data as strings
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        Accept: 'application/json'
       })
      .success(function(data) {
          if (!data.success) {
            // if not successful, bind errors to error variables
            self.alertError()
            self.errorName = data.errors.name;
            self.errorSuperhero = data.errors.superheroAlias;
          } else {
            // if successful, bind success message to message
            self.alertSuccess();
            self.message = data.message;
          }
        });
    }

    
    self.animateElementIn = function($el) {
      $el.removeClass('hidden');
      $el.addClass('animated fadeInUp');
    };

    // self.classAnimation = '';
    // function showToastr() {
    //   self.classAnimation = '';
    // }

  }
})();