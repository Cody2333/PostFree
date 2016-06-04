'use strict';

const baseUrl = '/api/v1';

angular.module('resources', ['ngResource'])

  .factory('UserService', ['$resource', function($resource) {
    return $resource(baseUrl + '/user/:id', {
      id: '@id'
    },
      {
        'query': {
          //  /phone/:phone/university/:universityId/building/:buildingId/dorm/:dormId/name/:name
          url: baseUrl + '/user/:p1/:p1Val/:p2/:p2Val/:p3/:p3Val/:p4/:p4Val/:p5/:p5Val',
          method: 'GET',
          isArray: false
        },
        'update': {
          method: 'PATCH'
        },
        'login': {
          method: 'POST',
          url: baseUrl + '/user/login',
          isArray: false
        },
        'signup': {
          method: 'POST',
          url: baseUrl + '/user/create',
          isArray: false
        }
      });
  }])
