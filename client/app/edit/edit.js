angular.module('app.edit', [])

.controller('EditController', ['$rootScope', '$scope', '$location', 'Habits',
  function($rootScope, $scope, $location, Habits) {
    $rootScope.showNav = true;

    $scope.habit = Habits.getEdit();

    $scope.updateHabit = function() {
      Habits.updateHabit($scope.habit)
        .then(function() {
          $location.path('/dashboard');
        })
        .catch(function(err) {
          console.error(err);
        });
    };

    $scope.deactivateHabit = function() {
      $scope.habit.status = 'inactive';
      Habits.updateHabit($scope.habit)
        .then(function() {
          $location.path('/dashboard');
        })
        .catch(function(err) {
          console.error(err);
        });
    };
  }
]);
