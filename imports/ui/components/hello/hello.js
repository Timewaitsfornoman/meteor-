import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
  this.sayHello = new ReactiveVar('hello world!');
});

Template.hello.helpers({
  sayHello() {
    return Template.instance().sayHello.get();
  }
});
