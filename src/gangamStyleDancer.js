var makegangamStyleDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="gangamStyleDancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append("<img class='dancingObama' src='http://www.gifmania.co.uk/People/Professions/Politicians/Barack-Obama/Obama-Gangnam-Style-87745.gif'>");
};

makegangamStyleDancer.prototype = Object.create(makeDancer.prototype);

makegangamStyleDancer.prototype.constructor = makegangamStyleDancer;

makegangamStyleDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
/*
  this.$node.mouseover(function(){
    var nextX = Math.floor(Math.random()*500),
    var nextY = Math.floor(Math.random()*500);
    $(this).animate({left: nextX + 'px', top: nextY + 'px'}, 500);
  });*/
};