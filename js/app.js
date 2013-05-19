define([
    'jquery',
    'underscore',
    'backbone',
    'views/CalcView'
], function ($, _, Backbone, CalcView) {
    var initialize = function () {
        var calcView = new CalcView();
        calcView.render();
    };

    return {
        initialize: initialize
    };
});
