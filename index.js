$(".view-more-btn").click(function(event){
    $(".view-more-btn").addClass("hidden");
    $(".second-row").removeClass("hidden");
    $(".view-less-btn").removeClass("hidden");
});
$(".view-less-btn").click(function(event){
    $(".view-more-btn").removeClass("hidden");
    $(".second-row").addClass("hidden");
    $(".view-less-btn").addClass("hidden");
});

