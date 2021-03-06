HomePageFeaturedView = Backbone.View.extend({
    events: {
    },

    initialize: function () {
        this.render();

        this.featured_list = new List({ id: 453 });
        this.featured_user = new User({ id: 284 });

        this.featured_user_view = new HomePageFeaturedUserView({
            el: '#featured_user',
            model: this.featured_user
        });

        this.featured_list_view = new HomePageFeaturedListView({
            el: '#featured_list',
            model: this.featured_list
        });
    },

    render: function () {
        this.$el.html(render('home_page/featured'));

    }

});
