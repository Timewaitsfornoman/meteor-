// Definition of the links collection
import { Mongo } from 'meteor/mongo';

const Links = new Mongo.Collection('links');
const User = new Mongo.Collection('user');

export {Links, User};