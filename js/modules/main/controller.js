'use strict';

require([
   'application',
   'modules/main/layout',
   'modules/main/views/listView',
   'modules/main/models/collection'
], function(App, Layout, View, Collection){

   App.module('TodoList', function (TodoList, App, Backbone, Marionette, $) {

      // TodoList Router
      // ---------------
      //
      // Handle routes to show the active vs complete todo items
      TodoList.Router = Marionette.AppRouter.extend({
         appRoutes: { '*filter': 'filterItems' }
      });

      // TodoList Controller (Mediator)
      // ------------------------------
      //
      // Control the workflow and logic that exists at the application
      // level, above the implementation detail of views and models
      TodoList.Controller = function () {
         this.todoList = new Collection();
      };

      _.extend(TodoList.Controller.prototype, {
         // Start the app by showing the appropriate views
         // and fetching the list of todo items, if there are any
         start: function () {
            this.showHeader(this.todoList);
            this.showFooter(this.todoList);
            this.showTodoList(this.todoList);
            this.todoList.fetch();
         },

         showHeader: function (todoList) {
            var header = new Layout.Header({ collection: todoList });
            App.header.show( header );
         },

         showFooter: function (todoList) {
            var footer = new Layout.Footer({ collection: todoList });
            App.footer.show( footer );
         },

         showTodoList: function (todoList) {
            var main = new View({ collection: todoList } );
            App.main.show( main ); 
         },

         // Set the filter to show complete or all items
         filterItems: function (filter) {
            App.vent.trigger('todoList:filter', (filter && filter.trim()) || '');
         }

      });

      // TodoList Initializer
      // --------------------
      //
      // Get the TodoList up and running by initializing the mediator
      // when the the application is started, pulling in all of the
      // existing Todo items and displaying them.
      TodoList.addInitializer(function () {
         var controller = new TodoList.Controller();
         controller.router = new TodoList.Router({
            controller: controller
         });

         controller.start();
      });

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
