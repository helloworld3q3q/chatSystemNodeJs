var myApp = angular.module('myApp', []);

myApp.controller('chatController' , function($scope)
{
	var mySocket ;
	$scope.messages = [] ;

	mySocket = io.connect('http://localhost:3000');		
 	mySocket.on('broadcast message', function(data)
	{
		console.log('received ' + data);
		$scope.messages.push(data);
		$scope.$apply();
	});
	
	// angular.element(document).ready(function(){
	 	
	// });

	$scope.addMessage = function()
	{
		console.log('here');
		console.log($scope.inputMessage);
		$scope.messages.push($scope.inputMessage);
		mySocket.emit('send message' , $scope.inputMessage);
		$scope.inputMessage = "";
	}

	window.addEventListener("beforeunload", function() {
            console.log("Close web socket");
            socket.close();
    });

	



});