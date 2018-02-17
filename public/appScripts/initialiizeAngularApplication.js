require.config({
    baseUrl: "/",
    paths: {
        "angular": "lib/angular/angular",
        "angular-route": "lib/angular-route/angular-route",
        "appModule": "appScripts/appModule",
        "appModuleRouting": "appScripts/appModuleRouting",
        "loginController": "appScripts/loginController"
    },
    shim: {
        "angular-route" : {
            deps: ["angular"]
        },
        "appModule": {
            deps: ["angular", "angular-route"]
        }
    }
});

require(["appModule"], function(appModule) {
    appModule.init();
});