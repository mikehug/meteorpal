Goals = new Mongo.Collection('Goals');

Meteor.methods({
    goalInsert :  function(commentAttributes) {
        check(this.userId, String);
        check(commentAttributes, {
            goalId: String,
            name: String,
            description: String,
            dueDate: Date,
            purpose: String
        });
   
        var user = Meteor.user();
        var post = _.extend(goalAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date(),
            
        });
        
        var goalId = Goals.insert(goal);
        return {
            _id: postId
        };
        
    }
});

