define(["appModuleRouting", 
        "loginController", 
        "authenticateUser", 
        "workOrderController", 
        "createWorkOrderController", 
        "appConstants",
        "workOrderCache"], function(
            appModuleRouting, 
            loginController, 
            authenticateUser, 
            workOrderController, 
            createWorkOrderController, 
            appConstants,
            workOrderCache) {

    var appModule = {
        init : function() {
            var appModule = angular.module("appModule", ["ngRoute", "ngCookies"]);

            appModule.controller("loginController", loginController);

            appModule.controller("workOrderController", workOrderController);

            appModule.controller("createWorkOrderController", createWorkOrderController);

            appModule.service("authenticateUser", authenticateUser);

            appModule.service("workOrderCache", workOrderCache);

            appModule.constant("appConstants", appConstants);

            appModuleRouting.initializeAngularRouting();
            
            angular.bootstrap(document, ["appModule"]);
        }
    }

    return appModule;
});