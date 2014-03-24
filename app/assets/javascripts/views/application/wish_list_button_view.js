ApplicationWishListButtonView = Backbone.View.extend({
    events: {
        'click .wish_list_btn.unengaged': 'addToWishList'
    },

    initialize: function (options) {
        this.model = new WishListButton();
        this.listenTo(this.model, 'sync', this.render);
        this.listenTo(this.model, 'change', this.render);

        this.model.set({ 
            'establishment_id': options.establishment_id,
            'wish_list_id': options.wish_list_id,
            'wish_listed': options.wish_listed,
        }, { silent: true });
        this.render();
    },

    render: function () {   
        this.$el.html(render('application/wish_list_button', this.model));
    },

    addToWishList: function (e) {
        e.preventDefault();
        this.model.wishList();
    }
});
