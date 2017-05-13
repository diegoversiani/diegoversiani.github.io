/**
 * File which-animation-event.js.
 *
 * Provide a crossbrowser way to determine which
 * animationend event is supported by the current browser.
 *
 * Author: Diego Versiani
 * Contact: http://diegoversiani.me
 * 
 * Based on the work of:
 * Jonathan Suh - https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
 * David Walsh - https://davidwalsh.name/css-animation-callback
 */
( function() {

  /* From Modernizr */
  function whichAnimationEvent() {
    var t,
        el = document.createElement("fakeelement");
    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  };



  window.whichAnimationEvent = whichAnimationEvent;

})();
