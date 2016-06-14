(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($http, $httpParamSerializerJQLike, NgMap) {
    var self = this;

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

    self.myNavFunc = function (){
      // If it's an iPhone..
      if( (navigator.platform.indexOf("iPhone") != -1) 
          || (navigator.platform.indexOf("iPod") != -1)
          || (navigator.platform.indexOf("iPad") != -1))
           window.open("//maps.apple.com/?saddr=My+Location&daddr=5360+McIntosh+Point,+Sanford,+FL/@28.7336605,-81.3018416,17z");
      else
           window.open("//maps.google.com/?saddr=My+Location&daddr=5360+McIntosh+Point,+Sanford,+FL/");
    }

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
          console.log(data);

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
      console.log('banana');
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