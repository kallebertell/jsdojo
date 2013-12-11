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


Prototypes
-------------------------


Inheritance
-------------------------


Get to know Node
-------------------------


Get to know NPM
-------------------------


Get to know Yeoman
-------------------------


Get to know Bower
-------------------------


Get to know Grunt
-------------------------

