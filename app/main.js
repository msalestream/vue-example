var includes = [
    "vue",
    "vueRouter",
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

    Router.beforeEach(function() {
        console.log("beforeEach called", arguments)
    });

    Router.afterEach(function(route) {
        console.log("afterEach called", arguments);
        if (route.to.path.substr(0, 9) == "/product/") {
            var product = route.to.path.substring(9);
            console.log("product is '" + product + "'");
            Form.state.selectedElement = product;
        }
        else {
            Form.state.selectedElement = null;
        }
    });

    Router.start(App, '#app');
});
