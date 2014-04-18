angular.module("angular-friends").service('friendService', function ($http) {
    return {
        getFriends: function () {
            return  $http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json')
        }
    }
});




angular.module("angular-friends").controller('friendController', function ($scope, friendService){



        friendService.getFriends()
        .success(function(data){
        $scope.friends= data.results;

        });

               $scope.sortProperties = [
                      { text: 'Name', value: 'name' },
                      { text: '# Friends', value: 'friend_count' },
                      { text: 'City', value: 'current_location.city' },
                      { text: 'State', value: 'current_location.state' },
                           { text: 'Country', value: 'current_location.country' }
                        ]
                     $scope.sortProperty = $scope.sortProperties[0].value

                     $scope.sortDirections = [
                       { text: 'Ascending', value: false },
                           { text: 'Descending', value: true }
                         ]
                     $scope.sortDirection = $scope.sortDirections[0].value

                    });

           












