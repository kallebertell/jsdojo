'use strict';

(function() {

  describe('Communicator', function () {
    
    // SCOPING

    it('should not allow others to modify messengerName', function() {
      window.messengerName = "Jim";
      expect(communicator.createSayMessage('foo')).toBe('Bob says: foo');
    });


    it('should not bleed the shout func into global scope', function() {
      expect(window.shout).toBe(undefined);
    });

  });

})();