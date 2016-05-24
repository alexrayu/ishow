/**
 * iShow Plugin.
 * Author: Alexei Raiu.
 */
(function($) {
  'use strict';
  $.fn.iHide = function(msec, callback) {
    msec = typeof(msec) !== 'undefined' ? msec : 300;
    var xheight = this.innerHeight();
    $(this).css('overflow', 'hidden');
    if (xheight > 0) {
      $(this).attr('xheight', this.innerHeight());
    }
    $(this).fadeTo(msec, 0, function() {
      $(this).animate({'height': 0}, msec, function() {
        if (typeof(callback) != 'undefined') {
          callback();
        }
      })
    });
    return this;
  };
  $.fn.iShow = function(msec, callback) {
    msec = typeof(msec) !== 'undefined' ? msec : 300;
    var xheight = $(this).attr('xheight');
    if (typeof xheight !== typeof undefined && xheight !== false) {
      $(this).animate({'height': xheight + 'px'}, msec, function () {
        $(this).css('height', '');
        $(this).fadeTo(msec, 1, function() {
          if (typeof(callback) != 'undefined') {
            callback();
          }
        });
      });
    }
    else {
      $(this).animate({height: 'auto'}, msec, function () {
        $(this).fadeTo(msec, 1)
      });
    }
    return this;
  };
})(jQuery);
