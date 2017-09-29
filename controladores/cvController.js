angular.module('appCV.contrsCV', [])

.controller('cvCtrl', ['$scope', function($scope){

  $scope.personalInfo = {
    nombre:    'Nestor Dobrinov Edrev',
    foto:      'img/fotoPerfil.jpg',
    oficio:    '<Desarrollador Full-Stack/>',
    fechaNac:  '09 Septiembre 1990',
    direccion: 'Orihuela (Alicante)',
    telefono:  '+34647154820',
    email:     'nestor.edrev@gmail.com',
    skype:     'dokich',
    github:    'https://github.com/jokera666',
    linkedin:  'https://www.linkedin.com/in/nestor-dobrinov-edrev/'

  };

  $scope.educacion = [
    { titulo:'Grado en Ingeniería Informática en Tecnologías de la Información',
      lugar: 'Universidad Miguel Hernández de Elche',
      periodo: '2012 - 2017'
    },
    { titulo:'Ciclo Formativo de Grado Superior de Desarrollo de productos electrónicos',
      lugar: 'IES El Palmeral Orihuela',
      periodo: '2010 - 2012'
    },
    { titulo:'Ciclo Formativo de Grado Medio de Mantenimiento de productos electrónicos',
      lugar: 'IES El Palmeral Orihuela',
      periodo: '2008 - 2010'
    }
  ];

  $scope.experiencia = [
    {
      oficio: 'Desarrollador de aplicaciones web y apoyo al Servicio de Comunicación',
      lugar: 'Universidad Miguel Hernández de Elche',
      periodo: 'Marzo 2016 - Julio 2017'
    },
    {
      oficio: 'Trabajo fin de grado',
      lugar: 'Desarrollo de aplicación híbrida para dispositivos móviles orientada en el sector de peluquería y estética. Desarrollo realizado con las tecnologías: Ionic, AngularJS, PHP y MySQL',
      periodo: 'Octubre 2016 - Julio 2017'
    },
    {
      oficio: 'Becario en desarrollo de aplicaciones nativas para iOS y SmartTV',
      lugar: 'Aire Networks',
      periodo: 'Julio 2015 - Octubre 2015'
    }
  ];

  $scope.habilidades = [
      {habilidad: 'Alta capacidad de aprendizaje de nuevas tecnologías'},
      {habilidad: 'Responsabilidad'},
      {habilidad: 'Sociable'},
      {habilidad: 'Carnet de conducir'}
  ];


  $scope.idiomas = [
    {idioma: 'Búlgaro (Materno)'},
    {idioma: 'Español (Nativo)'},
    {idioma: 'Inglés (Nivel A2)'}
  ];

  $scope.tecs = [
    {tec:'HTML'},
    {tec:'CSS'},
    {tec:'JavaScript'},
    {tec:'PHP'},
    {tec:'MySQL'},
    {tec:'JSON'},
    {tec:'C,C++'},
    {tec:'Git'}
  ];

  $scope.frames = [
    {frame: 'Ionic'},
    {frame: 'AngularJS'},
    {frame: 'jQuery'},
    {frame: 'Bootstrap'},
    {frame: 'Materialize'}
  ];

}]) //Fin cvCtrl