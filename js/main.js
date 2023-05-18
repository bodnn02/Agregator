$(".filters__item").on("click", function(e) {
    if($(this).parent().hasClass("single")) {
        $(this).parent().children(".filters__item").removeClass("selected")
        $(this).addClass("selected")
    } else {
        $(this).toggleClass("selected")
    }
})
$(".filter-section__header").on("click", function(e) {
    $(this).parent().toggleClass("opened")
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.catalogue-header').addClass('scrolled');
    } else {
        $('.catalogue-header').removeClass('scrolled');
    }
});


var minSpan = $( ".price-range__min-span" );
var maxSpan = $( ".price-range__max-span" );

$(".price-range").slider({
  range: true,
  min: 0,
  max: 500,
  values: [75, 300],
  slide: function (event, ui) {
    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
  },
});


$( function() {
    var minPrice = 500;
    var maxPrice = 57000;
    $( ".price-range" ).each( function() {
        var minSpan = $( this ).find( ".price-range__min" );
        var maxSpan = $( this ).find( ".price-range__max" );
        $( this ).slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [ minPrice, maxPrice ],
            slide: function( event, ui ) {
                minSpan.text( ui.values[ 0 ] + "$" );
                maxSpan.text( ui.values[ 1 ] + "$" );
            }
        });
        minSpan.text( $( this ).slider( "values", 0 ) + "$" );
        maxSpan.text( $( this ).slider( "values", 1 ) + "$" );
    });
});

$(".gallery-list__item").on("click", function(e) {
    src = $(this).children("img").attr("src")
    $(".gallery__current-img").children("img").attr("src", src)
});

$(".categories-btn").on("click", function(e) {
    if($(window).width() > 1021) {
        $(this).toggleClass("active")
        $(".categories-menu").toggleClass("active")
    } else {
        $(".m-menu").addClass("opened")
    }
});
$(".list-pagginator__prev").on("click", function(e) {
    section_content = $(this).parent().parent().parent().find(".index-section__content")
    index = $(section_content).children(".current").index()
    console.log(index)
    if(index == 0) {
        $(section_content).children("ul").removeClass("current")
        $(section_content).children("ul").eq($(section_content).children("ul").length - 1).addClass("current")
    } else {
        $(section_content).children("ul").removeClass("current")
        $(section_content).children("ul").eq(index - 1).addClass("current")
    }
});
$(".list-pagginator__next").on("click", function(e) {
    section_content = $(this).parent().parent().parent().find(".index-section__content")
    index = $(section_content).children(".current").index()
    console.log(index)
    if(index + 1 == $(section_content).children("ul").length) {
        $(section_content).children("ul").removeClass("current")
        $(section_content).children("ul").eq(0).addClass("current")
    } else {
        $(section_content).children("ul").removeClass("current")
        $(section_content).children("ul").eq(index + 1).addClass("current")
    }
});
$(".catalogue-sb-open").on("click", function(e) {
    $(".catalogue-sidebar").addClass("opened")
});
$(".catalogue-sb-close").on("click", function(e) {
    $(".catalogue-sidebar").removeClass("opened")
});

$(".m-categories__item.has-sub").on("click", function(e) {
    title = $(this).children(":first-child").text()

    $(".m-menu").addClass("sub-category")
    $(this).addClass("active")
    $(".mm-header").text(title)
});
$(".mm-header").on("click", function(e) {
    title = $(this).children(":first-child").text()

    if($(".m-menu").hasClass("sub-category")) {
        $(".m-menu").removeClass("sub-category")
        $(".m-menu").find(".active").removeClass("active")
        $(".mm-header").text("Categories")
    } else {
        $(".m-menu").removeClass("opened")
    }
});