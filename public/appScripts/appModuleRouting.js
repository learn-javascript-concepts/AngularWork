define([], function() {

    var routeInitializer = {

        initializeAngularRouting: function() {

            var appModule = angular.module("appModule");

            appModule.config(function($routeProvider, $locationProvider){

                $locationProvider.html5Mode(true);

                $routeProvider.when("/", {
                    templateUrl: "./partials/login.html",
                    controller: "loginController"
                });
            });

        }
    }

    return routeInitializer;
});