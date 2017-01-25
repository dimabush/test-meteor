import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Resolutions = new Mongo.Collection('resolutions');


Template.body.helpers({
  resolutions: function () {
      return Resolutions.find();
  }
});

Template.body.events({
    'submit .new-resolution': function (event) {
        let title = event.target.title.value;
        Resolutions.insert({
            title: title,
            createdAt: new Date()
        });

        event.target.title.value = "";

        return false;
    }
});

/*Template.hello.onCreated(function helloOnCreated() {
 this.counter = new ReactiveVar(0);
 });

 Template.hello.helpers({
 counter() {
 return Template.instance().counter.get();
 },
 });

 Template.hello.events({
 'click button'(event, instance) {
 instance.counter.set(instance.counter.get() + 1);
 },
 });*/