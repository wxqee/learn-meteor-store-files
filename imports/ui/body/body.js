import { Template } from 'meteor/templating';
import { Images } from '../../api/images/images.js';

import './body.html';

Template.App.onCreated(function onAppCreated() {
  window.Images = Images;
  Meteor.subscribe('images');
});

Template.App.helpers({
  images() {
    return Images.find();
  }
});

Template.App.events({
  'change .my-image-input'(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){
          // handle error
          console.error(err);
        } else {
          console.dir(fileObj);
          console.log('New image:', fileObj._id);
          console.log('      url:', fileObj.url());
          console.log('      url:', "/cfs/files/images/" + fileObj._id);
        }
      });
    });
  },
  'click .clear-images'(event, template) {
    Images.find().fetch().map(f => Images.remove(f._id));
  }
});
