$(document).ready(function(){
  checkMenu();
	$('.menu-link').on('click', function(event) {
		event.preventDefault();
		var menu = $('.navbar .sidenav')
		if(menu.hasClass('open')) {
			menu.removeClass('open');
		} else {
			menu.addClass('open');
		}
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
  $('header #slick-slide-control00').text('SEO');
  $('header #slick-slide-control01').text('PPC');
  $('header #slick-slide-control02').text('CRO');

  

  createDonutCharts();

	$(window).scroll(function() {
    checkMenu();
	});

	$('.goto-seo').on('click', function(event) {
		scrollToAnchor('seo');
	});

	$('.goto-ppc').on('click', function(event) {
		scrollToAnchor('ppc');
	});

  $('.goto-cro').on('click', function(event) {
    scrollToAnchor('cro');
  });

	$('a').on('click', function(event) {
    if ($(this).text() === 'Get in touch') {
      event.preventDefault();
  		scrollTo('contact');
    }
	});

	

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





	// /* 

// ThreeJs custom waves
// Original script by ThreeJS : https://threejs.org/examples/canvas_particles_waves.html


//*/
var SEPARATION = 40, AMOUNTX = 130, AMOUNTY = 35;

var container;
var camera, scene, renderer;


if (window.WebGLRenderingContext){
	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	}
else {
	renderer = new THREE.CanvasRenderer();
	}


var particles, particle, count = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {

	container = document.getElementById( 'animation' );
	if(container) {
    	container.className += container.className ? ' waves' : 'waves';
	}

	camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.y = 50; //changes how far back you can see i.e the particles towards horizon
	camera.position.z = 100; //This is how close or far the particles are seen
	
	camera.rotation.x = 0.35;
	
	scene = new THREE.Scene();

	particles = new Array();

	var PI2 = Math.PI * 2;
	
	var material = new THREE.SpriteCanvasMaterial( {

		color: 0x939393, //changes color of particles
		program: function ( context ) {

			context.beginPath();
			context.arc( 0, 0, 0.1, 0, PI2, true );
			context.fill();

		}

	} );

	var i = 0;

	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

			particle = particles[ i ++ ] = new THREE.Sprite( material );
			particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
			particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10 );
			scene.add( particle );

		}

	}

	renderer = new THREE.CanvasRenderer();
	renderer.setSize( 1300, 770 );
	renderer.setClearColor( 0xf9f9f9, 1);
	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	var i = 0;

	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

			particle = particles[ i++ ];
			particle.position.y = ( Math.sin( ( ix + count ) * 0.5 ) * 20 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 20 );
			particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 2 ) * 4 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;

		}

	}

	renderer.render( scene, camera );

	// This increases or decreases speed
	count += 0.175;

}



});

function scrollToAnchor(aid){
      var aTag = $('#'+ aid);
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

function scrollTo(elem){
    var item = $('.'+ elem);
    console.log(item);
    $('html,body').animate({scrollTop: item.offset().top},'slow');
}

function checkMenu() {
  var height = $(window).scrollTop();
  if(height  > 100) {
      $('nav.navbar').addClass('solid');  
      // $('nav.navbar .mobile').removeClass('ml-auto');  
  } else {
    $('nav.navbar').removeClass('solid');
      // $('nav.navbar .mobile').addClass('ml-auto');   
  }
}



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