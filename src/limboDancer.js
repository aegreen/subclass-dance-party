var makeLimboDancer = function(top, left, timeBetweenSteps) {
  
  this.$node = $('<span class="limboDancer"></span>');
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.setPosition(top, left);
  // this.timeBetweenSteps = timeBetweenSteps;
  // this.step();
  this.$node.append('<img class="limboDancer" src="http://static.tumblr.com/47c83ffbf1e3059d52735b2c22559b7b/yrs5b2k/VuWmkx4v8/tumblr_static_bernie.gif">');


};

makeLimboDancer.prototype = Object.create(makeDancer.prototype);
makeLimboDancer.prototype.constructor = makeLimboDancer;

makeLimboDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};