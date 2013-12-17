'use strict';
var dojoapp = dojoapp || {};

dojoapp.printer = (function($) {
	return {
		print: function(msg, element) {
			$(element).html(msg);
		}
	}
})(jQuery);