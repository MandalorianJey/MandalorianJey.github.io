$(document).ready(() => {
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = -5;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
})