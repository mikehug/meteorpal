/**
 * Created by mikehughes on 27/10/2014.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});
