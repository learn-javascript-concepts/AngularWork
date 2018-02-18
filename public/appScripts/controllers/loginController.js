define([], function(){

    var loginController = function($scope, $location, $http, $cookies, authenticateUser, appConstants){

        authenticateUser.redirectToLandingPageIfAuthenticated();

        $scope.userName = "";
        $scope.userPassword = "";

        $scope.logoutUser = function() {
            authenticateUser.clearAuthenticationToken();
        }

        $scope.authenticateUserLogin = function() {

            $cookies.put("authToken", "");

            var authenticationData = {
                userName: $scope.userName,
                userPassword: $scope.userPassword
            }

            $http.post(appConstants.authenticateUserUrl, authenticationData).then(function(response) {
                
                if(response.status == 200 && response.data.isAuthenticated == true) {
                    console.dir(response.data);
                    $location.path("workorder")

                    authenticateUser.setAuthenticationToken(response.data.authToken);

                } else {
                    alert("Enter Correct Credentials");
                }
            })          
        }
    }
    
    return loginController;
})
