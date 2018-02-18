define([], function() {

    function workOrderController($scope, authenticateUser, $location, appConstants, $http, $location, workOrderCache) {

        authenticateUser.redirectToLoginIfUnauthenticated();

        $scope.workOrderNumber = "";

        $scope.searchWorkOrder = function() {
            
            $http.get(appConstants.getWorkOrder + $scope.workOrderNumber).then(function(response) {
                var workOrderData = response.data;
                if(response.data) {
                    $location.path("workorderDetails");
                    workOrderCache.saveWorkOrderDetails(response.data);
                } else {
                    alert("No Data exists for selected Work Order Number")
                }
            });

        }

        $scope.createWorkOrder = function() {
            $location.path("createworkorder")
        }

    }

    return workOrderController;
})