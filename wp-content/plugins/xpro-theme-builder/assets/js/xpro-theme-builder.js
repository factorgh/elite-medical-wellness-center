! function(e) {
    e(document).ready(function() {
        if (setTimeout(function() {
                e(".xpro-theme-builder-frontend").show()
            }, 2e3), e(".xtb-header-sticky").length) {
            var t = e(".xpro-theme-builder-header-nav").height();
            e(window).on("scroll", function() {
                if (e(this).scrollTop() > 220) {
                    let h = e(".xpro-theme-builder-header-nav").height();
                    h > t && (t = h), e(".xtb-header-sticky").css("min-height", t + "px"), e(".xtb-header-sticky").addClass("xtb-appear")
                } else e(".xtb-header-sticky").removeClass("xtb-appear"), e(".xtb-header-sticky").css("min-height", "auto")
            })
        }
    })
}(jQuery);