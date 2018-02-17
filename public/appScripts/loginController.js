define([], function(){

    var loginController = function($scope, $location, $http){

        $scope.userName = "";
        $scope.userPassword = "";

        $scope.authenticateUserLogin = function() {

            var authenticationData = {
                userName: $scope.userName,
                userPassword: $scope.userPassword
            }

            $http.post("http://localhost:5000/api/authenticateuser", authenticationData).then(function(response) {
                
                if(response.status == 200) {
                    alert(response.data.isAuthenticated);
                    alert(response.data.userName);  
                } else {
                    alert("Enter Correct Credentials");
                }
            })          
        }
    }
    
    return loginController;
})
