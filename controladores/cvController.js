angular.module('appCV.contrsCV', [])

.controller('cvCtrl', ['$scope','$translate', function($scope,$translate){

  $scope.personalInfo = {
    nombre:    'Nestor Dobrinov Edrev',
    foto:      'img/fotoPerfil.jpg',
    direccion: 'Orihuela (Alicante)',
    telefono:  '+34647154820',
    email:     'nestor.edrev@gmail.com',
    skype:     'dokich',
    github:    'https://github.com/jokera666',
    linkedin:  'https://www.linkedin.com/in/nestor-dobrinov-edrev/'

  };

  var POSITION_TRANSLATED0 = $translate.instant('POSITION_DESCRIPTION0');
  var POSITION_TRANSLATED1 = $translate.instant('POSITION_DESCRIPTION1');
  var POSITION_TRANSLATED2 = $translate.instant('POSITION_DESCRIPTION2');

  var PLACE_TRANSLATED0 = $translate.instant('PLACE_DESCRIPTION0');
  var PLACE_TRANSLATED1 = $translate.instant('PLACE_DESCRIPTION1');
  var PLACE_TRANSLATED2 = $translate.instant('PLACE_DESCRIPTION2');

  var PERIOD_TRANSLATED0 = $translate.instant('PERIOD_DESCRIPTION0');
  var PERIOD_TRANSLATED1 = $translate.instant('PERIOD_DESCRIPTION1');
  var PERIOD_TRANSLATED2 = $translate.instant('PERIOD_DESCRIPTION2');

  $scope.experiencia = [
    {
      oficio:  POSITION_TRANSLATED0,
      lugar:   PLACE_TRANSLATED0,
      periodo: PERIOD_TRANSLATED0
    },
    {
      oficio:  POSITION_TRANSLATED1,
      lugar:   PLACE_TRANSLATED1,
      periodo: PERIOD_TRANSLATED1
    },
    {
      oficio:  POSITION_TRANSLATED2,
      lugar:   PLACE_TRANSLATED2,
      periodo: PERIOD_TRANSLATED2
    }
  ];


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

  //Inicializar el dropdown de idiomas
  $scope.idioma = 'es';
  $scope.cambiarIdioma = function(idioma)
  {
    $scope.idioma = idioma;
    $translate.use(idioma);
  }

}]) //Fin cvCtrl