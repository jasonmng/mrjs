'use strict';

define([

   'backbone',
   'marionette',
   'underscore',
   'text!modules/main/views/template/header.html',

], function(Backbone, Marionette, _ , headerHTML ){

	// Layout Header View
	// ------------------
	return Backbone.Marionette.ItemView.extend({
		template: _.template(headerHTML),

		// UI bindings create cached attributes that
		// point to jQuery selected objects
		ui: {
			input: '#new-todo'
		},

		events: {
			'keypress #new-todo': 'onInputKeypress'
		},

		onInputKeypress: function (e) {
			var ENTER_KEY = 13,
			todoText = this.ui.input.val().trim();

			if (e.which === ENTER_KEY && todoText) {
				this.collection.create({
					title: todoText
				});
				this.ui.input.val('');
			}
		}
	});

});
