describe("Inheritance", function() {

  describe("Function object inheritance", function() {

    it("should inherit parent", function() {

      function Parent() {}
      function Child() {}

      Child.prototype = new Parent();

      // Here the internal __proto__ points to Function.prototype
      expect(Function.prototype.isPrototypeOf(Child)).toBe(true);

      var child = new Child();

      // The child instances internal __proto__ points to Parent.prototype
      // isPrototypeOf checks the whole prototype chain
      expect(Parent.prototype.isPrototypeOf(child)).toBe(true);

      // Here the checking is done manually by going up the chain
      // The first __proto__ is parent instance __proto__ and the second is the actual Parent.prototype
      expect(Parent.prototype).toBe(child.__proto__.__proto__);
    });

    it("should modify instance when prototype is changed", function() {

      function Boo() {}

      Boo.prototype.message = function() {
        return 'bo!';
      }

      var instance = new Boo();

      expect(instance.message()).toBe('bo!');

      Boo.prototype.message = function() {
        return '!ob';
      }

      expect(instance.message()).toBe('!ob');

    });

    it("should inherit from car and vehicle", function() {

      function Vehicle(hasEngine) {
        this.hasEngine = hasEngine || false;
      }

      function Car(make) {
        this.make = make;
      }

      // The new operator creates a generic object and assigns its __proto__ property to Vehicle.prototype
      // The new operator passes the object to the Vehicle constructor function as the this keyword
      // The object gets the properties hasEngine assigned
      // Upon return from the constructor, the object gets assigned to Car.prototype
      Car.prototype = new Vehicle(true);
      Car.prototype.constructor = Car;

      Car.prototype.getSpecs = function () {
        return 'make: ' + this.make + ', has engine: ' + this.hasEngine;
      }

      var ladaInstance = new Car('Lada');

      expect(ladaInstance instanceof Car).toBe(true);
      expect(Car.prototype.constructor).toBe(Car);
      expect(ladaInstance.getSpecs()).toBe('make: Lada, has engine: true');

      var audiInstance = new Car('Audi');

      expect(ladaInstance.getSpecs).toBe(audiInstance.getSpecs);
    });

    it("should actually use prototype functions instead of instance functions", function() {

      function Person(name) {
        this.name = name;
        this.sayHi = function() {
            return 'Hi, I am ' + this.name;
        }
      }

      var protomanInstance = new Person('Protoman');
      var megamanInstance = new Person('Megaman');

      expect(protomanInstance.sayHi).not.toBe(megamanInstance.sayHi);
    });

    // TODO: example of why parent constructor should be overridden in child

  });

  describe("literal object inheritance", function() {
    // TODO: Examples of Object.create
  });

  describe("inheritance and constructors", function() {
    // TODO: Examples of how constructors are used and when they matter
  }); 

});