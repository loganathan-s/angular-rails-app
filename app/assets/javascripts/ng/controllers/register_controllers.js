'use strict';
angular.module('Blog')
    .controller('RegistrationController', ['$scope', function($scope) {
        $scope.user = {email: "", password: "", password_confirmation: ""}
        $scope.registerUser  = function(user) {

        };
    }]);
