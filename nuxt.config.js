export default {
    // https://nuxtjs.org/deployments/github-pages/
    target: "static",
    router: {
        base: "/ChooseNuxtColor/"
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "ChooseNuxtColor",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [{
            rel: "icon",
            type: "image/x-icon",
            href: "https://raw.githubusercontent.com/zakrzewskib/ChooseNuxtColor/master/static/favicon.ico"
        }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};