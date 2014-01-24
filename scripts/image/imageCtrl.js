imageModule.controller('ImageCtrl', function ($scope) {
    $scope.dogs = [{ size: 'Large', breed: 'Golden Retriever', image: 'Images/Large_dog.jpg'},
        { size: 'Medium', breed: 'Kleiner Münsterländer', image: 'Images/Medium_dog.jpg' }];

    $scope.dogsize = $scope.dogs[0];
})