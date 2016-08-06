var myNameSpace = angular.module('myApp' , []);
myNameSpace.controller('myController' , function myController($scope) {
	$scope.author = {
		'name' : 'Saif-ur-Rehman' ,
		'designation' : 'Drupal Developer' ,
		'company' : 'Devtron Genises' ,
		'salary' : '500000'
	}
})
