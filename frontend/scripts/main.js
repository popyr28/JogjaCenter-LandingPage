$('.page-scroll').on('click', function(e){
    var dest = $(this).attr('href');
    
    var elementDest = (dest);
    console.log(elementDest);

    $('body').animate({
        scrollTop: elementDest.offset().top
    });

    e.preventDefault();
});