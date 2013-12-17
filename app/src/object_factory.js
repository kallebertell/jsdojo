var ObjectFactory = {

  createObjectUsingLiteralNotation: function() {
  
    return {};
  },

  createObjectUsingTheNewOperator: function() {
  
    var Car = function() {

    };

    return new Car();
  },

  createObjectUsingConstructorFunction: function() {
    return function(){};    
  },

  createStringObject: function(value) {
    return new String("Hei");
  },

  createNumberObject: function(value) {
    return new Number(0);
  },

  createStringPrimitive: function(value) {
    return "";
  },

  createNumberPrimitive: function(value) {
    return 0;
  }
};