// Methods related to links

import {
    Meteor
} from 'meteor/meteor';
import {
    check
} from 'meteor/check';
import {
    Links,
    User
} from './links.js';
import {
    Session
} from 'meteor/session';
Meteor.methods({
    'users.insert' (data) {
        check(data, Object);
        data.nickname = '游客';
        data.headIcon = 'http://static2.ivwen.com/users/903616/39ccdc206e4e4200ae83994eb98bca2e.jpg';
        data.createdAt = +new Date();
        return User.insert(data);
    },
    'users.find' (data) {
        check(data, Object);
        return User.find(data).fetch();
    },
    'users.remove' (data) {
        check(data, Object);
        return User.remove(data);
    }
});

Meteor.methods({
    'links.insert' (msg, userId) {
        check(msg, String);
        check(userId, String);
        
        var data = {
            'userId': userId,
            'uerName': '游客',
            'chatInfor': msg || '',
            'headIcon': 'http://static2.ivwen.com/users/903616/39ccdc206e4e4200ae83994eb98bca2e.jpg'
        };

        if (userId) {
            var user = User.findOne({_id:userId});
         
            if (user) {
                data.userName = user.nickname;
                data.headIcon = user.headIcon;
            }
        }

        return Links.insert(data);
    },
    'links.find' (title) {
        check(title, String);
        return Links.find({
            title: title
        });
    },
    'links.remove' (data) {
        check(data, Object);
        return Links.remove(data);
    }
});