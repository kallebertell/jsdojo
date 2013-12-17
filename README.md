Setup Dev Env
-------------

Install VirtualBox
    
    https://www.virtualbox.org/wiki/Downloads
    

Install Vagrant
    
    http://www.vagrantup.com/downloads.html 
    

Clone this repo including submodules

    git clone --recursive https://github.com/kallebertell/jsdojo.git
    

Cd into the dir
    
    cd jsdojo
    

Provision the virtual machine
    
    vagrant up


Open up the app in a browser by opening this url
    
    file://localhost/[repopath]/app/index.html


Run the tests in a browser by opening this url
    
    file://localhost/[repopath]/app/SpecRunner.html


Scoping / Information hiding
-------------------------
In big projects you want to make sure your code A doesn't affect your code B.
Javascript doesn't have block-scoping, it doesn't have packages, nor any other built-in modularization primitive.
What are you to do?!
Well javascript has function scoping; and you can use that to "hide" variables.

Make the tests in communicator_spec.js pass by using function scoping in communicator.js



Modularization
-------------------------
Another important thing in big projects is modularization. 
A module encapsulates a collection of cohesive functionality.
Modules may be dependant upon eachother and should make such dependencies clear to the reader.

As mentioned in the previous section javascript doesn't have language features which can be used for this in a self-evident manner. E.g. in Java we have the Class concept which can be seen as a module. It is found in its own file and if it uses other classes it has the import statements to declare it.

We can use function scoping and common conventions to achieve the above.

The projects has a tools.js file which has two distinct functionalities, printing and calculating.
Split tools.js into printer.js and calculator.js.
Make sure the functionalities are encapsulated (doesn't pollute global scope, besides the "dojoapp" namespace). 
Make the tests in modularization_spec.js pass


Objects
-------------------------

In JavaScript, almost everything is an object. All primitive types except null and undefined are treated as objects. They can be assigned properties (assigned properties of some types are not persistent), and they have all characteristics of objects.

It's important to understand the basics of objects and what properties they have before starting to learn prototypes. 
Make the tests in objects_spec.js pass by completing object_factory.js.

Prototypes
-------------------------

All objects in JavaScript are descended from Object; all objects inherit methods and properties from Object.prototype.

Since Javascript doesn't exactly have sub-class objects, prototype is a useful workaround to make a "base class" object of certain functions that act as objects.

Before starting to work on prototypes_spec.js, there's a few facts you should know about prototypes:

* every function gets a prototype (ie. prototype is always a property of a function object)
* all functions inherit from Function.prototype
* a function’s prototype property is the object that will be assigned as the prototype to all instances created when this function is used as a constructor
* all objects inherit a constructor property from their prototype
* since every function gets a prototype, the constructor function has one too
* the prototype object is meant to be used on constructor functions, basically functions that will be called using the new operator to create new object instances
* when an object is created, its \_\_proto\_\_ property is set to reference the same object as its its constructor's prototype object


Inheritance
-------------------------

**Java**
```
public class Mammal {
    public void breath() {
        // do some breathing
    }
}
public class Cat extends Mammal {
    // now cat too can breath!
}
```

**JavaScript**
```
function Mammal() {
}
Mammal.prototype.breath = function() {
    // do some breathing
}
function Cat() {
}
Cat.prototype = new Mammal()
Cat.prototype.constructor = Cat
// now cat too can breath!
```

Javascript uses prototype inheritance that works like this:

* an object inherits all the properties of its parent
* an object can override a property of its parent by setting the property on itself
* a constructor creates objects
* each constructor has an associated prototype object, which is simply another object
* when an object is created, it’s parent is set to the prototype object associated with the constructor that created it

Make inheritance_spec.js pass.


Get to know Node
-------------------------
http://nodejs.org/


Get to know NPM
-------------------------
https://npmjs.org/


Get to know Yeoman
-------------------------
http://yeoman.io/


Get to know Bower
-------------------------
https://github.com/bower/bower


Get to know Grunt
-------------------------
http://gruntjs.com/

