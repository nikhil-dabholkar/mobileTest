app.controller('testController', function ($scope, $http, $location, testService, loginService) {
    $scope.testQuestion = "";
    $scope.testQuestionId = "";
    $scope.testQuestionAnswerIndex = -1;
	$scope.objectives = "";
	//$scope.answer;
    init();
    function init() {
        var sUserName = loginService.isSessionActive()
        if(!sUserName) {
            $location.path("/login");
            return false;
        } else {
            $scope.userName = sUserName;
        }    	  	
        testService.loadTest().then(loadTestData,errorHandler); 
    }
    $scope.getPreviousQuestion = function () {
        var oQuestionAnswerSet = testService.getPreviousQuestion($scope.testQuestionAnswerIndex);
	    $scope.testQuestion = oQuestionAnswerSet.question;
	    $scope.testQuestionId = oQuestionAnswerSet.id;
	    $scope.testQuestionAnswerIndex -= 1;
		$scope.objectives = oQuestionAnswerSet.objectives; 
		if(oQuestionAnswerSet.userSelection > 0) {
			$scope.answer = oQuestionAnswerSet.userSelection;
		}
    };  
    $scope.getNextQuestion = function () {
        var oQuestionAnswerSet = testService.getNextQuestion($scope.testQuestionAnswerIndex);
	    $scope.testQuestion = oQuestionAnswerSet.question;
	    $scope.testQuestionId = oQuestionAnswerSet.id;
	    $scope.testQuestionAnswerIndex += 1;
		$scope.objectives = oQuestionAnswerSet.objectives; 
		if(oQuestionAnswerSet.userSelection > 0) {
			$scope.answer = oQuestionAnswerSet.userSelection;
		}		       
    };  
    $scope.saveAnswer = function (answerId) {
        testService.saveAnswer($scope.testQuestionId,answerId);       
    };  
    $scope.isTestAnswered = function () {
        return testService.isTestAnswered();       
    };      

    $scope.submitTest = function () {
        var bResult = confirm("Do you want to submit the test ?");
        if(bResult) {
            testService.submitTest();
            alert("You have submitted your test successfully, Click on the Results button to view your result.");
        }
    };  
    $scope.checkPreviousIndex = function () {
        if($scope.testQuestionAnswerIndex <= 0) {
        	return true;
        } else {
        	return false;
        }
    }; 
    $scope.checkNextIndex = function () {
    	var totalQuestions = JSON.parse(window.localStorage.getItem("questions"));
    	if(totalQuestions) {
	        if($scope.testQuestionAnswerIndex == (totalQuestions.length - 1)) {
	        	return true;
	        } else {
	        	return false;
	        }
    	} else {
    		return false;
    	}
    };    
    $scope.viewResult = function () {
    	$location.path("/result");
    };     
    function loadTestData(data) {
    	setTimeout($scope.getNextQuestion(),0);
        //$scope.name = data.name;
        //$scope.description = data.description;
        //$scope.location = data.location;
    }
    function errorHandler(error) {
        console.error(error);
    }
});