/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.betterbus = {
    attach: function (context, settings) {

    }
  };

  jQuery(document).ready(function($){
    
    $('.map-tables .table-toggle').click(function() {
      $(this).toggleClass('closed');
      $(this).next('.wp-block-table').slideToggle();
    })
  
    $('#menu-toggle').click(function(){
      $(this).toggleClass('open');
      $('#block-betterbus-main-menu').slideToggle();
    })

  });


})(Drupal);
