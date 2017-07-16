import {
    Meteor
} from 'meteor/meteor';
import {
    Links,
    User
} from '/imports/api/links/links.js';
import './info.html';

Template.info.onCreated(function() {
    Meteor.subscribe('links.all');
});

Template.info.helpers({
    links() {

        var links = Links.find({}).fetch();

        links = links.map(function(value) {
            if(value.userId == Session.get('userId')){
                value.isCurrent = true;
            }else{
                value.isCurrent = false;
            }
            return value;
        });
        console.log('$$$$$$$$$$$$$$$$$', links);
        return links;
    }
});

Template.info.events({
    'submit .info-link-add' (event) {
        event.preventDefault();
        const target = event.target;
        const msg = target.msg.value;

        const userId = Session.get('userId');
        Meteor.call('links.insert', msg, userId, (error) => {
            if (error) {
                alert(error.error);
            } else {
                target.msg.value = '';
            }
        });
    },
    'click .remove' (event) {
        event.preventDefault();
        Meteor.call('links.remove', {
            id: this._id
        }, (error) => {
            if (error) {
                alert(error.error);
            } else {
                title.value = '';
            }
        });
    }
});