(function(angular) {

    var appModule = angular.module("appModule", ["ngRoute"]);

    var loginController = function($scope, $location){
        $scope.userName = "";
        $scope.userPassword = "";
        $scope.loginClicked = function() {
            $location.path("/demo");            
        }
    }

    appModule.controller("loginController", loginController);

    var demoController = function($scope){
        $scope.attribute = "...";
    }

    appModule.controller("demoController", demoController);

})(window.angular);