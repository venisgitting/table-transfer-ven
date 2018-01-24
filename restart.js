var app = angular.module("myapp", []);

    app.controller("tableController", ['$scope', function ($scope) {

    	$scope.right = [];
        $scope.employees = 
        [	{	'Name': 'nick crompton', 
        		'Gender': 'fatmale', 
        		'City': 'England' },
                        
	        { 	'Name': 'Knuckles', 
	        	'Gender': 'sanic', 
	        	'City': 'Uganda' },

	        { 	'Name': 'Big Shaq', 
	        	'Gender': 'Mans not Hot', 
	        	'City': 'Is land' },

	        { 	'Name': 'Logan Paul', 
	        	'Gender': 'I FOUND A DEAD BODY', 
	        	'City': 'Not Japan' },

	        { 	'Name': 'Tide Pods', 
	        	'Gender': 'Delicious', 
	        	'City': 'TIDE'}];

        // delete function this remove the selected table row
        $scope.removeRow = function () {
		console.dir($scope.employees);

            var arremp = [];
            angular.forEach($scope.employees, function (value) {
            	
                if (!value.Remove) {
                	console.log(value.Remove + 
                		"|" + value );
                    arremp.push(value);
                }else{
                	$scope.right.push(value); 
                }
            });

            $scope.employees = arremp;
            console.dir($scope.employees);
            console.dir(arremp);

             $scope.uncheckAll = function() {
	    	angular.forEach($scope.right, function (emp) {
	            emp.Remove = false;
	        });
	    	};
        };
        //table 2 transfer and delete
		$scope.removeRow2 = function () {
		console.dir($scope.right);

            var arremp2 = [];
            angular.forEach($scope.right, function (value) {
            	
                if (!value.Remove2) {
                	console.log(value.Remove2 + 
                		"|" + value );
                    arremp2.push(value);
                }else{
                	$scope.employees.push(value); 
                }
            });

            $scope.right = arremp2;
            console.dir($scope.right);
            console.dir(arremp2);

            $scope.uncheckAll2 = function() {
	    	angular.forEach($scope.employees, function (emp) {
	            emp.Remove2 = false;
	        });
	    	};
        };





    } ]);