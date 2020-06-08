const events = require("events");

/*
=> new events.EventEmitter();

By adding an event listener to a class, for example, that class will
be able to create events (send an HTTP request) based on the user's 
interaction (a click on a button).

*/

const myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", (msg) => {
  console.log(msg);
});

myEmitter.emit("someEvent", "The event was emitted.");

class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const james = new Person("James");
const mary = new Person("Mary");
const ryu = new Person("Ryu");

const people = [james, mary, ryu];

people.forEach((person) => {
  person.on("speak", (msg) => {
    console.log(person.name + " said: " + msg);
  });
});

james.emit("speak", "Hey dudes!");
