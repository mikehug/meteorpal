Template.goalSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var goal = {
      name: $(e.target).find('[name=name]').val(),
      description: $(e.target).find('[name=description]').val(),
      purpose: $(e.target).find('[name=purpose]').val(),
      dueDate: $(e.target).find('[name-dueDate]').val()      
    };

   Meteor.call('goalInsert', goal, function(error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);

       

            Router.go('goalPage', {_id: result._id});
        });
  }
});