

$(document).ready(function() {
	$("#info").hide();
	$(".button1").click(function() {
		$("#info").show(1000);
	});

});

/*bar chart*/

$(document).ready(function(){
    barChart();
    
    $(window).resize(function(){
        barChart();
    });
    
    function barChart(){
        $('.bar-chart').find('.item-progress').each(function(){
            var itemProgress = $(this),
            itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            itemProgress.css('width', itemProgressWidth);
        });
    };
});

$(function() {
  var pull    = $('#pull');
    menu    = $('nav ul');
    menuHeight  = menu.height();
 
  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
});

$(window).resize(function(){
  var w = $(window).width();
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
}); 