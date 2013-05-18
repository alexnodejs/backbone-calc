define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    return Backbone.Model.extend({

        defaults: {
            curValue: 0,
            display: 0,
            operation: null
        },

        plus: function () {
            this.set({
                curValue: this.get('display'),
                display: '',
                operation: '+'
            });
        },

        minus: function () {
            this.set({
                curValue: this.get('display'),
                display: '',
                operation: '-'
            });
        },

        multiply: function () {
            this.set({
                curValue: this.get('display'),
                display: '',
                operation: '*'
            });
        },

        divide: function () {
            this.set({
                curValue: this.get('display'),
                display: '',
                operation: '/'
            });
        },

        equal: function () {
            var operation = this.get('operation');

            if (operation === '+') {
                this.set('display', parseFloat(this.get('curValue') + this.get('display')));
            } else if (operation === '-') {
                this.set('display', parseFloat(this.get('curValue') - this.get('display')));
            } else if (operation === '*') {
                this.set('display', parseFloat(this.get('curValue') * this.get('display')));
            } else if (operation === '/') {
                this.set('display', parseFloat(this.get('curValue') / this.get('display')));
            }
        }

    });

});
