


angular.module("angular-friends").controller('friendController', function ($scope){
    $scope.test = "Hello everyone"

    $.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(data){
       $scope.$apply(function(){
        $scope.friends= data.results;




       });


    });

});




