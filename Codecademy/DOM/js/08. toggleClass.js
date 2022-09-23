//toggleClass.js need to be called in html


function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(400);
  
  $('.projects').hide();
  $('.projects-button').on('click', function() {
    $('.projects-button').toggleClass('active');
    $('.projects').toggle();
  })
}

$(document).ready(main);