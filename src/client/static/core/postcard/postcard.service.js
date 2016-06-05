'use strict';

//const baseUrl = '/api/v1';
var baseUrl = '';
angular.module('core.postcard').factory('Postcard', ['$resource',
  function($resource) {
    return $resource('json/postcard/:id.json', {
      id: '@id'
    }, {

      //get postcard list
      query: {
        //url: baseUrl + '/postcard',
        params: {
          id: 'postcardList'
        },
        method: 'GET',
        isArray: true
      }
    });
  }
]);
