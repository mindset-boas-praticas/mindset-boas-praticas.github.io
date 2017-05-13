var main = {
  init: function() {
    var $navbar = $('.navbar');
    var $mainNavbar = $('#main-navbar');
    var menus = $('.navlinks-container');

    $(window).scroll(function() {
      if ($navbar.offset().top > 50) {
        return $navbar.addClass('top-nav-short');
      }

      return $navbar.removeClass('top-nav-short');
    });

    $mainNavbar.on('click', '.navlinks-parent', function(e) {
      var target = e.target;

      $.each($('.navlinks-parent'), function(key, value) {
        var $parent = $(value).parent();
        if (value == target) {
          return $parent.toggleClass('show-children');
        }

        return $parent.removeClass('show-children');
      });
    });

    if (menus.length > 0) {
      var navbar = $('#main-navbar ul');
      var fakeMenuHtml = '<li class="fake-menu" style="display:none;"><a></a></li>';
      var fakeMenu = $('.fake-menu');

      navbar.append(fakeMenuHtml);

      $.each(menus, function(i) {
        var $menu = $(menus[i]);
        var parent = $menu.find('.navlinks-parent');
        var children = $menu.find('.navlinks-children a');
        var words = [];
        var maxwidth = 0;

        $.each(children, function(idx, el) {
          words = words.concat($(el).text().trim().split(/\s+/));
        });

        $.each(words, function(id, word) {
          fakeMenu.html('<a>' + word + '</a>');

          var width =  fakeMenu.width();

          if (width > maxwidth) {
            maxwidth = width;
          }
        });

        $(menus[i]).css('min-width', maxwidth + 'px');
      });

      fakeMenu.remove();
    }
  },
};

document.addEventListener('DOMContentLoaded', main.init);
