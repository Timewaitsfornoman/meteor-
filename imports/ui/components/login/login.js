import './login.html';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import {User} from '/imports/api/links/links.js';

Template.login.onCreated(function() {
    Meteor.subscribe('user');
});

Template.login.events({
    'submit .J_form' (event, instance) {
        event.preventDefault();

        let target = event.target;
        let userName = target.userName.value;
        let passWord = target.passWord.value;

        let user = {
            userName: userName,
            passWord: passWord
        };
        
        Meteor.call('users.find', user, (error, result) => {
            if (error) {
                console.error(error);
            } else {
                user = null;
                Session.set('userId', result[0]._id);
                console.log('#########',Session.get('userId'));
                FlowRouter.go('/index');
            }
        });
    }
});