// $(document).ready(function() {
// $("h1").slabText({
//             // Don't slabtext the headers if the viewport is under 380px
//             "viewportBreakpoint":380
// });
//
// })

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
});
