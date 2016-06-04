'use strict';

angular.module('postcardDetail').component('postcardDetail', {
  templateUrl: 'postcard-detail/postcard-detail.template.html',
  controller: ['$routeParams', 'Postcard',
    function PhoneDetailController($routeParams, Postcard) {
      var self = this;
      self.postcard = Postcard.get({
        id: $routeParams.id
      }, function(phone) {
        self.imageUrl = postcard.imageUrl;
      });
    }
  ]
});
