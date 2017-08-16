//this function includes all necessary js files for the application
function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);

}

/* include any js files here */
include('libs/jquery-grantt/Scripts/Utils/date.js');
include('libs/jquery-grantt/ResourceStrings/en-US.js');
include('libs/jquery-grantt/Scripts/VW.Grid.1.min.js');
include('libs/jquery-grantt/Scripts/RadiantQ-jQuery.Gantt.6.0.trial.min.js');