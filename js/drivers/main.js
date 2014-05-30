'use strict';

define(['application','backbone.localStorage','marionette'], function(App, Backbone, Marionette){

    App.addRegions({ main: '#main', header: '#header', footer: '#footer' });

    /* 
     * load in the various modules
     *------------------------------*/

    require(['modules/main/controller'], function( controller ){});
    // require(['modules/header/controller'], function( controller ){});
    // require(['modules/footer/controller'], function( controller ){});

    return App;

});
