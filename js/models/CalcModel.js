define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    return Backbone.Model.extend({

        defaults: {
            result: 0
        },

        plus: function (arg) {
            this.set('result', this.get('result') + parseFloat(arg));
        },

        minus: function (arg) {
            this.set('result', this.get('result') - parseFloat(arg));
        },

        multiply: function (arg) {
            this.set('result', this.get('result') * parseFloat(arg));
        },

        divide: function (arg) {
            this.set('result', this.get('result') / parseFloat(arg));
        }

    });

});
