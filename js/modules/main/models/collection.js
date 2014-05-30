'use strict';
define(['modules/main/models/model','backbone','backbone.localStorage'], function(model, Backbone){

   /* 
    * Todo Collection
    *------------------*/
   
	return Backbone.Collection.extend({
		model: model,

		localStorage: new Backbone.LocalStorage('todos-backbone-marionette'),

		getCompleted: function () {
			return this.filter(this._isCompleted);
		},

		getActive: function () {
			return this.reject(this._isCompleted);
		},

		comparator: function (todo) {
			return todo.get('created');
		},

		_isCompleted: function (todo) {
			return todo.isCompleted();
		}
	});
   
});

