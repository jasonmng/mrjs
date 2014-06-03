'use strict';

define([
   'backbone',
   'marionette',
   'underscore',
   'text!modules/main/views/template/todoapp.html'
], function(Backbone, Marionette, _ , html ){

   // Add prefix by defining it in the app.module
   return Backbone.Marionette.Layout.extend({
      el: '#todoapp',
      template: _.template(html),
      regions: { header: '#todoapp_header', main: '#todoapp_main', footer: '#todoapp_footer' }
   });

});
