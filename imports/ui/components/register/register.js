import './register.html';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import {User} from '/imports/api/links/links.js';

Template.register.onCreated(function() {
    Meteor.subscribe('user');
});

Template.register.onRendered(function() {
    if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
        this.$('.container').addClass('mobile-container');
    }
});

Template.register.events({
    'submit .J_form' (event, instance) {
        event.preventDefault();

        let target = event.target;
        let userName = target.username.value;
        let password = target.password.value;
        let passworded = target.passworded.value;

        if(password != passworded){
            console.error('两次密码输入不一致!');
            return false;
        }

        let user = {
            userName: userName,
            passWord: password
        };
        
        Meteor.call('users.insert', user, (error, result) => {
            if (error) {
                console.error(error);
            } else {
                user = null;
                if(result.length > 0){
                    FlowRouter.go('/');
                }else{
                    console.error('密码或用户名输入有误!');
                } 
            }
        });
    }
});