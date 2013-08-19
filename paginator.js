// Paginator jQuery plugin
// Written By: Jason Valle
// MIT License (Is that sufficient?)

(function($) {
    $.fn.paginator = function(options) {

        var settings = $.extend({
            showMore: true,
            showAll: true
        }, options);

        return this.each(function(index) {
            
            var showCounter = 0,
            itemsToPaginate = $(this).children(),
            numToShow = parseInt($(this).attr('data-pagination'));

            if (itemsToPaginate.length > numToShow) {
                itemsToPaginate.hide();

                showMore(numToShow);
            }

            function showMore(num) {
                    
                for (var i = showCounter; i < showCounter + num; i++) {
                    itemsToPaginate.eq(i).show();
                }   
                showCounter += num;

                if (itemsToPaginate.filter(':not(:visible)').length) {
                    showButtons();
                }
            };

            function showButtons() {
                var $p = $('<p></p>');

                if (settings.showMore) {
                    $('<a class="showMore" style="cursor: pointer">Show More</a>')
                    .on('click', function() {
                        $(this).parent().remove();
                        showMore(numToShow);
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