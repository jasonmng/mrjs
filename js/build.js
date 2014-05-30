({
    baseUrl: "."
    , paths: {
      jquery: "empty:",
      marionette: 'backbone.marionette'
    }
    , shim: {
      underscore: { exports: '_' },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'backbone.localStorage': ['backbone']
    }
    , out: '../appdirectory-build/main.min.js'
    , include: ['drivers/main','modules/main/controller']
    // appDir: "../",
    // dir: "../appdirectory-build",
    // , modules: [
    //   { name: "drivers/main" },
    //   { name: "modules/main/controller" }
    // ]
})
