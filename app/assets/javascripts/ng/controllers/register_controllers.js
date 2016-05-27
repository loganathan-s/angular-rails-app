'use strict';
angular.module('Blog')
    .controller('RegistrationController', ['$scope','userService','ngProgressFactory', function($scope, userService, ngProgressFactory) {
        $scope.user = {}
        $scope.showUsers = false
        $scope.showError = false
        //$scope.progressbar = ngProgressFactory.createInstance();

        $scope.registerUser  = function() {
            $scope.showError = true
            $scope.errorMessage = $scope.user
            if ($scope.email && $scope.password && $scope.password === $scope.password_confirmation) {
                //$scope.progressbar.start();
                $scope.newUser = {authenticity_token: $scope.authenticity_token, email: $scope.email, password: $scope.password, password_confirmation: $scope.password_confirmation}
                userService.user().save($scope.newUser, function(response){
                    console.log(response);
                    $scope.showError = true
                    $scope.errorMessage = $scope.newUser;
                    //  $scope.progressbar.stop();
                });
            }
            else {

                $scope.showError = true
                $scope.errorMessage = $scope.newUser;
            }

        };
    }]);
