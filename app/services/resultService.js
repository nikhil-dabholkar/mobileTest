app.service('resultService', function () {
	this.getResults = function() {
		return(JSON.parse(window.localStorage.getItem("questions")));
	};
});