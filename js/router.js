define([
    'jquery',
    'underscore',
    'backbone',
    'views/CalcView'
], function ($, _, Backbone, CalcView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '*actions': 'defaultAction'
        }
    });

    var initialize = function () {

        var router = new AppRouter;

        router.on('route:defaultAction', function (actions) {
            var calcView = new CalcView();
            calcView.render();
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
