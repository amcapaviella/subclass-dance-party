var makeSquareDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $(this.$node).addClass('square-dancer');
};

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.oldStep = makeSquareDancer.prototype.step;

makeSquareDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

// makeSquareDancer.prototype.lineUp = function() {
//   for (var i = 0; i < window.dancers.length; i++) {
//     if (window.dancers[i] === makeSquareDancer) {
//       this.$node.animate({left: '0px'}, 'slow');
//     }
//   }
// };