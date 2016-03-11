app.controller('registerController', function ($scope, $location, registerService) {
	//var $scope.registerForm.isRegistered = false;
    $scope.registerFormMessage = "";
    $scope.registerFormClass = "";
	setTimeout(init(),0);
	function init() {
        var response = registerService.isRegistered();
		if(response) {
            $scope.registerFormMessage = response;
            $scope.registerFormClass = "bg-warning text-warning";
        }
	}

    $scope.cancelRegistration = function () {
        registerService.cancelRegistration();
    };   
    
    $scope.registerLogin = function () {
        if(!$scope.registerForm) {
            $scope.registerFormMessage = "All fields are mandatory !!";
            $scope.registerFormClass = "bg-danger text-danger";
            return false;
        } else {
            if(!validateEmail($scope.registerForm.username)) {
                $scope.registerFormMessage = "Invalid Email";
                $scope.registerFormClass = "bg-danger text-danger";
                return false;
            }    
        }
        if((!$scope.registerForm.username) || (!$scope.registerForm.password) || (!$scope.registerForm.repassword)) {
            $scope.registerFormMessage = "All fields are mandatory !!";
            $scope.registerFormClass = "bg-danger text-danger";
            return false;
        }
        if($scope.registerForm.password != $scope.registerForm.repassword) {
            $scope.registerFormMessage = "Password fields are not matching !!";
            $scope.registerFormClass = "bg-danger text-danger";
            return false;
        }   

        $scope.registerFormMessage = registerService.registerLogin($scope.registerForm.username, $scope.registerForm.password, $scope.registerForm.repassword);
        $scope.registerFormClass = "bg-success text-success";
    };       
});