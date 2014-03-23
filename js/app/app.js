define([
	'app/views/appview'
], function (AppView) {
	
	'use strict';

	var initialize = function () {
		var appView = new AppView();
		$('body').append(appView.el);
	};

	return {
		initialize: initialize,
	}

	
});