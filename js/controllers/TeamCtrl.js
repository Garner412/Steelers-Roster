app.controller('TeamController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/roster.json').success(function(data){
    $scope.teamInfo = data.Team[0];
    $scope.roster = data.Roster;
    for (var i = 0; i < $scope.roster.length; i++) {
      $scope.roster[i].Birthdate = dateConverter($scope.roster[i].Birthdate);
    };
  });

  var dateConverter = function (element) {
    element = element.match(/\d{12}/)
    return element[0] ;
  }
}]);