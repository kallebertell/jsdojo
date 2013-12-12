/*global describe, it */
'use strict';

(function() {

  describe('Prototypes', function () {

    // ---------------------------------------------------------------------------------------------------------------------------------------

    describe('Introduction to objects', function () {
     
      it('should be an object when instantiated directly', function () {

        var object1 = new Object(),
            object2 = {};

        expect(object1 instanceof Object).toBe(true);
        expect(object2 instanceof Object).toBe(true);
      });

      it('should be an object when function object is created and then instantiated with the "new" keyword', function () {

        var Person = function() {};

        expect(Person instanceof Object).toBe(true);
        expect(new Person() instanceof Object).toBe(true);
      });

      it('should be an object when using String or Number', function () {

        var str = new String('hello'), 
            number = new Number(0);

        expect(str instanceof Object).toBe(true);
        expect(number instanceof Object).toBe(true);
      });

      it('should not be an object when primitive', function () {

        var str = 'hello',
            number = 0;

        expect(str instanceof Object).toBe(false);
        expect(number instanceof Object).toBe(false);
        expect(typeof str === 'string').toBe(true);
        expect(typeof number === 'number').toBe(true);
      });

    });

    // ---------------------------------------------------------------------------------------------------------------------------------------

    describe('Introduction to prototypes', function () {

      it('should create a prototype for a function object', function () {

        var Person = function() {};

        expect(Person.prototype).not.toBe(undefined);
      });

      it('should create an inaccessible prototype for a directly instanciated object', function () {

        var object1 = {}, 
            object2 = new Object();

        expect(object1.prototype).toBe(undefined);
        expect(object2.prototype).toBe(undefined);
      });

      it('should allow access to directly instanciated objects prototype using getPrototypeOf', function () {

        var object1 = {},
            object2 = new Object();

        expect(Object.getPrototypeOf(object1)).not.toBe(undefined);
        expect(Object.getPrototypeOf(object2)).not.toBe(undefined);
      });
    });

    // ---------------------------------------------------------------------------------------------------------------------------------------
    // One of the common usage of __proto__ is for inheritance pattern without calling the parent's constructor.
    // See: http://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/

    describe('Introduction the __proto__ property', function () {

      it('should assign o.__proto__ when function object is instanciated', function () {

        function Person() {}

        // Not correct: __proto__  is an empty function here because the function object has not been instanciated
        // Corrent: Person.__proto__ === Function.prototype
        expect(typeof Person.__proto__ === 'function').toBe(true);
        expect(typeof Object.getPrototypeOf(Person) === 'function').toBe(true);

        var man = new Person();

        // After instanciation it's an object --- WHY?
        expect(typeof man.__proto__ === 'object').toBe(true);
        expect(typeof Object.getPrototypeOf(man) === 'object').toBe(true);
        
        // ...and to be more precise it's the Person.prototype
        expect(man.__proto__).toBe(Person.prototype);
        expect(Object.getPrototypeOf(man)).toBe(Person.prototype);
        expect(Person.prototype.isPrototypeOf(man)).toBe(true); // Same as the line above

        // And of course the prototype of Person is Object
        expect(Object.prototype.isPrototypeOf(Person)).toBe(true);
      });

    });

    // ---------------------------------------------------------------------------------------------------------------------------------------

    describe('Introduction to prototype inheritance', function () {

      it('should inherit from Function if a function object', function () {
        
        function Person() {}

        expect(Function.prototype.isPrototypeOf(Person)).toBe(true);
        expect(Object.prototype.isPrototypeOf(Function)).toBe(true);
      });

      /* Prototype chain:
       *          Prototype             Prototype                        Prototype
       *  child -------------> parent -------------> Object.prototype  -------------> null
       */
      it('should assign parent as childs prototype and object as parents when using directly instanciated object', function () {

        var parent = {},
            child = Object.create(parent);

        expect(Object.getPrototypeOf(parent).isPrototypeOf(child)).toBe(true);
        expect(Object.prototype.isPrototypeOf(parent)).toBe(true);
      });

      it('should assign parent as childs prototype and object as parents when using function objects', function () {

        function Parent() {}
        function Child() {}

        Child.prototype = new Parent();

        var child = new Child();

        expect(Object.getPrototypeOf(Parent).isPrototypeOf(Child)).toBe(true);
        expect(Object.getPrototypeOf(new Parent()).isPrototypeOf(child)).toBe(true); // TODO: explain this somewhere
        expect(Object.prototype.isPrototypeOf(parent)).toBe(true);
      });        
    });

    it('should be able to call inherited parent functions', function () {

      var msg = 'yak yak yak yak'

      function Parent(message) {
        this.say = function() {
          return msg;
        }
      }

      function Child() {}

      Child.prototype = new Parent();

      var child = new Child();

      expect(new Parent(msg).say()).toBe(msg);
      expect(child.say()).toBe(msg);
    });

    it('should be able to call inherited parent prototype functions', function () {

      function Vehicle() {}

      Vehicle.prototype.maxSpeed = function() {
        return 100;
      }

      function Car() {}

      Car.prototype = new Vehicle();

      var lada = new Car();

      expect(lada.maxSpeed()).toBe(100);

    });

    it('should be very clear to everyone when to use this and when prototype', function () {
      
      function Vehicle() {}

      Vehicle.prototype.maxSpeed = function() {
        return 100;
      }

      Vehicle.prototype.updateMaxSpeed = function(value) {
          Vehicle.prototype.maxSpeed = function() {
              return value;
          }
      }

      function Car() {}
      Car.prototype = new Vehicle();

      function Airplane() {}
      Airplane.prototype = new Vehicle();

      var car = new Car();
      var airplane = new Airplane();

      expect(car.maxSpeed()).toBe(100);
      expect(car.maxSpeed()).toBe(100);

      car.updateMaxSpeed(200);

      expect(car.maxSpeed()).toBe(200);
      expect(airplane.maxSpeed()).toBe(200); // NOTE: speed changed for airplane instance also!

    });      

    // TODO:
    // Inheritance & constructors (+ why overriding is important)    

  });

})();