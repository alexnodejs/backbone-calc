define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    return Backbone.Model.extend({

        defaults: {
            display: 0,
            curValue: 0,
            isNewNum: false,
            pendingOperation: null
        },

        _plus: function (arg) {
            this.set('curValue', this.get('curValue') + parseFloat(arg));
        },

        _minus: function (arg) {
            this.set('curValue', this.get('curValue') - parseFloat(arg));
        },

        _multiply: function (arg) {
            this.set('curValue', this.get('curValue') * parseFloat(arg));
        },

        _divide: function (arg) {
            this.set('curValue', this.get('curValue') / parseFloat(arg));
        },

        _equal: function (arg) {
            this.set('curValue', parseFloat(arg));
        },

        inputDigit: function (digit) {
            if (this.get('isNewNum')) {
                this.set('display', digit);
                this.set('isNewNum', false);
            } else {
                if (!this.get('display')) {
                    this.set('display', digit);
                } else {
                    this.set('display', parseFloat(this.get('display') + digit));
                }
            }
        },

        addDot: function () {
            var out = this.get('display').toString();
            if (this.get('isNewNum')) {
                out = '0.';
                this.set('isNewNum', false);
            } else {
                out.indexOf('.') === -1 ? out += '.' : null;
            }
            this.set('display', out);
        },

        countUp: function (operation) {
            var out = this.get('display');

            if (this.get('isNewNum') && this.get('pendingOperation') !== '=') {
                this.set('display', this.get('curValue'));
            } else {
                this.set('isNewNum', true);
                if (this.get('pendingOperation') === '+') {
                    this._plus(out);
                } else if (this.get('pendingOperation') === '-') {
                    this._minus(out);
                } else if (this.get('pendingOperation') === '*') {
                    this._multiply(out);
                } else if (this.get('pendingOperation') === '/') {
                    this._divide(out);
                } else {
                    this._equal(out);
                }

                this.set('display', this.get('curValue'));
            }
            this.set('pendingOperation', operation);
        }

    });

});
