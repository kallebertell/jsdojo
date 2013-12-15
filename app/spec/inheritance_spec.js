describe("Prototypes", function() {

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