app.service('loginService', function ($location) {
	this.isSessionActive = function() {
		var userObject = JSON.parse(window.localStorage.getItem("userObject"));
		if(userObject) {
			if(userObject.isUserLoggedIn) {
				return userObject.username;
			} else {
				return false;
			}
		}
	};
    this.validateLogin = function (username, password) {
    	var userObject = JSON.parse(window.localStorage.getItem("userObject"));
    	if(!userObject) {
    		return('User is not registered. Please register.');
    	} else {
	    	if(userObject.username == username) {
		    	if(userObject.password == password) {
		    		userObject.isUserLoggedIn = true;
		    		window.localStorage.setItem("userObject",JSON.stringify(userObject));
		    		$location.path("/test");
		    	} else {
		    		return('Username or Password is incorrect.');
		    	}
	    	} else {
	    		return('Username or Password is incorrect.');
	    	} 
    	} 

    };
});