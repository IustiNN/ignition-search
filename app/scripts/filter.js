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

      if($(this).hasClass('is-checked')) {

      }
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
      $(this).appendChild('span').text('x');
    });
  });
});