import './login.html';
import {
    Meteor
} from 'meteor/meteor';
import {
    Session
} from 'meteor/session';
import {
    User
} from '/imports/api/links/links.js';

Template.login.onCreated(function() {
    Meteor.subscribe('user');
});

Template.login.onRendered(function() {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        this.$('.container').addClass('mobile-container');
    }

    window.show = function(data) {
        data = JSON.parse(data);
        if (navigator.userAgent.match(/Android/gi)&&navigator.userAgent.match(/yqApp/gi)) {
            androidApi.call(data.phone);
        }
    }
});

Template.login.events({

    'submit .J_form' (event, instance) {

        event.preventDefault();

        if (navigator.userAgent.match(/Android/gi)&&navigator.userAgent.match(/yqApp/gi)) {
            androidApi.showcontacts();
        }

        alert(window.navigator.userAgent);
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
                if (result.length) {
                    Session.set('userId', result[0]._id);
                    FlowRouter.go('/index');
                } else {
                    console.error('密码或用户名输入有误!');
                }

            }
        });
    }
});