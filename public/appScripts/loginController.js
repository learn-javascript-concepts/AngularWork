var loginController = function($scope, $location){
    $scope.userName = "";
    $scope.userPassword = "";
    $scope.loginClicked = function() {
        $location.path("/demo");            
    }
}