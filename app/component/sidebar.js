define(["vue", "model/form-config"], function() {
    var Vue = require('vue'),
        Form = require('model/form-config');

    Vue.component('app-sidebar', {
        template: '#sidebar',
        data: function () {
            return {
                sidebar: [
                    { product: "Internet" },
                    { product: "MPLS" },
                    { product: "VPLS" },
                    { product: "Private Lines" }
                ],
                formState: Form.state
            };
        },
        methods: {
            changeProduct: function(product) {
                Form.state.selectedElement = product;
            }
        }
    });
});
