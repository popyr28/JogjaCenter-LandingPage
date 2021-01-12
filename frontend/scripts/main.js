// $('.page-scroll').on('click', function(e){
//     var dest = $(this).attr('href');
    
//     var elementDest = (dest);
//     console.log($('body').scrollTop);

//     $('body').animate({
//         scrollTop: elementDest.offset().top
//     });

//     e.preventDefault();
// });


jQuery( document ).ready( function($) {
    var elementAbout = $('#navbar');
    console.log(elementAbout.offset());
    $( window ).scroll( function () {
        console.log($('body').scroll());
    //   if ( $('body').scrollTop() > 0 ) {
    //     $('body').animate({
    //         scrollTop: elementAbout.offset().top
    //     });
    // }
    });
  });