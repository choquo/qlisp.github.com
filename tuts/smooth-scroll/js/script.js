// kadaj Oct 2012

$(document).ready(function () {
    $('.navSection').on('click', function (e) {
        debugger;
        var elemId = "";    //eg: #nav2
        switch (e.target.id) {
        case "nav1":
            elemId = "#s1";
            break;
        case "nav2":
            elemId = "#s2";
            break;
        case "nav3":
            elemId = "#s3";
            break;
        case "nav4":
            elemId = "#s4";
            break;
        }
        $('.content').animate({
            scrollTop: $(elemId).parent().scrollTop() + $(elemId).offset().top - $(elemId).parent().offset().top
        }, {
            duration: 1000,
            specialEasing: {
                width: 'linear',
                height: 'easeOutBounce'
            },
            complete: function (e) {
                //console.log("animation completed");
            }
        });
        e.preventDefault();
    });
});