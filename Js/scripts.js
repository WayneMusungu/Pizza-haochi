// EFFECTS ON THE HOME SECTION
$(document).ready(function(){
    $(".col-md-4").click(function(){
        // create a variable speed for our slideToggle
        var speed = 2000
        $(this).children(".hide").slideToggle(speed)
    });
});