jQuery(function ($) {
    $('#query').autocomplete({
        serviceUrl: 'service/autocomplete.ashx',
        minChars: 1,
        delimiter: /(,|;)\s*/,
        maxHeight: 400,
        width: 380,
        zIndex: 9999,
        deferRequestBy: 0, //
        params: { country: 'Yes'},
        onSelect: function(data, value){ },
        lookup: ['January', 'February', 'March']
    });

    $("#load").click(function() {
        $(".load-more").slice(0,3).fadeIn();
        return
    });
});
