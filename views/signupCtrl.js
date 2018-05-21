angular.module('signupMod').controller('signupCtrl', ['$scope', '$http', '$window', 'toastr', function($scope, $http, $window, toastr){
	console.log('Signup Controller initialized...');

	$scope.runSignup = function(){

		// Submit To Sails Server
		$http.post('/signup', {
			email: $scope.email,
			password: $scope.password
		})
		.then(function onSuccess(res){
			console.log(res);
			window.location = '/dashboard'
		})
		.catch(function onError(err){
			alert('Could not create account.');
			console.log('Error: ', err);
		})
	}

	// $scope.runLogin = function(){
	// 	$http.post('/login', {
	// 		email: $scope.email,
	// 		password: $scope.password
	// 	}).then(function successCallback(res) {
	// 		// console.log(res.headers('x-auth'));
	// 		$window.sessionStorage.token = res.headers('x-auth');
	// 		console.log($window.sessionStorage.token);
	// 		window.location = '/dashboard';
	// 	})
	// }

	$scope.runLogin = function(){
		$http.post('/login', {
			email: $scope.email,
			password: $scope.password
		}).then(function onSuccess(res){
			console.log(res);
			// console.log(res.headers('x-auth'));
			// $window.sessionStorage.token = res.headers('x-auth');
			// console.log($window.sessionStorage.token);
			window.location = '/dashboard';
		}).catch(function onError(err){
			if(err.status == 400 || 404){
				toastr.error('Invalid Credentials', 'Error', {
					closeButton: true
				});
				return;
			}
			toastr.error('An error has occured, please try again later', 'Error', {
				closeButton: true
			});
			return;
		})
	}
}])