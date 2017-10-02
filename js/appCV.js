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

		$translateProvider.useSanitizeValueStrategy('escapeParameters');
		$translateProvider.translations('es', {
			TITLE_HEAD: 'Currículum Vitae',
			DEV: '<Desarrollador Full-Stack/>',
			MONTH: '09 Septiembre 1990', 
			EXPERIENCE: 'Experiencia',
			EDUCATION: 'Educación',
			SKILLS: 'Habilidades',
			POSITION: 'Puesto',
			POSITION_DESCRIPTION0: 'Desarrollador de aplicaciones web y apoyo al Servicio de Comunicación',
			POSITION_DESCRIPTION1: 'Trabajo fin de grado',
			POSITION_DESCRIPTION2: 'Becario en desarrollo de aplicaciones nativas para iOS y SmartTV',
			PLACE: 'Lugar',
			PLACE_DESCRIPTION0: 'Universidad Miguel Hernández de Elche',
			PLACE_DESCRIPTION1: 'Desarrollo de aplicación híbrida para dispositivos móviles orientada en el sector de peluquería y estética. Desarrollo realizado con las tecnologías: Ionic, AngularJS, PHP y MySQL',
			PLACE_DESCRIPTION2: 'Aire Networks',
			DESCRIPTION: 'Descripción',
			PERIOD: 'Periodo',
			PERIOD_DESCRIPTION0: 'Marzo 2016 - Julio 2017',
			PERIOD_DESCRIPTION1: 'Octubre 2016 - Julio 2017',
			PERIOD_DESCRIPTION2: 'Julio 2015 - Octubre 2015',
			TITLE: 'Título'
		});
		$translateProvider.translations('en', {
			TITLE_HEAD: 'Personal resume / CV',
			DEV: '<Developer Full-Stack/>',
			MONTH: '09th September 1990', 
			EXPERIENCE: 'Experience',
			EDUCATION: 'Education',
			SKILLS: 'Skills',
			POSITION: 'Position',
			POSITION_DESCRIPTION0: 'Developer of web applications and support to the Communication Service',
			POSITION_DESCRIPTION1: 'End of degree project',
			POSITION_DESCRIPTION2: 'Developer intern of Native Application for iOS and Smart TV',
			PLACE: 'Place',
			PLACE_DESCRIPTION0: 'Miguel Hernández University of Elche',
			PLACE_DESCRIPTION1: 'Development of hybrid application for mobile devices oriented in the sector of hairdressing and aesthetics. Development with technologies: Ionic, AngularJS, PHP and MySQL',
			PLACE_DESCRIPTION2: 'Aire Networks',
			DESCRIPTION: 'Description',
			PERIOD: 'Period',
			PERIOD_DESCRIPTION0: 'March 2016 - July 2017',
			PERIOD_DESCRIPTION1: 'October 2016 - July 2017',
			PERIOD_DESCRIPTION2: 'July 2015 - October 2015',
			TITLE: 'Qualification'
		});
		$translateProvider.translations('bg', {
			TITLE_HEAD: 'Автобиография',
			DEV: '<Разработчик Full-Stack/>',
			MONTH: '09 Септември 1990',  
			EXPERIENCE: 'Опит',
			EDUCATION: 'Образование',
			SKILLS: 'Умения',
			POSITION: 'Длъжност',
			POSITION_DESCRIPTION0: 'Разработчик на уеб апликации и поддръжка на Комуникационите Услуги',
			POSITION_DESCRIPTION1: 'Дипломна работа',
			POSITION_DESCRIPTION2: 'Стажант разработчик на нативни приложения за iOS и Smart TV',
			PLACE: 'Място',
			PLACE_DESCRIPTION0: 'Университета Мигел Ернандес в Елче',
			PLACE_DESCRIPTION1: 'Разработка на хибритно приложения за мобилни устройства ориентирано към сектора на фризьорски салони. Технологиите използване за разботката са: Ionic, AngularJS, PHP и MySQL',
			PLACE_DESCRIPTION2: 'Aire Networks',
			DESCRIPTION: 'Описание',
			PERIOD: 'Период',
			PERIOD_DESCRIPTION0: 'Март 2016 - Юли 2017',
			PERIOD_DESCRIPTION1: 'Октомври 2016 - Юли 2017',
			PERIOD_DESCRIPTION2: 'Юли 2015 - Октомври 2015',
			TITLE: 'Диплома'
		});
		 
		$translateProvider.preferredLanguage('es');
	}
]);