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

  $('.map-tables .table-toggle').click(function() {
    $(this).toggleClass('closed');
    $(this).next('.wp-block-table').slideToggle();
  })

})(Drupal);
