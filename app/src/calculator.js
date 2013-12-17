'use strict';
var dojoapp = dojoapp || {};

dojoapp.calculator = (function(printer) {
	return {
		add: function(a, b) {
			return parseInt(a, 10) + parseInt(b, 10);
		},
		addAndPrint: function(a, b, element) {
			var result = this.add(a, b);
			printer.print(result, element);
		}
	}
})(dojoapp.printer);