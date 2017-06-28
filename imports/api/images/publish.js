import { Images } from './images.js';

Meteor.publish("images", function publishImages() {
  return Images.find();
});
