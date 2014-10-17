window.countryComparison = window.countryComparison || {};

(function( app ) {

  'use strict';

  app.main = (function() {

    var paramsList = {
        col1: {
          title: 'temperature',
          description: 'taux de chomage1'
        },
        col2: {
          title: 'Education',
          description: 'high literacy rate, low school dropout rate, high students proficiency'
        },
        col3: {
          title: 'Travail',
          description: 'low unemployment rate'
        },
        col4: {
          title: 'Innovation',
          description: 'high investments in research, high informatization'
        },
        col5: {
          title: 'Ecologie',
          description: 'high renewable energy usage, low pollution, low energy consumption'
        },
        col6: {
          title: 'Chaleur',
          description: 'mild temperatures and low precipitations'
        },
        col7: {
                    title: "Une ville cosmopolite",
                    description: "% d'étrangers dans la population totale"
                }
      },

      continents = {
        sr: 'Cantons romands',
        sa: 'Cantons allémaniques'
     
     
      };


    return {

      init: function( d ) {
        app.selection.show( d );
      },

      paramsList: paramsList,

      continents: continents,

    };

  })();


  // ----------------- Utilities -----------------

  $.extend($.easing, {
    easingFunction: function( x, t, b, c, d ) {
      if (( t /= d/2 ) < 1) {
        return c/2*t*t + b;
      }
      return -c/2 * ((--t)*(t-2) - 1) + b;
    },
  });

  function detectLowPerformanceDevices() {
   if ( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ) {
      $( 'body' ).addClass( 'low-performance' );
    }
  }

  function fixScrolling() {

    $( 'input' ).on( 'blur', function () {
      window.scrollTo( 0, 0 );
      document.body.scrollTop = 0;
    });

    $( document ).on( 'touchmove', function( e ) {
      e.preventDefault();
    });

  }


  // ----------------- Data Loading and Startup -----------------

  $( document ).ready( function() {

    fixScrolling();
    detectLowPerformanceDevices();

    d3.csv( 'data/countries.csv', function( data ) {

      app.main.init( data );

      d3.json( 'http://ipinfo.io/geo', function( response ) {
        if ( response && response.city ) {
          app.selection.setDefaultCountry( response.region );
        }
      });

    });

  });

})( window.regionComparison );