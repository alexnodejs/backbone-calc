define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/calcTemplate.html'
], function ($, _, Backbone, calcTemplate) {

    return Backbone.View.extend({
        el: $("#main"),

        render: function () {
            this.$el.html(calcTemplate);
        }

    });

});
