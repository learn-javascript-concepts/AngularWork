define([], function(){

    var createWorkOrderController = function($scope,authenticateUser) {

        

        authenticateUser.redirectToLoginIfUnauthenticated();

        $scope.workOrderNumber = "";
        $scope.poNumber = "";
        $scope.workOrderBy = "";

        $scope.createWorkOrder = function() {

        }

    }
    return createWorkOrderController;
});