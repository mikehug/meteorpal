Template.goalSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var dueDate = new Date($(e.target).find('[name=dueDate]').val());
    var goal = {
      name: $(e.target).find('[name=name]').val(),
      description: $(e.target).find('[name=description]').val(),
      purpose: $(e.target).find('[name=purpose]').val(),
      dueDate: dueDate
    };
    console.log("Hello")
    console.log(dueDate.toDateString());
    
   Meteor.call('goalInsert', goal, function(error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);

       

            Router.go('goalPage', {_id: result._id});
        });
  }
});


Template.goalSubmit.rendered = function () {
  if (!Modernizr.inputtypes.date) {
    $('input[type=date]').datetimepicker({
					pickTime: false
				});
}

};

  