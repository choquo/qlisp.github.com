$('document').ready(function() {
   $('#p1').click(function (e) {
        // here we need to care about the 3rd param only which is the hashtag
        history.pushState(null, 'page 1', '#page1');
        $(this).trigger('hashchange');
        e.preventDefault();
   });
   $('#p2').click(function (e) {
        history.pushState(null, 'page 2', '#page2');
        $(this).trigger('hashchange');
        e.preventDefault();
   });
   $('#p3').click(function (e) {
        history.pushState(null, 'page 3', '#page3');
        $(this).trigger('hashchange');
        e.preventDefault();
   });
   
   $(window).bind('hashchange', function() {
        console.log("hashchaged");
        //here you can do other things depending on the hash
        switch (window.location.hash) {
        case "#page1":
            // if you have lot of pages, you can use array and loop through
            // them to hide/show elements. To keep the tutorial simple, we'll
            // do as follows.
            $('#one').show();
            $('#two').hide();
            $('#three').hide();
            break;
        case "#page2":
            $('#two').show();
            $('#one').hide();
            $('#three').hide();
            break;
        case "#page3":
            $('#three').show();
            $('#one').hide();
            $('#two').hide();
            break;
        }
   });
   $('#src').attr('href', "view-source:" + document.URL);
   $('#p1').trigger('click');
});