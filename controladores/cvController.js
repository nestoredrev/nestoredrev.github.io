angular.module('appCV.contrsCV', [])

.controller('cvCtrl', ['$scope','$translate', function($scope,$translate){

  $scope.personalInfo = {
    nombre:    'Nestor Dobrinov Edrev',
    foto:      'img/fotoPerfil.jpg',
    direccion: 'Orihuela (Alicante)',
    telefono:  '+34647154820',
    email:     'nestor.edrev@gmail.com',
    skype:     'dokich',
    github0:    'https://github.com/nestoredrev',
    github1:    'https://github.com/jokera666',
    linkedin:  'https://www.linkedin.com/in/nestor-dobrinov-edrev/'

  };

  var POSITION_TRANSLATED0 = $translate.instant('POSITION_DESCRIPTION0');
  var POSITION_TRANSLATED1 = $translate.instant('POSITION_DESCRIPTION1');
  var POSITION_TRANSLATED2 = $translate.instant('POSITION_DESCRIPTION2');
  var POSITION_TRANSLATED3 = $translate.instant('POSITION_DESCRIPTION3');

  var PLACE_TRANSLATED0 = $translate.instant('PLACE_DESCRIPTION0');
  var PLACE_TRANSLATED1 = $translate.instant('PLACE_DESCRIPTION1');
  var PLACE_TRANSLATED2 = $translate.instant('PLACE_DESCRIPTION2');
  var PLACE_TRANSLATED3 = $translate.instant('PLACE_DESCRIPTION3');

  var PERIOD_TRANSLATED0 = $translate.instant('PERIOD_DESCRIPTION0');
  var PERIOD_TRANSLATED1 = $translate.instant('PERIOD_DESCRIPTION1');
  var PERIOD_TRANSLATED2 = $translate.instant('PERIOD_DESCRIPTION2');
  var PERIOD_TRANSLATED3 = $translate.instant('PERIOD_DESCRIPTION3');

  $scope.experiencia = [
    {
      oficio:  POSITION_TRANSLATED0,
      lugar:   PLACE_TRANSLATED0,
      periodo: PERIOD_TRANSLATED0,
      lugarUrl: 'http://scorpora.eu/'
    },
    {
      oficio:  POSITION_TRANSLATED1,
      lugar:   PLACE_TRANSLATED1,
      periodo: PERIOD_TRANSLATED1,
      lugarUrl: 'http://umh.es/'
    },
    {
      oficio:  POSITION_TRANSLATED2,
      lugar:   PLACE_TRANSLATED2,
      periodo: PERIOD_TRANSLATED2
    },
    {
      oficio:  POSITION_TRANSLATED3,
      lugar:   PLACE_TRANSLATED3,
      periodo: PERIOD_TRANSLATED3,
      lugarUrl: 'http://www.airenetworks.es/' 
    }
  ];


  var TITLE_TRANSLATED0 = $translate.instant('TITLE_DESCRIPTION0');
  var TITLE_TRANSLATED1 = $translate.instant('TITLE_DESCRIPTION1');
  var TITLE_TRANSLATED2 = $translate.instant('TITLE_DESCRIPTION2');

  var TITLE_PLACE_TRANSLATED0 = $translate.instant('TITLE_PLACE0');
  var TITLE_PLACE_TRANSLATED1 = $translate.instant('TITLE_PLACE1');
  var TITLE_PLACE_TRANSLATED2 = $translate.instant('TITLE_PLACE2');

  $scope.educacion = [
    { titulo: TITLE_TRANSLATED0,
      lugar:  TITLE_PLACE_TRANSLATED0,
      periodo: '2012 - 2017'
    },
    { titulo: TITLE_TRANSLATED1,
      lugar:  TITLE_PLACE_TRANSLATED1,
      periodo: '2010 - 2012'
    },
    { titulo: TITLE_TRANSLATED2,
      lugar:  TITLE_PLACE_TRANSLATED2,
      periodo: '2008 - 2010'
    }
  ];

  var SKILL_TRANSLATED0 = $translate.instant('SKILL_DESCRIPTION0');
  var SKILL_TRANSLATED1 = $translate.instant('SKILL_DESCRIPTION1');
  var SKILL_TRANSLATED2 = $translate.instant('SKILL_DESCRIPTION2');
  var SKILL_TRANSLATED3 = $translate.instant('SKILL_DESCRIPTION3');

  $scope.habilidades = [
      {habilidad: SKILL_TRANSLATED0},
      {habilidad: SKILL_TRANSLATED1},
      {habilidad: SKILL_TRANSLATED2},
      {habilidad: SKILL_TRANSLATED3}
  ];


  var LANG_TRANSLATED0 = $translate.instant('LANG_DESCRIPTION0');
  var LANG_TRANSLATED1 = $translate.instant('LANG_DESCRIPTION1');
  var LANG_TRANSLATED2 = $translate.instant('LANG_DESCRIPTION2');

  $scope.idiomas = [
    {idioma: LANG_TRANSLATED0},
    {idioma: LANG_TRANSLATED1},
    {idioma: LANG_TRANSLATED2}
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