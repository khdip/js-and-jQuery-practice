function main() {
	$('.skillset').hide();
  	$('.skillset').fadeIn(400);

 	$('.projects').hide();
  	$('.projects-button').on('click', function() {
    	$(this).next().slideToggle(400);
    	$(this).toggleClass('active');
    	$(this).text('Projects Viewed');
  });
}
$(document).ready(main);