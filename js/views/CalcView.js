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
            var self = this;

            // Refresh screen
            self.model.on('change:display', function (model, val) {
                self.$el.find('.screen').text(val);
            });

            // Numbers
            self.$el.on('click', '.digit', function () {
                self.model.inputDigit($(this).text())
            });

            // Decimals
            self.$el.on('click', '.dot', function () {
                self.model.addDot();
            });

            // Operations
            self.$el.on('click', '.operation', function () {
                self.model.countUp($(this).text());
            });
        }

    });

});
