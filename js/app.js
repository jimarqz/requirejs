requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: 'app',
        jquery: 'lib/jquery',
        pure: 'lib/pure',
        underscore: 'lib/underscore-min'
    }
});

// Start the main app logic.
requirejs(['jquery', 'underscore' , 'app/purchase', 'app/cart'],
function   ($,       _  ,  purchase,   cart) {
    //jQuery, purchase and the app/cart module are all
    //loaded and can be used here now.


      purchase.purchaseProduct();

      cart.getItems("1","2");

      $( "p" ).html( "Samples requirejs" );
      $("p").html("Where is our Security Princess?");
      $("p").append("Our salary range sucks!!!!");


});
