(function($) {
    $(document).ready(function() {
        var snow = { collection : '#nav', flakeCount : 100, shadow: true }
        $(document).snowfall(snow);
        $('.logo').append('<img src="/skin/frontend/base/default/christmas/santacornerhat_128.png" style="position: absolute; top: 47px; left: 0px; width: 60px;" />')
        $( window ).resize(function() {
            jQuery('canvas').remove();
            $(document).snowfall('clear');
            $(document).snowfall(snow);
        });
    });
})(jQuery);
