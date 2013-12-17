describe("Prototypes", function() {

  // TODO: A Function Declaration vs. Function Expressions
  // http://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/

  // TODO: Chrome dev tools printing and named functions
  // console.dir(function F() {}); var f = function() {}; console.dir(f)
  // http://stackoverflow.com/questions/13744344/prototype-difference-between-function-declaration-and-expression

  describe("Functions and the prototype property", function() {

    it("should create a prototype for a function", function() {
      function Blank(){};     
      expect(Blank.prototype).not.toBe(undefined);
    });

    it("should inherit from Function.prototype", function() {
      function Blank(){};
      expect(Function.prototype.isPrototypeOf(Blank)).toBe(true);
    });

    it("should assign function's prototype as the prototype for new instance", function() {
      function Blank(){};
      var instance = new Blank();
      expect(Blank.prototype.isPrototypeOf(instance)).toBe(true);
    });
 
    it("should inherit a constructor property from its prototype", function() {
      function Blank(){};

      expect(Blank.constructor).toBe(Function.constructor);

      // Blank.constructor is not actually a property of the Blank function
      // The call gues up in the inheritance chain to the inherited Function.prototype
      expect(Blank.hasOwnProperty('constructor')).toBe(false);
      expect(Blank.prototype.hasOwnProperty('constructor')).toBe(true);

      // Here the assertion happens without inheritance
      expect(Object.getPrototypeOf(Blank).constructor).toBe(Function.prototype.constructor);
    });

    it("should have a prototype if is a constructor", function() {
      function Blank(){};

      expect(Blank.constructor.prototype).not.toBe(undefined);
    });

    // We need to go deeper: every function has a prototype + all objects inherit a constructor property from their prototype
    it("should go deeper", function() {

      function Parent(foo) {}
      
      // So the constructor is a function and it has a prototype
      expect(typeof Parent.constructor).toBe('function');
      expect(Parent.constructor.prototype).not.toBe(undefined);

      // But wait, the constructor prototype is an object... so it must have a constructor?
      expect(Parent.constructor.prototype.constructor).not.toBe(undefined);

      // And logically this constructor should have a prototype since it's a function
      expect(Parent.constructor.prototype.constructor.prototype).not.toBe(undefined);

      // ...and so on. Luckily this behaviour is expected and not actually infinite:
      //
      // Object.prototype.constructor: Returns a reference to the Object function that created the instance's prototype. Note 
      // that the value of this property is a reference to the function itself, not a string containing the function's name.
    });
  });

  describe("Literal objects and the prototype property", function() {

    it("should not create a prototype property for an object literal", function() {
      var o = {};
      expect(o.prototype).toBe(undefined);
    });

    it("should not create a prototype property for an object literal when using Object.create", function() {
      var o = Object.create(Object.prototype);
      expect(o.prototype).toBe(undefined);
      expect(Object.create(Function.prototype).prototype).toBe(undefined);
    });

    it("should inherit from Object.prototype when an object literal", function() {
      var o = {};
      expect(Object.getPrototypeOf(o)).toBe(Object.prototype);
    });

  });

  describe("The __proto__ property", function() {

    it("should assign its internal __proto__ property to its parents prototype", function() {
      
      var Blank = function(){};
      var o = {};

      expect(Blank.__proto__).toBe(Function.prototype); // Tip: Blank is function
      expect(o.__proto__).toBe(Object.prototype); // Tip: o is object literal

    });

    it("should assign instantiated object internal __proto__ to its constructor's prototype object", function() {
      var Blank = function(){};
      var instance = new Blank();

      expect(instance.__proto__).toBe(Blank.prototype);
    });

    it("should not have a prototype property when an instance", function() {
      var Blank = function(){};
      var instance = new Blank();

      expect(instance.prototype).toBe(undefined);
    });

  });

});