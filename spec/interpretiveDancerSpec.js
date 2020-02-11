describe('interpretiveDancer', function() {

  var interpretiveDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    interpretiveDancer = new makeIntDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(interpretiveDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(interpretiveDancer.$node, 'toggle');
    interpretiveDancer.step();
    expect(interpretiveDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(interpretiveDancer, 'step');
      expect(interpretiveDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(interpretiveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(interpretiveDancer.step.callCount).to.be.equal(2);
    });
  });
});
