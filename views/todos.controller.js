angular.module("DashMod")

.controller('TodosCtrl', ['$scope', '$http', '$location', '$route', function($scope, $http, $location, $route){
	$http.get('/todos').then(function onSuccess(todos){
		$scope.todos = todos;
	})

	$scope.removeTodo = function(todo){
		
		$http.delete('/todos/' + todo._id).then(function onSuccess(data){
			console.log(data);
		});

		$location.path('/todos/get');
		$route.reload();
		console.log($location.path());
	}
}])

.controller('TodoCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	
	$scope.addTodo = function(){
		var data = {
			text: $scope.todo
		}

		$http.post('/todos', data).then(function onSuccess(doc){
			console.log(doc);
		});

		$location.path('/todos/get');
	}
}])

.controller('TodoEditCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	
	$scope.disableButton = function(){
		$http.get('/todos/' + $routeParams.id).then(function onSuccess(todo){
			if(todo.data.todo.completed === true){
				document.getElementById("changeCompletion").disabled = true;
				document.getElementById("myBtn").disabled = true;
			}
		});
	
	}

	$scope.updateTodo = function(){
		var data = {
			completed: $scope.complete
		}
		console.log($location.path());
		$http.patch('/todos/' + $routeParams.id, data).then(function onSuccess(data){
			console.log(data);
		});

		$location.path('/todos/get');
		console.log($location.path());
	}
}])