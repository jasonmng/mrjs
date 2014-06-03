'use strict';

define([
    'application',
    'backbone.localStorage',
    'marionette',
    'modules/main/controller'
], function(App, Backbone, Marionette, C_content ){

    App.addRegions({ content: 'body' });

    /* 
     * load in the various modules
     *------------------------------*/

    App.module('TodoList', function(TodoList, App, Backbone, Marionette, $) {

        TodoList.addInitializer( function(){

             var controller = new C_content();
             App.content.show( controller.layout );
             controller.start();

        });

        // Application Event Handlers
        // --------------------------
        //
        // Handler for filtering the list of items by showing and
        // hiding through the use of various CSS classes

        App.vent.on('todoList:filter', function (filter) {

            filter = filter || 'all';
            $('#todoapp').attr('class', 'filter-' + filter);

        });

    });
    

    return App;

});
