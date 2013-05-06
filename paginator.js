// Paginator jQuery plugin
// Written By: Jason Valle
// No License Here, just have fun

(function($) {
	$.fn.paginator = function() {
		var itemsToPaginate = [],
		    numToShow = parseInt($(this).attr('data-pagination')),
		    showCounter = 0;

		itemsToPaginate = $(this).children();
		itemsToPaginate.hide();

		function showMore(list, num) {
	            for (var i = showCounter; i < showCounter + num; i++) {
	                list.eq(i).show();
	            }   
	            showCounter += num;
	            list.eq(showCounter - 1).append('<p class=\"seeMore\"><a style=\"cursor: pointer;\">See More</a></p>');

	            $('.seeMore').on('click', function() {
	                this.remove();
	                showMore(itemsToPaginate, num);
	            });
	    };

	    showMore(itemsToPaginate, numToShow);
	};
})(jQuery);
