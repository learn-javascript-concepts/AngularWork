(function(angular) {

    var appModule = angular.module("appModule", ["ngRoute"]);

    var loginController = function($scope, $location){
        $scope.userName = "";
        $scope.userPassword = "";
        $scope.loginClicked = function() {
            alert("hi " + $scope.userName);
            $location.path("/demo");            
        }
    }

    appModule.controller("loginController", loginController);

    var demoController = function($scope){
        $scope.attribute = "Khadoose and bhullakad";
    }

    appModule.controller("demoController", demoController);

    appModule.config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider.when("/", {
            templateUrl: "./partials/login.vash",
            controller: "loginController"
        }).when("/demo", {
            templateUrl: "./partials/demo.vash",
            controller: "demoController"
        });
        
    });

})(window.angular);