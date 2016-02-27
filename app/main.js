var includes = [
    "vue",
    "vueRouter",
    "jquery",
    "utilities/strings",
    "component/sidebar",
    "component/shortcut",
    "component/state-dump",
    "model/form-config"
];
define(includes, function() {
    var Vue = require('vue'),
        VueRouter = require('vueRouter'),
        Form = require('model/form-config'); // http://vuejs.github.io/vue-router/en/index.html

    Vue.config.debug = true;

    //Install Router to Vue
    Vue.use(VueRouter);

    var App = Vue.extend({}),
        Router = new VueRouter();

    Router.afterEach(function(route) {
        var request = {},
            path = route.to.path.trimChar("/"),
            joined = path.split("/");

        for(var i = 0; i < joined.length; i++) {
            if(joined[i] === "product" || joined[i] === "section" || joined[i] === "field") {
                request[joined[i]] = joined[i+1];
            }
        }

        Form.state.focus = request;
    });

    Router.start(App, '#app');
});
