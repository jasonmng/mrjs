'use strict';

define([

   'application',
   'backbone',
   'marionette',
   'underscore',
   'text!modules/main/views/template/footer.html',

], function(App, Backbone, Marionette, _ , footerHTML ){
   

	// Layout Footer View
	// ------------------
	return Backbone.Marionette.ItemView.extend({

		template: _.template(footerHTML),

		// UI bindings create cached attributes that
		// point to jQuery selected objects
		ui: {
			filters: '#filters a'
		},

		events: {
			'click #clear-completed': 'onClearClick'
		},

		collectionEvents: {
			'all': 'render'
		},

		templateHelpers: {
			activeCountLabel: function () {
				return (this.activeCount === 1 ? 'item' : 'items') + ' left';
			}
		},

		initialize: function () {
			this.listenTo(App.vent, 'todoList:filter', this.updateFilterSelection, this);
		},

		serializeData: function () {
			var active = this.collection.getActive().length;
			var total = this.collection.length;

			return {
				activeCount: active,
				totalCount: total,
				completedCount: total - active
			};
		},

		onRender: function () {
			this.$el.parent().toggle(this.collection.length > 0);
			this.updateFilterSelection();
		},

		updateFilterSelection: function () {
			this.ui.filters
				.removeClass('selected')
				.filter('[href="' + (location.hash || '#') + '"]')
				.addClass('selected');
		},

		onClearClick: function () {
			var completed = this.collection.getCompleted();
			completed.forEach(function (todo) {
				todo.destroy();
			});
		}
	});
   

});
