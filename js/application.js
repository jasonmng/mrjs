'use strict';

define(['backbone','marionette'], function(Backbone){

   var TodoMVC = new Backbone.Marionette.Application();

   TodoMVC.on('initialize:after', function () { Backbone.history.start(); });

   return TodoMVC;

});

