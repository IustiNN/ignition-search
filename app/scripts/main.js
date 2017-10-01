$(document).ready(function(){
	$('header.carousel').slick({
		infinite: true,
		dots: true,
		speed: 500,
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
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 3,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 3,
		        infinite: true
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