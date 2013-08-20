// Paginator jQuery plugin
// Written By: Jason Valle
// MIT License (Is that sufficient?)

(function($) {
    $.fn.paginator = function(options) {
        return this.each(function(index) {
            var showCounter = 0,
                itemsToPaginate = $(this).children(),
                settings = $.extend({
                    showMore: true,
                    showAll: true,
                    numToShow: 5
                }, options);

            // use the number from the data-pagination attribute, if it exists
            settings.numToShow = parseInt($(this).attr('data-pagination'), 10) || settings.numToShow;

            if (itemsToPaginate.length > settings.numToShow) {
                itemsToPaginate.hide();

                showMore(settings.numToShow);
            }

            function showMore(num) {
                    
                for (var i = showCounter; i < showCounter + num; i++) {
                    itemsToPaginate.eq(i).show();
                }   
                showCounter += num;

                if (itemsToPaginate.length > showCounter) {
                    showButtons();
                }
            };

            function showButtons() {
                var $p = $('<p></p>');

                if (settings.showMore) {
                    $('<a class="showMore" style="cursor: pointer">Show More</a>')
                    .on('click', function() {
                        $(this).parent().remove();
                        showMore(settings.numToShow);
                    })
                    .appendTo($p)
                }

                if (settings.showAll) {
                    $('<a class="showAll" style="cursor: pointer">Show All</a>')
                    .on('click', function() {
                        $(this).parent().remove();
                        showMore(itemsToPaginate.length);
                    }).appendTo($p)
                }

                itemsToPaginate.parent().append($p);
            }
        });
    };
})(jQuery);