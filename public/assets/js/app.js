! function() {
    "use strict";
    var e, t;
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(t) {
        return new bootstrap.Tooltip(t)
    }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(t) {
        return new bootstrap.Popover(t)
    }), e = document.getElementsByTagName("body")[0], (t = document.querySelectorAll(".light-dark")) && t.forEach(function(t) {
        t.addEventListener("click", function(t) {
            e.hasAttribute("data-layout-mode") && "dark" == e.getAttribute("data-layout-mode") ? document.body.setAttribute("data-layout-mode", "light") : document.body.setAttribute("data-layout-mode", "dark")
        })
    }), Waves.init()
}();