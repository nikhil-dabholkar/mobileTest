app.controller('resultController', function ($scope, $location, resultService, loginService) {

    init();
    function init() {
        var sUserName = loginService.isSessionActive()
        if(!sUserName) {
            $location.path("/login");
            return false;
        } else {
            $scope.userName = sUserName;
        }
        $scope.questions = resultService.getResults(); 
        var oResult = {"questions":0,"answers":0};
        for(var iCounter = 0;iCounter<$scope.questions.length;iCounter++) {
            oResult.questions++;
            for(var iCounterAnswer=0;iCounterAnswer<$scope.questions[iCounter].objectives.length;iCounterAnswer++) {
                if(($scope.questions[iCounter].userSelection == $scope.questions[iCounter].objectives[iCounterAnswer].id) && ($scope.questions[iCounter].objectives[iCounterAnswer].correct == true)) {
                    oResult.answers++;
                }
            }
        }
        $scope.resultPercentage = ((oResult.answers/oResult.questions)*100);
    }
});