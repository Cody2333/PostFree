'use strict';

angular.module('postcardList').component('postcardList', {
  templateUrl: 'postcard-list/postcard-list.template.html',
  controller: ['Postcard',
    function PhoneListController(Postcard) {
      this.postcards = Postcard.query();
    }
  ]
});
