define([], function() {

    function workOrderController($scope, authenticateUser, $location) {

        authenticateUser.redirectToLoginIfUnauthenticated();

        $scope.workOrderNumber = "";

        $scope.searchWorkOrder = function() {

        }

        $scope.createWorkOrder = function() {
            $location.path("createworkorder")
        }

    }

    return workOrderController;
})