'use strict';

const baseUrl = '/api/v1';

angular.module('core.postcard').factory('Postcard', ['$resource',
  function($resource) {
    return $resource('postcard/:id', {
      id: '@id'
    }, {

      //get postcard list
      query: {
        url: baseUrl + '/postcard',
        method: 'GET',
        isArray: true
      }
    });
  }
]);
