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
      if ($('#block-betterbus-main-menu').length > 0) {
        $('#block-betterbus-main-menu').slideToggle();
      } else if ($('#block-spanishnavigation').length > 0) {
        $('#block-spanishnavigation').slideToggle();
      }

    })

    $('#search-map-table').keyup(function() {
      // var input;
      // var td;
      // var i;
      // var txtValue;
      var tableQuery = this.value.toLowerCase().replace(/\s+/g, '');

      var table = $('.map-tables .table-group table');
      var tr = table.find('tr:contains('+tableQuery+')');
      window.console.log(tr);
      
      // Loop through all table rows, and hide those who don't match the search query
      // for (i = 0; i < tr.length; i++) {
      //   window.console.log($('.map-tables .table-group table tr:eq('+i+')').find('td'));
      //   td = tr[i].getElementsByTagName("td")[0];
      //   // window.console.log(td);
      //   $('.map-tables .table-group table tr:eq('+i+')').find('td').each(function() {
      //     // window.console.log(this.textContent);
      //     txtValue = this.textContent || this.innerText;
      //     if (txtValue.toLowerCase().indexOf(tableQuery) > -1) {
      //       tr[i].style.display = "";
      //     } else {
      //       tr[i].style.display = "none";
      //     }
      //   })

        // if (td) {
        //   txtValue = td.textContent || td.innerText;
        //   if (txtValue.toLowerCase().indexOf(tableQuery) > -1) {
        //     tr[i].style.display = "";
        //   } else {
        //     tr[i].style.display = "none";
        //   }
        // }
      // }
    });
    

  });


})(Drupal);
