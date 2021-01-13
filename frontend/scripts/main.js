// $('.page-scroll').on('click', function(e){
//     var dest = $(this).attr('href');
    
//     var elementDest = (dest);
//     console.log($('body').scrollTop);

//     $('body').animate({
//         scrollTop: elementDest.offset().top
//     });

//     e.preventDefault();
// });


$(window).on("scroll", function(){
    if($(window).scrollTop() > 200){
        $(".navbar").addClass("scroll");
    } else {
        $(".navbar").removeClass("scroll");
    }
});