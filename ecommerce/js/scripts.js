// $(document).ready(function() {
//     var panels = $('.sub-cats');
//     var panelsButton = $('.dropdown-user');

//     panels.hide();

//     //Click dropdown
//     panelsButton.click(function() {
//         //get data-for attribute

//         var dataFor = $(this).attr('data-for');
//         var idFor = $(dataFor);
//             panelsButton.parent().toggleClass("sub-active") ;

//         //current button
//         var currentButton = $(this);
//         idFor.slideToggle(400, function() {
//             //Completed slidetoggle
//             if(idFor.is(':visible'))
//             {
//                 currentButton.html('<i class="fa fa-chevron-up text-muted"></i>');
//             }
//             else
//             {
//                 currentButton.html('<i class="fa fa-chevron-down text-muted"></i>');
//             }
//         })
//     });


//     $('[data-toggle="tooltip"]').tooltip();

//     $('button').click(function(e) {
//         e.preventDefault();
//         alert("This is a demo.\n :-)");
//     });
// });
/* start sub-cat-active */
$('.sub-cats').hide();
$('.toggle').click(function(e) {
    e.preventDefault();

  var $this = $(this);
  $('.sub-active').removeClass('sub-active');
  
  
  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().toggleClass('sub-active');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

/* end sub-cat-active */
/* start sub-cat-active */


/* end sub-cat-active */
/* start slider range */
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

/* end slider range */

  /* start rating stars  */ 
var __slice = [].slice;

(function($, window) {
  var Starrr;

  Starrr = (function() {
    Starrr.prototype.defaults = {
      rating: void 0,
      numStars: 5,
      change: function(e, value) {}
    };

    function Starrr($el, options) {
      var i, _, _ref,
        _this = this;

      this.options = $.extend({}, this.defaults, options);
      this.$el = $el;
      _ref = this.defaults;
      for (i in _ref) {
        _ = _ref[i];
        if (this.$el.data(i) != null) {
          this.options[i] = this.$el.data(i);
        }
      }
      this.createStars();
      this.syncRating();
      this.$el.on('mouseover.starrr', 'span', function(e) {
        return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
      });
      this.$el.on('mouseout.starrr', function() {
        return _this.syncRating();
      });
      this.$el.on('click.starrr', 'span', function(e) {
        return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
      });
      this.$el.on('starrr:change', this.options.change);
    }

    Starrr.prototype.createStars = function() {
      var _i, _ref, _results;

      _results = [];
      for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
        _results.push(this.$el.append("<span class='glyphicon .fa fa-star-o'></span>"));
      }
      return _results;
    };

    Starrr.prototype.setRating = function(rating) {
      if (this.options.rating === rating) {
        rating = void 0;
      }
      this.options.rating = rating;
      this.syncRating();
      return this.$el.trigger('starrr:change', rating);
    };

    Starrr.prototype.syncRating = function(rating) {
      var i, _i, _j, _ref;

      rating || (rating = this.options.rating);
      if (rating) {
        for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          this.$el.find('span').eq(i).removeClass('fa fa-star-o').addClass('fa fa-star');
        }
      }
      if (rating && rating < 5) {
        for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
          this.$el.find('span').eq(i).removeClass('fa fa-star').addClass('fa fa-star-o');
        }
      }
      if (!rating) {
        return this.$el.find('span').removeClass('fa fa-star').addClass('fa fa-star-o');
      }
    };

    return Starrr;

  })();
  return $.fn.extend({
    starrr: function() {
      var args, option;

      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return this.each(function() {
        var data;

        data = $(this).data('star-rating');
        if (!data) {
          $(this).data('star-rating', (data = new Starrr($(this), option)));
        }
        if (typeof option === 'string') {
          return data[option].apply(data, args);
        }
      });
    }
  });
})(window.jQuery, window);

$(function() {
  return $(".starrr").starrr();
});

$( document ).ready(function() {
      
  $('#stars').on('starrr:change', function(e, value){
    $('#count').html(value);
  });
  
  $('#stars-existing').on('starrr:change', function(e, value){
    $('#count-existing').html(value);
  });
});

  /* end rating stars  */ 

  /* start input spinner */
  (function ($) {
    $('.spinner .btn:first-of-type').on('click', function() {
      $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
    });
    $('.spinner .btn:last-of-type').on('click', function() {
      $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
    });
  })(jQuery);
  
  (function ($) {
    $('.spinner2 .btn:first-of-type').on('click', function() {
      $('.spinner2 input').val( parseInt($('.spinner2 input').val(), 10) + 1);
    });
    $('.spinner2 .btn:last-of-type').on('click', function() {
      $('.spinner2 input').val( parseInt($('.spinner2 input').val(), 10) - 1);
    });
  })(jQuery);
  /* end input spinner */

  // $(window).bind('resize', function()
  // {
  //     if($(window).width() > 500)
  //         $('#divID').css('width', '300px');
  //     else
  //         $('divID').css('width', '200px');
  // });