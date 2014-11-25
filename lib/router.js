Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return Meteor.subscribe('goals')
    }
});

Router.route('/', {name: 'home'});

Router.route('/goalslist', {name: 'goalsList'});

Router.route('/goals/:_id', {
    name: 'goalPage',
    data: function() { return Goals.findOne(this.params._id); }
});

Router.route('/goals/:_id/edit', {
    name: 'goalEdit',
    data: function() { return Goals.findOne(this.params._id); }
});

Router.route('/submitGoal', {name: 'goalSubmit'});

Router.route('/postslist', {name: 'postsList'});

Router.route('/posts/:_id', {
    name: 'postPage',
    waitOn: function() {
        return Meteor.subscribe('comments', this.params._id);
    },
    data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/posts/:_id/edit', {
    name: 'postEdit',
    data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
