app.service('testService', function ($http,$q) {
	this.loadTest = function() {
		var questionsObject = JSON.parse(window.localStorage.getItem("questions"));
		if(questionsObject) {
			var defered = $q.defer();
			setTimeout(function() {
				defered.resolve(questionsObject);
			}, 0);
			return(defered.promise.then(handleSuccess, handleError)); 			
		} else {
			var request = $http({ method: 'GET', url: "app/data/test.json"});
			return(request.then(handleSuccessAJAXLoad, handleError)); 
		}
	};
    this.getPreviousQuestion = function (questionIndex) {
    	var questionsObject = JSON.parse(window.localStorage.getItem("questions"));
    	return(questionsObject[questionIndex-1]);
    };
    this.getNextQuestion = function (questionIndex) {
    	var questionsObject = JSON.parse(window.localStorage.getItem("questions"));
    	return(questionsObject[questionIndex+1]);
    };  
    this.saveAnswer = function (questionId,answerId) {
    	var questionsObject = JSON.parse(window.localStorage.getItem("questions"));
    	for(var iCounter=0;iCounter<questionsObject.length;iCounter++) {
    		if(questionsObject[iCounter].id == questionId) {
    			questionsObject[iCounter].userSelection = answerId;
    			break;
    		}
    	}
    	window.localStorage.setItem("questions",JSON.stringify(questionsObject));
    };   
    this.submitTest = function () {
    	var userObject = JSON.parse(window.localStorage.getItem("userObject"));
    	userObject.testAnswered = true;
    	window.localStorage.setItem("userObject",JSON.stringify(userObject));
    };   
    this.isTestAnswered = function () {
    	var userObject = JSON.parse(window.localStorage.getItem("userObject"));
    	if(userObject) {
    		return(userObject.testAnswered);
    	} else {
    		return false;
    	}
    };         
	function handleSuccessAJAXLoad(response) {
		window.localStorage.setItem("questions",JSON.stringify(response.data.questions));
		return(response);
	}   
	function handleSuccess(response) {
		return(response);
	}   	
	 function handleError(error) {
		return(error);
	}
});