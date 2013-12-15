describe("learning prototypes", function() {

  // TODO: A Function Declaration vs. Function Expressions
  // http://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/

  // TODO: Chrome dev tools printing and named functions
  // console.dir(function F() {}); var f = function() {}; console.dir(f)
  // http://stackoverflow.com/questions/13744344/prototype-difference-between-function-declaration-and-expression

  describe("functions and the prototype property", function() {

    // Every function gets a prototype (ie. prototype is always a property of a function object)
    it("should create prototype for a function", function() {
      
      function Parent() {}
      
      expect(Parent.prototype).not.toBe(undefined);

    });

    // Function objects inherit from Function.prototype
    it("should inherit from Function.prototype", function() {
      
      function Parent() {}

      expect(Function.prototype.isPrototypeOf(Parent)).toBe(true);
    });

    // A function’s prototype property is the object that will be assigned as the prototype to all 
    // instances created when this function is used as a constructor.
    it("should assign function's prototype as the prototype for new instance", function() {
      
      function Parent() {}

      var instance = new Parent();

      expect(Parent.prototype.isPrototypeOf(instance)).toBe(true);
    });
 
    // All objects inherit a constructor property from their prototype
    it("should inherit a constructor property from its prototype", function() {

      function Parent() {}

      expect(Parent.constructor).toBe(Function.constructor);

      // Parent.constructor is not actually a property of the Parent function
      // The call gues up in the inheritance chain to the inherited Function.prototype
      expect(Parent.hasOwnProperty('constructor')).toBe(false);
      expect(Parent.prototype.hasOwnProperty('constructor')).toBe(true);

      // Here the assertion happens without inheritance
      expect(Object.getPrototypeOf(Parent).constructor).toBe(Function.prototype.constructor);
    });

    // Since every function gets a prototype, the constructor function has one too
    it("should have a prototype if is a constructor", function() {

      function Parent() {}
      
      expect(Parent.constructor.prototype).not.toBe(undefined);
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

  describe("objects and the prototype property", function() {

    // The prototype object is meant to be used on constructor functions, basically functions
    // that will be called using the new operator to create new object instances.
    it("should not create a prototype property for an object literal", function() {
      
      var o = {};

      expect(o.prototype).toBe(undefined);
    });

    it("should not create a prototype property for an object literal when using Object.create", function() {
      
      var o1 = Object.create(Object.prototype),
          o2 = Object.create(Function.prototype);

      expect(o1.prototype).toBe(undefined);
      expect(o2.prototype).toBe(undefined);
    });

    it("should inherit from Object.prototype when an object literal", function() {
      
      var o = {};

      expect(Object.getPrototypeOf(o)).toBe(Object.prototype);
    });

  });

  // When an object is created, its __proto__ property is set to reference the same object as its 
  // internal [[Prototype]] (i.e. its constructor's prototype object)
  describe("the __proto__ property", function() {

    it("should assign its internal __proto__ property to its parents prototype", function() {
      
      function Parent() {}
      var o = {};
      
      expect(Parent.__proto__).toBe(Function.prototype);
      expect(o.__proto__).toBe(Object.prototype);

    });

    it("should assign instanciated object internal __proto__ to its constructor's prototype object", function() {

      function Parent() {}

      var p = new Parent();

      expect(p.__proto__).toBe(Parent.prototype);
    });

    it("should not have an internal prototype property when an instance", function() {

      function Parent() {}

      var p = new Parent();

      expect(p.prototype).toBe(undefined);
    });

  });

  describe("function object inheritance", function() {

    it("should inherit parent", function() {

      function Parent(p) { this.p = p; }
      function Child(c) { this.c = c; }

      Child.prototype = new Parent('parent');

      // Here the internal __proto__ points to Function.prototype
      expect(Function.prototype.isPrototypeOf(Child)).toBe(true);

      var child = new Child('child');

      // The child instances internal __proto__ points to Parent.prototype
      // isPrototypeOf checks the whole prototype chain
      expect(Parent.prototype.isPrototypeOf(child)).toBe(true);

      // Here the checking is done manually by going up the chain
      // The first __proto__ is parent instance __proto__ and the second is the actual Parent.prototype
      expect(Parent.prototype).toBe(child.__proto__.__proto__);
    });

    // TODO: An example of when a change in inherited prototype affects all instances

  });

  describe("literal object inheritance", function() {
    // TODO: Examples of Object.create
  });

  describe("inheritance and constructors", function() {
    // TODO: Examples of how constructors are used and when they matter
  }); 

});