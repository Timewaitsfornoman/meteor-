// All links-related publications

import {Meteor} from 'meteor/meteor';
import {Links,User} from '../links.js';

Meteor.publish('links.all', function() {
    return Links.find();
});

Meteor.publish('user', function() {

    if (this.userId) {
        return Meteor.User.find({
            _id: this.userId
        });
    } else {
        this.ready();
    }
});