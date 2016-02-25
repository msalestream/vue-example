requirejs.config({
    baseUrl: 'app',
    paths: {
        lib: '../lib',
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        vue: "../lib/vue",
        vueRouter: "../lib/vue-router"
    },
    shin: {
        vueRouter: {
            deps: ['vue']
        }
    }
});
