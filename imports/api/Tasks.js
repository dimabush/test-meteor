Resolutions = new Mongo.Collection('resolutions');

if (Meteor.isClient) {
    Template.body.helpers({
        resolutions: function () {
            return Resolutions.find();
        }
    });


    Template.body.events({
     'submit .new-resolution': function (event) {
     let title = event.target.title.value;
     // let title = Resolutions.find({});
     Resolutions.insert({
     title: title,
     createdAt: new Date()
     });

     event.target.title.value = "";

     return false;
     }
     });

    /*Template.body.events({
        'submit .new-task'(event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            const target = event.target;
            const text = target.text.value;

            // Insert a task into the collection
            Tasks.insert({
                text,
                createdAt: new Date(), // current time
            });

            // Clear form
            target.text.value = '';
        },
    });*/
}

if (Meteor.isServer){
    Meteor.startup(function () {

    })
}