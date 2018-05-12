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
			POSITION_DESCRIPTION0: 'Desarrollador Full-Stack de aplicación web de gestión para las subcontratas de Orange-Jazztel España',
			POSITION_DESCRIPTION1: 'Desarrollador de aplicaciones web y apoyo al Servicio de Comunicación',
			POSITION_DESCRIPTION2: 'Trabajo fin de grado',
			POSITION_DESCRIPTION3: 'Becario en desarrollo de aplicaciones nativas para iOS y SmartTV',
			PLACE: 'Lugar',
			PLACE_DESCRIPTION0: 'Scorpora (Orihuela, España)',
			PLACE_DESCRIPTION1: 'Universidad Miguel Hernández de Elche',
			PLACE_DESCRIPTION2: 'Desarrollo de aplicación híbrida para dispositivos móviles orientada en el sector de peluquería y estética. Desarrollo realizado con las tecnologías: Ionic, AngularJS, PHP y MySQL',
			PLACE_DESCRIPTION3: 'Aire Networks (Elche, España)',
			DESCRIPTION: 'Descripción',
			PERIOD: 'Periodo',
			PERIOD_DESCRIPTION0: 'Octubre 2017 - Actualmente',
			PERIOD_DESCRIPTION1: 'Marzo 2016 - Julio 2017',
			PERIOD_DESCRIPTION2: 'Octubre 2016 - Julio 2017',
			PERIOD_DESCRIPTION3: 'Julio 2015 - Octubre 2015',
			TITLE: 'Título',
			TITLE_DESCRIPTION0: 'Grado en Ingeniería Informática en Tecnologías de la Información',
			TITLE_DESCRIPTION1: 'Ciclo Formativo de Grado Superior de Desarrollo de productos electrónicos',
			TITLE_DESCRIPTION2: 'Ciclo Formativo de Grado Medio de Mantenimiento de productos electrónicos',
			TITLE_PLACE0: 'Universidad Miguel Hernández de Elche',
			TITLE_PLACE1: 'IES El Palmeral Orihuela',
			TITLE_PLACE2: 'IES El Palmeral Orihuela',
			PERSONAL_SKILLS: 'Cualidades personales',
			SKILL_DESCRIPTION0: 'Alta capacidad de aprendizaje de nuevas tecnologías',
			SKILL_DESCRIPTION1: 'Responsabilidad',
			SKILL_DESCRIPTION2: 'Sociable',
			SKILL_DESCRIPTION3: 'Carnet de conducir',
			LANGUAGES: 'Idiomas',
			LANG_DESCRIPTION0: 'Búlgaro (Materno)',
			LANG_DESCRIPTION1: 'Español (Nativo)',
			LANG_DESCRIPTION2: 'Inglés (Nivel A2)',
			DEV_TECH: 'Tecnologías de desarrollo',
			USE_FRAME: 'Uso de frameworks'

		});
		$translateProvider.translations('en', {
			TITLE_HEAD: 'Personal resume / CV',
			DEV: '<Developer Full-Stack/>',
			MONTH: '09th September 1990', 
			EXPERIENCE: 'Experience',
			EDUCATION: 'Education',
			SKILLS: 'Skills',
			POSITION: 'Position',
			POSITION_DESCRIPTION0: 'Full-Stack developer of management web application for subcontractors of Orange-Jazztel Spain',
			POSITION_DESCRIPTION1: 'Developer of web applications and support to the Communication Service',
			POSITION_DESCRIPTION2: 'End of degree project',
			POSITION_DESCRIPTION3: 'Developer intern of Native Application for iOS and Smart TV',
			PLACE: 'Place',
			PLACE_DESCRIPTION0: 'Scorpora (Orihuela, Spain)',
			PLACE_DESCRIPTION1: 'Miguel Hernández University of Elche Spain',
			PLACE_DESCRIPTION2: 'Development of hybrid application for mobile devices oriented in the sector of hairdressing and aesthetics. Development with technologies: Ionic, AngularJS, PHP and MySQL',
			PLACE_DESCRIPTION3: 'Aire Networks (Elche, Spain)',
			DESCRIPTION: 'Description',
			PERIOD: 'Period',
			PERIOD_DESCRIPTION0: 'Octuber - Currently',
			PERIOD_DESCRIPTION1: 'March 2016 - July 2017',
			PERIOD_DESCRIPTION2: 'October 2016 - July 2017',
			PERIOD_DESCRIPTION3: 'July 2015 - October 2015',
			TITLE: 'Qualification',
			TITLE_DESCRIPTION0: 'Bachelor\'s in Computer Engineering in Information Technologies',
			TITLE_DESCRIPTION1: 'Certificate of Higher Education  of development of electronics products',
			TITLE_DESCRIPTION2: 'Vocational Education and Training of support of electronics products',
			TITLE_PLACE0: 'Miguel Hernández University of Elche',
			TITLE_PLACE1: 'Secondary School IES El Palmeral Orihuela',
			TITLE_PLACE2: 'Secondary School IES El Palmeral Orihuela',
			PERSONAL_SKILLS: 'Personal qualities',
			SKILL_DESCRIPTION0: 'High ability to learn new technologies',
			SKILL_DESCRIPTION1: 'Responsibility',
			SKILL_DESCRIPTION2: 'Sociable',
			SKILL_DESCRIPTION3: 'Driving license',
			LANGUAGES: 'Languages',
			LANG_DESCRIPTION0: 'Bulgarian (Maternal)',
			LANG_DESCRIPTION1: 'Spanish (Native)',
			LANG_DESCRIPTION2: 'English (Level A2)',
			DEV_TECH: 'Development Technologies',
			USE_FRAME: 'Use of frameworks'

		});
		$translateProvider.translations('bg', {
			TITLE_HEAD: 'Автобиография',
			DEV: '<Разработчик Full-Stack/>',
			MONTH: '09 Септември 1990',  
			EXPERIENCE: 'Опит',
			EDUCATION: 'Образование',
			SKILLS: 'Умения',
			POSITION: 'Длъжност',
			POSITION_DESCRIPTION0: 'Разработчик на уеб апликация за аднистрация на под испълнители на Orange-Jazztel Испания',
			POSITION_DESCRIPTION1: 'Разработчик на уеб апликации и поддръжка на Комуникационните Услуги',
			POSITION_DESCRIPTION2: 'Дипломна работа',
			POSITION_DESCRIPTION3: 'Стажант разработчик на нативни приложения за iOS и Smart TV',
			PLACE: 'Място',
			PLACE_DESCRIPTION0: 'Scorpora (Orihuela, Испания)',
			PLACE_DESCRIPTION1: 'Университета Мигел Ернандес в Елче Испания',
			PLACE_DESCRIPTION2: 'Разработка на хибридно приложения за мобилни устройства ориентирано към сектора на фризьорски салони. Технологиите използване за разботката са: Ionic, AngularJS, PHP и MySQL',
			PLACE_DESCRIPTION3: 'Aire Networks (Elche, Испания)',
			DESCRIPTION: 'Описание',
			PERIOD: 'Период',
			PERIOD_DESCRIPTION0: 'Октомври 2017 - Сега',
			PERIOD_DESCRIPTION1: 'Март 2016 - Юли 2017',
			PERIOD_DESCRIPTION2: 'Октомври 2016 - Юли 2017',
			PERIOD_DESCRIPTION3: 'Юли 2015 - Октомври 2015',
			TITLE: 'Диплома',
			TITLE_DESCRIPTION0: 'Бакалавър по информационни технологии',
			TITLE_DESCRIPTION1: 'Техникум по разработка на електронни продукти',
			TITLE_DESCRIPTION2: 'Техникум по поддръжка на електронни продукти',
			TITLE_PLACE0: 'Университета Мигел Ернандес в Елче',
			TITLE_PLACE1: 'Cредно Общообразователно Училище IES El Palmeral Ориуела',
			TITLE_PLACE2: 'Cредно Общообразователно Училище IES El Palmeral Ориуела',
			PERSONAL_SKILLS: 'Лични качества',
			SKILL_DESCRIPTION0: 'Висока способност за усвояване на нови технологии',
			SKILL_DESCRIPTION1: 'Oтговорност',
			SKILL_DESCRIPTION2: 'Oбщителност',
			SKILL_DESCRIPTION3: 'Шофьорска книжка',
			LANGUAGES: 'Езици',
			LANG_DESCRIPTION0: 'Български (Майчин)',
			LANG_DESCRIPTION1: 'Испански (Нативен)',
			LANG_DESCRIPTION2: 'Английски (Ниво A2)',
			DEV_TECH: 'Технологии за разработка',
			USE_FRAME: 'Използване на frameworks'
		});
		 
		$translateProvider.preferredLanguage('es');
	}
]);