var app = angular.module('appCV',['ui.materialize','ngRoute','pascalprecht.translate','appCV.contrsCV']);

app.config(['$locationProvider','$routeProvider','$translateProvider',
	function($locationProvider,$routeProvider,$translateProvider){
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


		$translateProvider.translations('es', {
			TITLE: 'Currículum Vitae',
			DEV: '<Desarrollador Full-Stack/>',
			MONTH: '09 Septiembre 1990', 
			EXPERIENCE: 'Experiencia',
			EDUCATION: 'Educación',
			SKILLS: 'Habilidades'
		});
		$translateProvider.translations('en', {
			TITLE: 'Personal resume / CV',
			DEV: '<Developer Full-Stack/>',
			MONTH: '09th September 1990', 
			EXPERIENCE: 'Experience',
			EDUCATION: 'Education',
			SKILLS: 'Skills'
		});
		$translateProvider.translations('bg', {
			TITLE: 'Автобиография',
			DEV: '<Разработчик Full-Stack/>',
			MONTH: '09 Септември 1990',  
			EXPERIENCE: 'Опит',
			EDUCATION: 'Образование',
			SKILLS: 'Умения'
		});
		 
		$translateProvider.preferredLanguage('es');
	}
]);