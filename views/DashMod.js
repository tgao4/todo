var app = angular.module('DashMod', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/todos/get', {
			templateUrl: 'todos.html',
			controller: 'TodosCtrl'
		}).
		when('/t/add', {
			templateUrl: 'addTodo.html',
			controller: 'TodoCreateCtrl'
		}).
		when('/todos/edit/:id', {
			templateUrl: 'edit_todo.html',
			controller: 'TodoEditCtrl'
		}).
		otherwise({redirectTo: '/dashboard'})
}]);

app.controller('DashCtrl', ['$scope', '$window', '$http', function($scope, $window, $http){
	$scope.logout = function(){
		$http.delete('/logout')
		.then(function onSuccess(){
			window.location = '/';
		})
		.catch(function onError(err){
			console.log(err);
		})
	}
	


}])