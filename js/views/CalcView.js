define([
    'jquery',
    'underscore',
    'backbone',
    'models/CalcModel',
    'text!templates/calcTemplate.html'
], function ($, _, Backbone, CalcModel, calcTemplate) {

    return Backbone.View.extend({
        el: $("#main"),

        initialize: function () {
            this.model = new CalcModel({result: 0});
        },

        render: function () {
            var self = this;

            // Render template
            self.$el.html(calcTemplate);

            var $screen = self.$el.find('.screen');

            // Refresh screen
            self.model.on('change:result', function () {
                $screen.text(self.model.get('result'));
            });

            // Add events
            self.$el.on('click', '.digit', function (event) {
                var $element = $(event.currentTarget);
                $screen.text($element.text());
            });
        }

    });

});
