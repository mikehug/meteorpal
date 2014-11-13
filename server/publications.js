/**
 * Created by mikehughes on 27/10/2014.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});

Meteor.publish('comments', function(postId) {
    check(postId, String);
    return Comments.find({postId: postId});
});