Template.postsList.helpers({
    goals: function() {
        return Goals.find({}, {sort: {submitted: 1}});
    }
});
