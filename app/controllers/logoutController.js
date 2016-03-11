app.controller('logoutController', function ($scope, logoutService) {
	$scope.logoutFormMessage = "";
    setTimeout(init(),0);
    function init() {
    	$scope.logoutFormMessage = logoutService.logoutUser();
    }
});