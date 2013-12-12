'use strict';

(function() {

  describe('Modules', function () {
    
    // MODULARIZATION

    it('should have the following modules structure', function() {
      expect(dojoapp).not.toBe(undefined);
      expect(dojoapp.calculator).not.toBe(undefined);
      expect(dojoapp.printer).not.toBe(undefined);
    });


    it('should print msg', function() {
      var $el = $('<div>foo</div>');
      
      dojoapp.printer.print('bar', $el);
      
      expect($el.html()).toBe('bar');
    });


    it('should print result into the given element', function() {
      var $el = $('<div>foo</div>');

      dojoapp.calculator.addAndPrint(2, 3, $el);
      
      expect($el.html()).toBe('5');
    });


    it('should use the printer modules print method', function() {
      var printWasCalled = false;

      dojoapp.printer.print = function() {
        printWasCalled = true;
      };

      dojoapp.calculator.addAndPrint(2, 3, $('<p>'));
      
      expect(printWasCalled).toBe(true);
    });

  });

})();