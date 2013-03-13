var Utility = {
	getDateYear: function () {
		var d = new Date();
		return d.getFullYear();
	}
};

var Layouts = {

	resizeStage: function () {
		var headerHeight = $("#header").height(),
				toolbarHeight = $("#master_tool_bar").height(),
				footerHeight = $("#footer").height(),
				sidebar = $("#sidebar"),
				quickOptionsHeight = $("#quick_options").height();

		if ($(window).width() >= 1280) {
			$("#nucleus").width($(window).width());
		}
		
		$("#stage").height($(window).height() - (headerHeight + toolbarHeight + footerHeight + 7));
		$("#results").height($("#stage").height() - quickOptionsHeight);
		$("#data_views").width($("#stage").width() - 240);
		$("#data_list_views").height($("#stage").height() - ($("#meta_data").height() - 1));

		$(window).resize(function() {
			if ($(this).width() >= 1280) {
				$("#nucleus").width($(this).width());
			}
			$("#stage").height($(window).height() - (headerHeight + toolbarHeight + footerHeight + 7));
			$("#results").height($("#stage").height() - quickOptionsHeight);
			$("#data_views").width($("#stage").width() - 240);
			$("#data_list_views").height($("#stage").height() - ($("#meta_data").height() - 1));
		});

	}

};

var FormElements = {

  customSelects: function (form) {
    var selects = "",
        authWrap = "";

    if (form == undefined) {
      selects = $("select.select");
      authWrap = $(".auth_wrap");
    } else {
      selects = form.find("select.select");
      authWrap = form.find(".auth_wrap");

    }

    // Trigger active state for rollover effect on element
    selects.hover(
      function () {
        $(this).siblings('span').addClass('active');
      },
      function () {
        $(this).siblings('span').removeClass('active');
      });


    // iterate over each select and set style and active value
    selects.each(function () {
      var self = $(this),
          title = "",
          defaultText = $(this).data("defaulttext"),
          viewableText = $('<span class="select" style="overflow:hidden;"></span>'),
          fauxSelector = $('<span class="select_toggle"></span>');

      if (self.attr('title')) {
        title = self.attr('title');
      }

      if ($('option:selected', this).val() != '') {
        title = $('option:selected ', this).text();
        self.css({ 'z-index': 10, 'opacity': 0, '-khtml-appearance': 'none' })
          .after('<span class="select" style="overflow:hidden;">' + title + '</span>')
          .after('<span class="select_toggle"><span class="toggle"></span></span>')
          .change(function () {
            var valSpan = self.siblings('span.select'),
                val = $('option:selected', this).text();
            valSpan.text(val);
          });

        if (self.parent().hasClass("disabled")) {
          self.siblings('span.select').text(defaultText);
        }

        if (authWrap.hasClass("disabled_controls")) {
          self.remove();
          viewableText.html("");
          fauxSelector.addClass("rcbDisabled");
        }
      }
    });
  }

};