!function(){var t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};t.body.addEventListener("click",(function(o){o.target===t.btnStart?(n(t.btnStart,t.btnStop),e=setInterval((function(){t.body.setAttribute("style","background-color: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16))))}),1e3)):o.target===t.btnStop&&(n(t.btnStop,t.btnStart),clearInterval(e))}));var e=null;function n(t,e){t.setAttribute("disabled",!0),e.removeAttribute("disabled")}t.btnStop.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.b7948079.js.map
