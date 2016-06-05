'use strict';

angular.module('postcardList').component('postcardList', {
  templateUrl: 'views/postcard-list/postcard-list.template.html',
  controller: ['Postcard',
    function PostcardListController(Postcard) {
      this.postcards = Postcard.query();
    }
  ]
});
