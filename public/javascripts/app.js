define(['routers/home'], function(router){
  console.log('asdfasdf');
  
  var init = function(){
    this.router = new router();
  };
  
  return { init: init};
});