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
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() - 350,
      $('body').width() * Math.random() - 50,
      Math.random() * 1000000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var dan = window.dancers[i];
      dan.$node.removeClass('blinky-dancer').addClass('blinked-dancer').animate({ left: '0px'}, 'slow');
    }
  });
  $(document).on('click', '.square-dancer', function() {
    // for (var x = 0; x < window.dancers.length; x++) {
    //   var danz = window.dancers[x];
    //   console.log('stuff', danz.$node.css('top'));
    // }
    console.log('Bradley sucks Azz', $(this).css('top'));
  });
  $(document).on('mouseover', '.blinky-dancer', function () {
    $('.blinky-dancer').each(function (index, el) {
      $(el).data('homex', parseInt($(el).position().left));
      $(el).data('homey', parseInt($(el).position().top));
    });

    $('.blinky-dancer').css('position', 'absolute');
    setInterval(function () {
      $('.blinky-dancer').each(function (index, el) {
        el = $(el);
        position = el.position();
        x0 = el.offset().left;
        y0 = el.offset().top;
        x1 = mouse.x;
        y1 = mouse.y;
        distancex = x1 - x0;
        distancey = y1 - y0;

        distance = Math.sqrt((distancex * distancex) + (distancey * distancey));


        // magnet = 2600 - distance*20;
        // if(distance>130) {
        //    magnet=0;
        // }


        powerx = x0 - (distancex / distance) * magnet / distance;
        powery = y0 - (distancey / distance) * magnet / distance;

        forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
        forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;


        el.css('left', powerx + forcex);
        el.css('top', powery + forcey);
        // el.text(parseInt(distance));
      });
    }, 15);

    var mouse = { 'x': 0, 'y': 0 };

    homex = 0;
    homey = 0;
    forcex = 0;
    forcey = 0;
    magnet = 500;


    $(document).on('mousemove', function (e) {
      mouse = { 'x': e.pageX, 'y': e.pageY };
    });
  });


});

