'use strict';
define([
   'modules/main/views/itemView',
   'backbone',
   'marionette',
   'underscore',
   'text!modules/main/views/template/todoComposite.html'
], function(itemView, Backbone, Marionette, _, html){

   // Item List View
   // --------------
   //
   // Controls the rendering of the list of items, including the
   // filtering of activs vs completed items for display.
   return Backbone.Marionette.CompositeView.extend({
      template: _.template(html),
      itemView: itemView,
      itemViewContainer: '#todo-list',

      ui: {
         toggle: '#toggle-all'
      },

      events: {
         'click #toggle-all': 'onToggleAllClick'
      },

      collectionEvents: {
         'all': 'update'
      },

      onRender: function () {
         this.update();
      },

      update: function () {
         function reduceCompleted(left, right) {
            return left && right.get('completed');
         }

         var allCompleted = this.collection.reduce(reduceCompleted, true);

         this.ui.toggle.prop('checked', allCompleted);
         this.$el.parent().toggle(!!this.collection.length);

         console.log(this.$el.parent().length);
         
      },

      onToggleAllClick: function (e) {
         var isChecked = e.currentTarget.checked;

         this.collection.each(function (todo) {
            todo.save({ 'completed': isChecked });
         });
      }
   });

});
