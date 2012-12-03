define([ 
    'models/model',
    'text!templates/main.html'], 
function(model){
  var View = Backbone.View.extend({
    el: 'body',
    initialize: function(){
      this.model = new model({
        message: 'Hello World'
      });
      //this.template = _.template( template, { model: this.model.toJSON() } );
    },
    render: function(){
      //$(this.el).append( this.template );
    }
  });
  
  return new View();
});
