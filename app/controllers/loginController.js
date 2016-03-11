app.controller('loginController', function ($scope, $http, $location, loginService) {
    $scope.loginFormMessage = "";
    $scope.loginFormClass = "";
    init();
    function init() {
        if(loginService.isSessionActive()) {
            $location.path("/test");
        }
    }

    $scope.validateLogin = function () {
        if(!$scope.loginForm) {
            $scope.loginFormMessage = "All fields are mandatory !!";
            $scope.loginFormClass = "bg-danger text-danger";
            return false;
        } else {
            if(!validateEmail($scope.loginForm.username)) {
                $scope.loginFormMessage = "Invalid Email";
                $scope.loginFormClass = "bg-danger text-danger";
                return false;
            } 
        } 
        if((!$scope.loginForm.username) || (!$scope.loginForm.password)) {
            $scope.loginFormMessage = "All fields are mandatory !!";
            $scope.loginFormClass = "bg-danger text-danger";
            return false;
        }                        
        $scope.loginFormMessage = loginService.validateLogin($scope.loginForm.username, $scope.loginForm.password);
        $scope.loginFormClass = "bg-danger text-danger";
    };  
});