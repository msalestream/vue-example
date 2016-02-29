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
            isSelected: function(product, section, field) {
                if (field) {
                    return this.formState.focus['product'] === product.title
                        && this.formState.focus['section'] === section.title
                        && this.formState.focus['field'] === field.title;
                }
                else if (section) {
                    return this.formState.focus['product'] === product.title
                        && this.formState.focus['section'] === section.title;
                }
                else if (product) {
                    return this.formState.focus['product'] === product.title;
                }
            }
        }
    });
});
