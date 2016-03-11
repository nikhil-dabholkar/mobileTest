app.service('registerService', function ($location) {

    this.isRegistered = function() {
        var userObject = JSON.parse(window.localStorage.getItem("userObject"));
        if(userObject) {
        	if(userObject.username) {
        		return('A User session is already registered. Clear cache to re-register new user');
        	} else {
                return false;
            }
        } else {
            return false;
        }
    }
    this.cancelRegistration = function() {
        $location.path("/login");
    }    
    this.registerLogin = function (username, password, repassword) {
    	var userObject = JSON.parse(window.localStorage.getItem("userObject"));
        if(userObject) {
            if(userObject.username) {
                return('A User session is already registered. Clear cache to re-register new user');
            }
        } else {
            userObject = {};
            userObject.username = username;
            userObject.password = password;
            userObject.isUserLoggedIn = false;
            userObject.testAnswered = false;
            window.localStorage.setItem("userObject",JSON.stringify(userObject));
            return('User has been registered. Please login');
        }  	
    };
    var user = {};
});