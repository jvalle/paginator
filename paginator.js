// Paginator jQuery plugin
// Written By: Jason Valle
// MIT License (Is that sufficient?)

(function($) {
    $.fn.paginator = function(options) {

        var settings = $.extend({
            showAll: true
        }, options);

        return this.each(function(index) {

            // console.log(index);

            var showCounter = 0,
            itemsToPaginate = $(this).children(),
            numToShow = parseInt($(this).attr('data-pagination'));

            console.log(itemsToPaginate.length);

            if (itemsToPaginate.length > numToShow) {
                itemsToPaginate.hide();

                showMore(numToShow);
            }

            function showMore(num) {
                var $showMore = $('<a class="showMore" style="cursor: pointer">Show More</a>'),
                    $showAll = $('<a class="showAll" style="cursor: pointer">Show All</a>'),
                    $p = $('<p></p>').append($showMore).append($showAll)


                for (var i = showCounter; i < showCounter + num; i++) {
                    itemsToPaginate.eq(i).show();
                }   
                showCounter += num;

                // console.log(showCounter);

                itemsToPaginate.eq(showCounter - 1).append($p);

                $showMore.on('click', function() {
                    $(this).parent().remove();
                    showMore(num);
                });

                $showAll.on('click', function() {
                    $(this).parent().remove();
                    showMore(itemsToPaginate.length);
                });
            };
        });
    };
})(jQuery);