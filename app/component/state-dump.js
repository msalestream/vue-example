define(["vue", "model/form-config"], function() {
    var Vue = require('vue'),
        Form = require('model/form-config');

    Vue.component('app-state-dump', {
        template: '#dump',
        data: function () {
            return {
                formState: Form.state
            };
        }
    });
});
