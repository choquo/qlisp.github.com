//kadaj Jan 2012

$('document').ready(function() {
    var data, pages=["#one", "#two", "#three", "#four"];
    
    $('#p1').click(function (e) {
        data = {
            page: 'Page 1',
            title: "Tutorial",
            category: "Html5",
            desc: "intro"
        };
        history.pushState(data, 'page 1', '#one'); //@params: state, title, url
        $(this).trigger('hashchange');
        e.preventDefault();
    });
    $('#p2').click(function (e) {
        data = {
            page: 'Page 2',
            title: "Tutorial",
            category: "Html5, js",
            desc: "intro, jQ"
        };
        history.pushState(data, 'page 2', '#two');
        $(this).trigger('hashchange');
        e.preventDefault();
    });
    $('#p3').click(function (e) {
        data = {
            page: 'Page 3',
            title: "Tutorial",
            category: "Html5",
            desc: "history"
        };
        history.pushState(data, 'page 3', '#three');
        $(this).trigger('hashchange');
        e.preventDefault();
    });
   $('#p4').click(function (e) {
        data = {
            page: 'Page 4',
            title: "Tutorial",
            category: "Html5",
            desc: "history details"
        };
        history.pushState(data, 'page 4', '#four');
        $(this).trigger('hashchange');
        e.preventDefault();
    });
   
   /**
    * when you navigate back and forth, popstate will fire.
    * It is complementary to pushState().
    * We can access the data we pushed through event.originalEvent.state object.
    */
   $(window).bind('popstate', function(e) {
        console.log("popstate");
        if (e.originalEvent.state) {
            console.log("Page number from history: " + e.originalEvent.state.page);   
        }
   });
   
   /**
    * When the location.hash changes this hashchange event will be fired.
    * location.hash changes when we move in history (using back & forward buttons)
    * We trigger this event for page navigation through anchor tags as well, so that
    * we can handle page navigation with just one listener
    */
    $(window).bind('hashchange', function() {
        console.log("hashchaged");
        var i=0, hash="";
        //here you can do other things depending on the hash
        hash = window.location.hash;
        console.log("current hash: " + hash);
        // show or hide based on the hash
        for (i in pages) {
            if (hash != pages[i]) {
                console.log(pages[i] + " is hidden");
                $(pages[i]).hide();
            }
        }
        $(hash).show();
    });
    $('#p1').trigger('click');
});
