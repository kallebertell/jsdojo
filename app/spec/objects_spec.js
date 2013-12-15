'use strict';

(function() {

  describe('Objects', function () {

    it('should be an object when created using literal notation or the new operator', function () {

      var literalNotationObject = ObjectFactory.createObjectUsingLiteralNotation();
      var newOperatorObject = ObjectFactory.createObjectUsingTheNewOperator();

      expect(typeof literalNotationObject).toBe('object');
      expect(typeof newOperatorObject).toBe('object');
    });

    it('should be an object when created using a constructor function', function () {

      var Obj = ObjectFactory.createObjectUsingConstructorFunction();
      
      expect(Obj instanceof Object).toBe(true);
      expect(new Obj() instanceof Object).toBe(true);
    });

    it('should be an object when using String or Number', function () {

      var str = ObjectFactory.createStringObject();
      var number = ObjectFactory.createNumberObject();

      expect(str instanceof Object).toBe(true);
      expect(number instanceof Object).toBe(true);
    });

    it('should not be an object when primitive', function () {

      var str = ObjectFactory.createStringPrimitive();
      var number = ObjectFactory.createNumberPrimitive();

      expect(str instanceof Object).toBe(false);
      expect(number instanceof Object).toBe(false);
      expect(typeof str === 'string').toBe(true);
      expect(typeof number === 'number').toBe(true);
    });

    it('should still behave like an object when is a primitive', function () {
      
      var str = ObjectFactory.createStringPrimitive();
      var number = ObjectFactory.createNumberPrimitive();

      expect(typeof str.toString).toBe('function');
      expect(typeof number.toString).toBe('function');
    });

  });

})();