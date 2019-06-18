(function() {
  // Inspiration:
  // http://coolcarousels.frebsite.nl/c/59/
  // & 
  // https://css-tricks.com/slider-with-sliding-backgrounds/
  var $left_arrow, $right_arrow, animate_next, animate_previous;

  $right_arrow = $('#right-arrow');

  $left_arrow = $('#left-arrow');

  $right_arrow.click(function(e) {
    e.preventDefault();
    $('.slide-holder').velocity('finish'); // finish any current animations
    animate_next('#slide-right');
    animate_next('#slide-center', 175);
    return animate_next('#slide-left', 350);
  });

  $left_arrow.click(function(e) {
    e.preventDefault();
    $('.slide-holder').velocity('finish'); // finish any current animations
    animate_previous('#slide-left');
    animate_previous('#slide-center', 175);
    return animate_previous('#slide-right', 350);
  });

  animate_next = function(selector, delay = 0, cb = null) {
    return setTimeout(function() {
      var $bg_curr, $bg_next, $bg_prev, $el;
      $el = $(`${selector
      // select the elements
} .slide-holder`);
      $bg_prev = $el.find('.bg-previous');
      $bg_curr = $el.find('.bg-current');
      $bg_next = $el.find('.bg-next');
      $.Velocity.hook($el, "translateX", `-${100 / 3
      // set transform before animating
}%`);
      return $.Velocity.animate($el, { // animate the transform
        translateX: `-${200 / 3}%`,
        duration: 350
      }).then(function(elms) { // reorder the slide-bg's and recenter the slide-holder
        var next_bg_image;
        next_bg_image = $.Velocity.hook($bg_prev, "background-image");
        $.Velocity.hook($bg_prev, "background-image", $.Velocity.hook($bg_curr, "background-image"));
        $.Velocity.hook($bg_curr, "background-image", $.Velocity.hook($bg_next, "background-image"));
        $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
        $.Velocity.hook($bg_next, "background-image", next_bg_image);
        if (typeof cb === 'function') {
          return cb(elms);
        }
      });
    }, delay);
  };

  animate_previous = function(selector, delay, cb) {
    return setTimeout(function() {
      var $bg_curr, $bg_next, $bg_prev, $el;
      $el = $(`${selector
      // select the elements
} .slide-holder`);
      $bg_prev = $el.find('.bg-previous');
      $bg_curr = $el.find('.bg-current');
      $bg_next = $el.find('.bg-next');
      $.Velocity.hook($el, "translateX", `-${100 / 3
      // set transform before animating
}%`);
      return $.Velocity.animate($el, { // animate the transform
        translateX: "0",
        duration: 350
      }).then(function(elms) { // reorder the slide-bg's and recenter the slide-holder
        var prev_bg_image;
        prev_bg_image = $.Velocity.hook($bg_next, "background-image");
        $.Velocity.hook($bg_next, "background-image", $.Velocity.hook($bg_curr, "background-image"));
        $.Velocity.hook($bg_curr, "background-image", $.Velocity.hook($bg_prev, "background-image"));
        $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
        $.Velocity.hook($bg_prev, "background-image", prev_bg_image);
        if (typeof cb === 'function') {
          return cb(elms);
        }
      });
    }, delay);
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTs7OztBQUFBLE1BQUEsV0FBQSxFQUFBLFlBQUEsRUFBQSxZQUFBLEVBQUE7O0VBS0EsWUFBQSxHQUFlLENBQUEsQ0FBRSxjQUFGOztFQUNmLFdBQUEsR0FBYyxDQUFBLENBQUUsYUFBRjs7RUFFZCxZQUFZLENBQUMsS0FBYixDQUFtQixRQUFBLENBQUMsQ0FBRCxDQUFBO0lBQ2pCLENBQUMsQ0FBQyxjQUFGLENBQUE7SUFDQSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLFFBQW5CLENBQTRCLFFBQTVCLEVBREE7SUFFQSxZQUFBLENBQWEsY0FBYjtJQUNBLFlBQUEsQ0FBYSxlQUFiLEVBQThCLEdBQTlCO1dBQ0EsWUFBQSxDQUFhLGFBQWIsRUFBNEIsR0FBNUI7RUFMaUIsQ0FBbkI7O0VBT0EsV0FBVyxDQUFDLEtBQVosQ0FBa0IsUUFBQSxDQUFDLENBQUQsQ0FBQTtJQUNoQixDQUFDLENBQUMsY0FBRixDQUFBO0lBQ0EsQ0FBQSxDQUFFLGVBQUYsQ0FBa0IsQ0FBQyxRQUFuQixDQUE0QixRQUE1QixFQURBO0lBRUEsZ0JBQUEsQ0FBaUIsYUFBakI7SUFDQSxnQkFBQSxDQUFpQixlQUFqQixFQUFrQyxHQUFsQztXQUNBLGdCQUFBLENBQWlCLGNBQWpCLEVBQWlDLEdBQWpDO0VBTGdCLENBQWxCOztFQU9BLFlBQUEsR0FBZSxRQUFBLENBQUMsUUFBRCxFQUFXLFFBQU0sQ0FBakIsRUFBb0IsS0FBRyxJQUF2QixDQUFBO1dBQ2IsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO0FBQ1QsVUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQTtNQUFBLEdBQUEsR0FBTSxDQUFBLENBQUUsQ0FBQSxDQUFBLENBQUcsUUFBSDs7Q0FBWSxjQUFaLENBQUY7TUFDTixRQUFBLEdBQVcsR0FBRyxDQUFDLElBQUosQ0FBUyxjQUFUO01B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LFFBQVEsQ0FBQyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCLGtCQUExQixDQUE5QztRQUNBLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBWCxDQUFnQixHQUFoQixFQUFxQixZQUFyQixFQUFtQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUEsR0FBSSxDQUFSLENBQVUsQ0FBVixDQUFuQztRQUNBLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBWCxDQUFnQixRQUFoQixFQUEwQixrQkFBMUIsRUFBOEMsYUFBOUM7UUFDQSxJQUFZLE9BQU8sRUFBUCxLQUFhLFVBQXpCO2lCQUFBLEVBQUEsQ0FBRyxJQUFILEVBQUE7O01BTk0sQ0FIUjtJQU5TLENBQVgsRUFnQkUsS0FoQkY7RUFEaUI7QUF6Q25CIiwic291cmNlc0NvbnRlbnQiOlsiIyBJbnNwaXJhdGlvbjpcbiMgaHR0cDovL2Nvb2xjYXJvdXNlbHMuZnJlYnNpdGUubmwvYy81OS9cbiMgJiBcbiMgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbGlkZXItd2l0aC1zbGlkaW5nLWJhY2tncm91bmRzL1xuXG4kcmlnaHRfYXJyb3cgPSAkKCcjcmlnaHQtYXJyb3cnKVxuJGxlZnRfYXJyb3cgPSAkKCcjbGVmdC1hcnJvdycpXG5cbiRyaWdodF9hcnJvdy5jbGljayAoZSkgLT5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJy5zbGlkZS1ob2xkZXInKS52ZWxvY2l0eSgnZmluaXNoJykgIyBmaW5pc2ggYW55IGN1cnJlbnQgYW5pbWF0aW9uc1xuICBhbmltYXRlX25leHQoJyNzbGlkZS1yaWdodCcpXG4gIGFuaW1hdGVfbmV4dCgnI3NsaWRlLWNlbnRlcicsIDE3NSlcbiAgYW5pbWF0ZV9uZXh0KCcjc2xpZGUtbGVmdCcsIDM1MClcblxuJGxlZnRfYXJyb3cuY2xpY2sgKGUpIC0+XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcuc2xpZGUtaG9sZGVyJykudmVsb2NpdHkoJ2ZpbmlzaCcpICMgZmluaXNoIGFueSBjdXJyZW50IGFuaW1hdGlvbnNcbiAgYW5pbWF0ZV9wcmV2aW91cygnI3NsaWRlLWxlZnQnKVxuICBhbmltYXRlX3ByZXZpb3VzKCcjc2xpZGUtY2VudGVyJywgMTc1KVxuICBhbmltYXRlX3ByZXZpb3VzKCcjc2xpZGUtcmlnaHQnLCAzNTApXG4gIFxuYW5pbWF0ZV9uZXh0ID0gKHNlbGVjdG9yLCBkZWxheT0wLCBjYj1udWxsKSAtPlxuICBzZXRUaW1lb3V0IC0+XG4gICAgJGVsID0gJChcIiN7c2VsZWN0b3J9IC5zbGlkZS1ob2xkZXJcIikgIyBzZWxlY3QgdGhlIGVsZW1lbnRzXG4gICAgJGJnX3ByZXYgPSAkZWwuZmluZCgnLmJnLXByZXZpb3VzJylcbiAgICAkYmdfY3VyciA9ICRlbC5maW5kKCcuYmctY3VycmVudCcpXG4gICAgJGJnX25leHQgPSAkZWwuZmluZCgnLmJnLW5leHQnKVxuICAgICQuVmVsb2NpdHkuaG9vaygkZWwsIFwidHJhbnNsYXRlWFwiLCBcIi0jezEwMC8zfSVcIikgIyBzZXQgdHJhbnNmb3JtIGJlZm9yZSBhbmltYXRpbmdcbiAgICAkLlZlbG9jaXR5LmFuaW1hdGUoJGVsLCB7ICMgYW5pbWF0ZSB0aGUgdHJhbnNmb3JtXG4gICAgICB0cmFuc2xhdGVYOiBcIi0jezIwMC8zfSVcIlxuICAgICAgZHVyYXRpb246IDM1MFxuICAgIH0pLnRoZW4gKGVsbXMpIC0+ICMgcmVvcmRlciB0aGUgc2xpZGUtYmcncyBhbmQgcmVjZW50ZXIgdGhlIHNsaWRlLWhvbGRlclxuICAgICAgbmV4dF9iZ19pbWFnZSA9ICQuVmVsb2NpdHkuaG9vaygkYmdfcHJldiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIpXG4gICAgICAkLlZlbG9jaXR5Lmhvb2soJGJnX3ByZXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCAkLlZlbG9jaXR5Lmhvb2soJGJnX2N1cnIsIFwiYmFja2dyb3VuZC1pbWFnZVwiKSlcbiAgICAgICQuVmVsb2NpdHkuaG9vaygkYmdfY3VyciwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsICQuVmVsb2NpdHkuaG9vaygkYmdfbmV4dCwgXCJiYWNrZ3JvdW5kLWltYWdlXCIpKVxuICAgICAgJC5WZWxvY2l0eS5ob29rKCRlbCwgXCJ0cmFuc2xhdGVYXCIsIFwiLSN7MTAwLzN9JVwiKVxuICAgICAgJC5WZWxvY2l0eS5ob29rKCRiZ19uZXh0LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgbmV4dF9iZ19pbWFnZSlcbiAgICAgIGNiKGVsbXMpIGlmIHR5cGVvZiBjYiBpcyAnZnVuY3Rpb24nXG4gICwgZGVsYXlcbiAgXG5hbmltYXRlX3ByZXZpb3VzID0gKHNlbGVjdG9yLCBkZWxheSwgY2IpIC0+XG4gIHNldFRpbWVvdXQgLT5cbiAgICAkZWwgPSAkKFwiI3tzZWxlY3Rvcn0gLnNsaWRlLWhvbGRlclwiKSAjIHNlbGVjdCB0aGUgZWxlbWVudHNcbiAgICAkYmdfcHJldiA9ICRlbC5maW5kKCcuYmctcHJldmlvdXMnKVxuICAgICRiZ19jdXJyID0gJGVsLmZpbmQoJy5iZy1jdXJyZW50JylcbiAgICAkYmdfbmV4dCA9ICRlbC5maW5kKCcuYmctbmV4dCcpXG4gICAgJC5WZWxvY2l0eS5ob29rKCRlbCwgXCJ0cmFuc2xhdGVYXCIsIFwiLSN7MTAwLzN9JVwiKSAjIHNldCB0cmFuc2Zvcm0gYmVmb3JlIGFuaW1hdGluZ1xuICAgICQuVmVsb2NpdHkuYW5pbWF0ZSgkZWwsIHsgIyBhbmltYXRlIHRoZSB0cmFuc2Zvcm1cbiAgICAgIHRyYW5zbGF0ZVg6IFwiMFwiXG4gICAgICBkdXJhdGlvbjogMzUwXG4gICAgfSkudGhlbiAoZWxtcykgLT4gIyByZW9yZGVyIHRoZSBzbGlkZS1iZydzIGFuZCByZWNlbnRlciB0aGUgc2xpZGUtaG9sZGVyXG4gICAgICBwcmV2X2JnX2ltYWdlID0gJC5WZWxvY2l0eS5ob29rKCRiZ19uZXh0LCBcImJhY2tncm91bmQtaW1hZ2VcIilcbiAgICAgICQuVmVsb2NpdHkuaG9vaygkYmdfbmV4dCwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsICQuVmVsb2NpdHkuaG9vaygkYmdfY3VyciwgXCJiYWNrZ3JvdW5kLWltYWdlXCIpKVxuICAgICAgJC5WZWxvY2l0eS5ob29rKCRiZ19jdXJyLCBcImJhY2tncm91bmQtaW1hZ2VcIiwgJC5WZWxvY2l0eS5ob29rKCRiZ19wcmV2LCBcImJhY2tncm91bmQtaW1hZ2VcIikpXG4gICAgICAkLlZlbG9jaXR5Lmhvb2soJGVsLCBcInRyYW5zbGF0ZVhcIiwgXCItI3sxMDAvM30lXCIpXG4gICAgICAkLlZlbG9jaXR5Lmhvb2soJGJnX3ByZXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBwcmV2X2JnX2ltYWdlKVxuICAgICAgY2IoZWxtcykgaWYgdHlwZW9mIGNiIGlzICdmdW5jdGlvbidcbiAgLCBkZWxheSJdfQ==
//# sourceURL=coffeescript