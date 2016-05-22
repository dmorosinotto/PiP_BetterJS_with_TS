var SystemConfig = (function() {
    // List your node_modules packages here
    var config = {
        baseUrl: "./",
        paths: {
            "npm:*": "node_modules/*"
        },
        map: {
            "jquery": "npm:jquery/dist/jquery.min.js"
        }
    };

    // Read more info on SystemJS config here: https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
    System.config(config);
    
    // Load 'src/index' compiled by TS into dist/bundle.js
    System.import( "src/index" ).catch( console.error.bind( console ) );
})();