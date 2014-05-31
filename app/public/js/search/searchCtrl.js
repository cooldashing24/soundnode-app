'use strict';

app.controller('searchCtrl', function ($scope, $http, $stateParams) {
    $scope.title = 'Results for: ' + $stateParams.q;

    $scope.data = '';

    var searchUrl = 'http://api.soundcloud.com/tracks?limit=32&q=' + $stateParams.q + '&client_id=' + window.scClientId;

    $http({method: 'GET', url: searchUrl})
        .success(function(data, status, headers, config) {
            $scope.data = data;
        })
        .error(function(data, status, headers, config) {
            console.log('Error getting stream', status)
        });
});