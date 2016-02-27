/**
 * Example: Complex sidebar with nested linking
 */
define(["vue", "model/form-config"], function() {
    var Vue = require('vue'),
        Form = require('model/form-config');

    var mockLinks = [
        {
            title: "Internet",
            sections: [
                {
                    title: "SQ Requirements",
                    fields: [
                        { title: "Access Technology" }
                    ]
                }
            ]
        },
        {
            title: "MPLS",
            sections: [
                {
                    title: "SQ Requirements",
                    fields: [
                        { title: "Access Technology" }
                    ]
                }
            ]
        },
        {
            title: "VPLS",
            sections: [
                {
                    title: "SQ Requirements",
                    fields: [
                        { title: "Access Technology" }
                    ]
                }
            ]
        }
    ];

    Vue.component('app-sidebar', {
        template: '#sidebar',
        data: function () {
            return {
                sidebar: mockLinks,
                formState: Form.state
            };
        },
        methods: {
            changeProduct: function(product) {
                Form.state.focus = product;
            },
            isSelected: function(product) {
                return this.formState.focus === product;
            }
        }
    });
});
