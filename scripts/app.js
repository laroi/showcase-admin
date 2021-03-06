requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        libs: '../libs',
        text: '../libs/text'
        
    }
});

// Start the main app logic.
requirejs(['./views/launch/launch', './views/mainHeader/mainHeader'],
function (launch, header) {
var launchPage;
$(document).ready(function() {

    crossroads.addRoute('/', function(){
        header.render();
    });
    //itemCollection.getAllItems();
    
    crossroads.parse('/');
    $(window).on('hashchange', function (e) {
        crossroads.parse(location.hash);
    });
//});
    
  });
});


