//text.js need to be called in html


function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(400);
  
  $('.projects').hide();
  $('.projects-button').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().toggle();
    $(this).text('Projects viewed');
  })
}

$(document).ready(main);