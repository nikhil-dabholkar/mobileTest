app.service('logoutService', function () {
	this.logoutUser = function() {
		var userObject = JSON.parse(window.localStorage.getItem("userObject"));
		userObject.isUserLoggedIn = false;
		window.localStorage.setItem("userObject",JSON.stringify(userObject));
		return("You have been logged out");
	};
});