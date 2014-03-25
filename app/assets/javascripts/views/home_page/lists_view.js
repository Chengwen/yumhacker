HomePageListsView = Backbone.View.extend({
    events: {
    },

    initialize: function () {
        this.collection.assignUrl();
        this.listenTo(this.collection, 'reset', this.render);
        this.collection.fetch({ reset: true, data: this.collection.predicate() });

        xxx = this.collection

    },

    render: function () {
        this.$el.html('');
        this.collection.each(function (list) {
            this.renderList(list);
        }, this);    
    },

    renderList: function (list) {
        var list_view = new HomePageListView({
            tagName: 'li',
            model: list
        });

        this.$el.append(list_view.el);
    }
});
