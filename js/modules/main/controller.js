'use strict';

define([
   'application',
   'modules/main/routes',
   'modules/main/layout',
   'modules/main/views',
   'modules/main/models/collection'
], function(App, Router, Layout, Views, Collection){

  var Controller = function () {

        this.router = new Router({ controller: this });
        this.layout   = new Layout();

        this.todoList = new Collection();

  };

  _.extend(Controller.prototype, {

     // Start the app by showing the appropriate views
     // and fetching the list of todo items, if there are any
     
     start: function () {

        this.todoList.fetch();
        this.getModule();

     }

     , getModule: function() {

         this.layout.header.show( new Views.header({ collection: this.todoList }) );
         this.layout.main.show( new Views.content({ collection: this.todoList }) );
         this.layout.footer.show( new Views.footer({ collection: this.todoList }) );

     }

     // Set the filter to show complete or all items
     , filterItems: function (filter) {
        App.vent.trigger('todoList:filter', (filter && filter.trim()) || '');
     }

  });

  return Controller;

});
