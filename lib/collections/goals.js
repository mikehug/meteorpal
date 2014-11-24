Goals = new Mongo.Collection('goals');

Meteor.methods({
    goalInsert :  function(goalAttributes) {
        check(this.userId, String);
        check(goalAttributes, {
            name: String,
            description: String,
            purpose: String,
            dueDate: Date
        });
   
        var user = Meteor.user();
        var goal = _.extend(goalAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date(),
            
        });
        
        var goalId = Goals.insert(goal);
        return {
            _id: goalId
        };
        
    }
});

