var includes = [
    "vue",
    "vueRouter",
    "component/sidebar",
    "component/shortcut",
    "component/state-dump"
];
define(includes, function() {
    var Vue = require('vue'),
        VueRouter = require('vueRouter');
    //Install Router to Vue
    Vue.use(VueRouter);

    var App = Vue.extend({}),
        Router = new VueRouter();

    Router.start(App, '#app');
});
