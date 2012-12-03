requirejs.config({
  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    text: 'libs/require/text'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      //underscore and jquery dependencies
      deps: [
        'underscore',
        'jquery'
      ],
      //using 'Backbone' global
      exports: 'Backbone'
    }
  }
}); 

require([
  'jquery',
  'underscore',
  'backbone',
  'app'
  ], 
  function($,_,Backbone,app){
    console.log(Backbone, app);
    //app.init();
});