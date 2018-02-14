(function(angular) {
    
    var appModule = angular.module("appModule");

    appModule.config(function($routeProvider, $locationProvider){
        $routeProvider.when("/", {
            templateUrl: "./partials/login.html",
            controller: "loginController"
        }).when("/demo", {
            templateUrl: "./partials/demo.html",
            controller: "demoController"
        });
        
        $locationProvider.html5Mode(true);
    });


})(window.angular)