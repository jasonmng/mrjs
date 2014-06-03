'use strict';

define([
   'marionette',
], function(Marionette){

   // TodoList Router
   // ---------------
   //
   // Handle routes to show the active vs complete todo items
   return Marionette.AppRouter.extend({
      appRoutes: { '*filter': 'filterItems' }
   });

});
