Template.goalsList.helpers({
    goals: function() {
        return Goals.find({userId : Meteor.userId()})
    }
});
