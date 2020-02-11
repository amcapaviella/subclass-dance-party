var makeIntDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $(this.$node).addClass('int-dancer');
};

makeIntDancer.prototype = Object.create(makeDancer.prototype);
makeIntDancer.prototype.constructor = makeIntDancer;

makeIntDancer.prototype.oldStep = makeIntDancer.prototype.step;

makeIntDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};