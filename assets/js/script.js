//   click displey block

$(document).ready(function () {

    $('.click-to-show').on('click', function (e) {
        clickToDisplayBlock(this, 'header-language', 'active-globe')
        e.stopPropagation();
    })
    $('.click-to-show-shop').on('click', function (e) {
        clickToDisplayBlock(this, 'shop-prt-js')
        e.stopPropagation();
    })
    $('.show-search-click').on('click', function (e) {
        clickToDisplayBlock(this, 'search-all-btn')
        e.stopPropagation();
    })
    $(window).on('click', function (e) {
        closeBlocks('hidden-language');
        closeBlocks('shop-modal-block');
        closeBlocks('search-all-result');
        deleteActiveClass('header-globe-btn', 'active-globe')
        e.stopPropagation()
    })
    $('.hidden-language').on('click', function (e) {
        e.stopPropagation()
    })
    $('.shop-modal-block').on('click', function (e) {
        e.stopPropagation()
    })
    $('.search-all-block').on('click', function (e) {
        e.stopPropagation()
    })

    function clickToDisplayBlock($this, parent_block, active_class) {
        let this_attr = $($this).attr('data-show');
        console.log(this_attr)
        $($this).toggleClass(active_class);
        $($this).parents('.' + parent_block).find('.' + this_attr).fadeToggle()
    }

    function closeBlocks(block) {
        $('.' + block).fadeOut()
    }

    function deleteActiveClass(block, active_class) {
        if ($('.' + block).hasClass(active_class)) {
            $('.' + block).removeClass(active_class)
        }
    }
})




//  hover-catalog

$(document).ready(function () {
    $('.catalog-hover-js').hover(function (e) {
        hoverCatalog(this, 'hover-js','catalog-menu')
        e.stopPropagation()
    },function (e) {
        removeClass(this, 'hover-js','catalog-menu');
        e.stopPropagation()
    })

    $('.catalog-hover-sub-js').hover(function (e) {
        hoverCatalog(this, 'hover-sub-js','catalog-sub-menu')
        e.stopPropagation()
    },function (e) {
        removeClass(this, 'hover-sub-js','catalog-sub-menu');
        e.stopPropagation()
    })

    function hoverCatalog($this, parent_block, hover_block) {
        let prt = $($this).parents('.'+parent_block);
        let hover_block_li = $(prt).find('.'+hover_block+'>ul>li');
        let i=0.1;
        $(hover_block_li).each(function () {
            $(this).css({transitionDelay:i+'s'})
            i+=0.1;
        })
    }
    function removeClass($this, parent_block, hover_block) {
        let prt = $($this).parents('.'+parent_block);
        let hover_block_li = $(prt).find('.'+hover_block+'>ul>li');
        $(hover_block_li).each(function () {
            $(this).css({transitionDelay:0+'s'})
        })
    }
})

$(document).ready(function () {
    $(".best-deals-slider-js").slick({
        arrows: true,
        slidesToShow: 5,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

})