$(document).ready(function(){

	$(window).scroll(function() {
	    var height = $(window).scrollTop();

	    if(height  > 100) {
	        $('nav.navbar').addClass('solid'); 	
	        // $('nav.navbar .mobile').removeClass('ml-auto'); 	
	    } else {
	    	$('nav.navbar').removeClass('solid');
	        // $('nav.navbar .mobile').addClass('ml-auto'); 	
	    }
	});

	function scrollToAnchor(aid){
	    var aTag = $('#'+ aid);
	    console.log(aTag);
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	$('.goto-seo').on('click', function(event) {
		scrollToAnchor('seo');
	});

	$('.goto-ppc').on('click', function(event) {
		scrollToAnchor('ppc');
	});

	$('.goto-cro').on('click', function(event) {
		scrollToAnchor('cro');
	});

	$('header.carousel').slick({
		infinite: true,
		autoplay: true,
		dots: true,
		speed: 800,
		autoplaySpeed: 9000,
	    fade: true,
	    cssEase: 'linear'
	});
	$('#slick-slide-control00').text('SEO');
	$('#slick-slide-control01').text('PPC');
	$('#slick-slide-control02').text('CRO');

	$('.btn-next-service').on('click', function(event) {
		event.preventDefault();
		$('header.carousel .slick-next').click();
	});

	$('.case-studies-carousel').slick({
		infinite: true,
		dots: true
	});

	$('.trusted-by-carousel').slick({
		slidesToShow: 6,
		slidesToScroll: 3,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		]
	})

	$('.trusted-by-carousel img').css('filter', 'grayscale(100%)');
});



function createDonutCharts() {
    $('<style type=\'text/css\' id=\'dynamic\' />').appendTo('head');
    $('div[chart-type*=donut]').each(function () {
        var d = $(this);
        var id = $(this).attr('id');
        var max = $(this).data('chart-max');
        if ($(this).data('chart-text')) {
            var text = $(this).data('chart-text');
        } else {
            var text = '';
        }
        if ($(this).data('chart-caption')) {
            var caption = $(this).data('chart-caption');
        } else {
            var caption = '';
        }
        if ($(this).data('chart-initial-rotate')) {
            var rotate = $(this).data('chart-initial-rotate');
        } else {
            var rotate = 0;
        }
        var segments = $(this).data('chart-segments');

        for (var i = 0; i < Object.keys(segments).length; i++) {
            var s = segments[i];
            console.log(segments);
            var start = ((s[0] / max) * 360) + rotate;
            var deg = ((s[1] / max) * 360);
            if (s[1] >= (max / 2)) {
                d.append('<div class="large donut-bite" data-segment-index="' + i + '"> ');
            } else {
                d.append('<div class="donut-bite" data-segment-index="' + i + '"> ');
            }
            var style = $('#dynamic').text() + '#' + id + ' .donut-bite[data-segment-index="' + i + '"]{-moz-transform:rotate(' + start + 'deg);-ms-transform:rotate(' + start + 'deg);-webkit-transform:rotate(' + start + 'deg);-o-transform:rotate(' + start + 'deg);transform:rotate(' + start + 'deg);}#' + id + ' .donut-bite[data-segment-index="' + i + '"]:BEFORE{-moz-transform:rotate(' + deg + 'deg);-ms-transform:rotate(' + deg + 'deg);-webkit-transform:rotate(' + deg + 'deg);-o-transform:rotate(' + deg + 'deg);transform:rotate(' + deg + 'deg); background-color: ' + s[2] + ';}#' + id + ' .donut-bite[data-segment-index="' + i + '"]:BEFORE{ background-color: ' + s[2] + ';}#' + id + ' .donut-bite[data-segment-index="' + i + '"].large:AFTER{ background-color: ' + s[2] + ';}';
            $('#dynamic').text(style);
        }

        d.children().first().before('<div class=\'donut-hole\'><span class=\'donut-filling\'>' + text + '</span></div>');
        d.append('<div class=\'donut-caption-wrapper\'><span class=\'donut-caption\'>' + caption + '</span></div>');
    });
}

$(document).ready(function() {
    createDonutCharts();
});


$(document).ready(function() {
  // init Isotope
  var $grid = $('.services-to-filter').isotope({
    // options
    itemSelector: '.service-item',
    layoutMode: 'fitRows'
  });
  // filter items on button click
  $('.filter-services').on( 'click', 'a', function() {
    $('.offset-top').removeClass('offset-top');
    var filterValue = $(this).attr('data-filter');
    console.log(filterValue);
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.filter-services').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});