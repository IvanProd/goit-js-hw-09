const t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};t.btnStart.addEventListener("click",(function(e){t.btnStart.setAttribute("disabled",!0);setInterval((()=>{t.body.setAttribute("style",`background-color: #${Math.floor(16777215*Math.random()).toString(16)}`)}),1e3)})),t.btnStop.addEventListener("click",(function(e){t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled",!0),clearInterval(timerId),console.log("stop",timerId)}));
//# sourceMappingURL=01-color-switcher.59150c24.js.map
