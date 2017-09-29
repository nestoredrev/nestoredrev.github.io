var app = angular.module('appCV',['ui.materialize','ngRoute','appCV.contrsCV']);

app.config(['$locationProvider','$routeProvider',
	function($locationProvider,$routeProvider){
		/*El Hashband es necesario para que los SPA(Single Page Application)
		sean indexados por los navegadores*/
		$locationProvider.hashPrefix('!');
		
		$routeProvider.
		when('/',{
			templateUrl: 'plantillas/cv.html',
			controller: 'cvCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});

	}
]);