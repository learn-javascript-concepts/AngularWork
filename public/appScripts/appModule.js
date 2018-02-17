define(["appModuleRouting", "loginController"], function(appModuleRouting, loginController) {

    var appModule = {
        init : function() {
            var appModule = angular.module("appModule", ["ngRoute"]);

            appModule.controller("loginController", loginController);

            appModuleRouting.initializeAngularRouting();
            
            angular.bootstrap(document, ["appModule"]);
        }
    }

    return appModule;
});