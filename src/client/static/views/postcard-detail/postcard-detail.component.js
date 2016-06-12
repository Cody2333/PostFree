'use strict';

angular.module('postcardDetail').component('postcardDetail', {
  templateUrl: 'views/postcard-detail/postcard-detail.template.html',
  controller: ['$stateParams', 'Postcard',
    function PostcardDetailController($stateParams, Postcard) {
      var self = this;
      console.log($stateParams);
      self.postcard = Postcard.get({
        id: $stateParams.postId
      }, function(res) {
        self.imageUrl = res.imageUrl;
      });
    }
  ]
});
