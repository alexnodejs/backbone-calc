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
            this.model = new CalcModel();
        },

        render: function () {
            this.$el.html(calcTemplate);
            this._addEvents();
        },

        _addEvents: function () {
            var self = this,
                $screen = self.$el.find('.screen');

            // Refresh screen
            self.model.on('change:display', function (model, val) {
                $screen.text(val);
            });

            // Digits
            self.$el.on('click', '.digit', function (event) {
                self.model.set('display', parseFloat(self.model.get('display') + $(event.currentTarget).text()));
            });

            // Actions
            self.$el.on('click', '.plus', function () {
                self.model.plus();
            });

            self.$el.on('click', '.minus', function () {
                self.model.minus();
            });

            self.$el.on('click', '.multiply', function () {
                self.model.multiply();
            });

            self.$el.on('click', '.divide', function () {
                self.model.divide();
            });

            self.$el.on('click', '.equal', function () {
                self.model.equal();
            });
        }

    });

});
