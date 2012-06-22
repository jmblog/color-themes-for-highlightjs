;(function(window, $) {
  /* isotope */
  if ($.Isotope) {
    var $thumbnails = $('#thumbnails'),
        $filter = $('#filter');
    
    $thumbnails.isotope({
      itemSelector : '.item',
      layoutMode : 'fitRows'
    });
    
    $filter.find('a').click(function(){
      $filter.find('dd').removeClass('active');
      $(this).parent('dd').addClass('active');
      var selector = $(this).attr('data-filter');
      $thumbnails.isotope({ filter: selector });
      return false;
    });
  }
  
  /* highlight.js */
  if (window.hljs) {
    window.hljs.initHighlightingOnLoad();
  }
  
  /* smooth scroll */
  $('a').smoothScroll();
  
}(this, jQuery));