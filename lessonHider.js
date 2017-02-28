angular.module('directivePractice').directive('lessonHider',function(){

  return{

    templateUrl: '/lessonHider.html',
    restrict: 'E',

    scope : {
      lesson: '=lesson',
      dayAlert : '&'
    },
    link: function(scope, element, attributes){

      scope.checkBoxClicked = function(lesson){
        if(scope.check){
          element.css('text-decoration', 'line-through');
        }
        else{
          element.css('text-decoration', 'none');
        }
      };

        scope.getSchedule.then(function(response) {
          scope.schedule = response.data;

          scope.schedule.forEach(function(scheduleDay){
            if (scheduleDay.lesson === scope.lesson){

              scope.lessonDay = scheduleDay.weekday;
              element.css('text-decoration','line-through');
              return;
            }
          });
        });

    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    }


  };
});
