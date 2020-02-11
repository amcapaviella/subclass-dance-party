$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log('makeDancer', dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position
    for (var j = 0; j < 500; j++) {
      var dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 10000
      );
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    }
  });

  $('.lineUpButton').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var dan = window.dancers[i];
      // dan.$node.animate({left: '0px'}, 'slow');
      dan.$node.addClass('is-dancer');
      var max = 2000;
      var min = 1;
      $('.is-dancer').animate({
        path: new $.path.arc({
          center: [Math.random() * (max - min) + min, Math.random() * (max - min) + min],
          radius: Math.random() * (200 - 50) + 50,
          start: Math.random() * (max - min) + min,
          end: -360 * 40,
          dir: Math.random() < 0.5 ? -1 : 1
        })
      }, 40000);
    }
  });
});

