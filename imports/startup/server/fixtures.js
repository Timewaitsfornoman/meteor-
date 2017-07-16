// Fill the DB with example data on startup

import {Meteor} from 'meteor/meteor';
import {Links,User} from '../../api/links/links.js';

Meteor.startup(() => {

    // if the User collection is empty
    if (User.find().count() === 0) {
        const data = [{
            userName: 'llangzicao@163.com',
            passWord: '123456',
            nickname: '小魔仙',
            headIcon: 'http://static2.ivwen.com/users/13067605/b271cd62df14465aa1e382ddf581c519.jpg',
            createdAt: +new Date()
        }, {
            userName: 'test@163.com',
            passWord: '123456',
            nickname: '诺滴滴',
            headIcon:'http://static2.ivwen.com/users/903616/39ccdc206e4e4200ae83994eb98bca2e.jpg',
            createdAt: +new Date()
        }];

        data.forEach(user => User.insert(user));
    }

    // if the Links collection is empty
    if (Links.find().count() === 0) {
        const data = [{
            userid: 'RE2dZNZ26PK8jnYDS',
            userName: '小魔仙',
            chatInfor:'月亮好大',
            headIcon: 'http://static2.ivwen.com/users/903616/39ccdc206e4e4200ae83994eb98bca2e.jpg'
        }, {
            userid: 'gu6Qtwsjueh9PnG6F',
            userName: '诺滴滴',
            chatInfor: '月亮好大',
            headIcon: 'http://static2.ivwen.com/users/13067605/b271cd62df14465aa1e382ddf581c519.jpg'
        } ];

        data.forEach(link => Links.insert(link));
    }
});