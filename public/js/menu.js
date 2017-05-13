/**
 * File menu.js.
 *
 * Handles menu.
 *
 * Author: Diego Versiani
 * Contact: http://diegoversiani.me
 *
 * DEPENDS ON:
 * - shared/which-animation-event.js
 */

(function(){
  
  'use strict';

  // Initialize EventListeners
  window.addEventListener("DOMContentLoaded", init);



  var _toggle,
      _body,
      _menu_container,
      _animationEvent,
      _animationClassEntrance = 'fadeInLeft',
      _animationClassExit = 'fadeOutLeft';



  function init() {
    _body = document.documentElement;
    _toggle = document.querySelector('.sidebar-nav__toggle');
    _menu_container = document.querySelector('.sidebar-nav');
    _animationEvent = whichAnimationEvent();

    _toggle.addEventListener('click', toggleMenu);
    _menu_container.addEventListener( _animationEvent, handleMenuContainerAnimation );
  };





  /* SEE shared/which-animation-event.js */
  function whichAnimationEvent() {
    if ( window.whichAnimationEvent ) {
      return window.whichAnimationEvent();
    }

    return 'animationend';
  };





  function toggleMenu() {
    if ( _body.classList.contains( 'menu-open' ) ) {
      // CLOSE
      _menu_container.classList.add( _animationClassExit );
    }
    else {
      // OPEN
      _body.classList.add( 'menu-open' );
      _menu_container.classList.add( _animationClassEntrance );
    }
  };




  function handleMenuContainerAnimation( e ) {
    if ( e.target.classList.contains( _animationClassEntrance ) ) {
      e.target.classList.remove( _animationClassEntrance );
    }
    else if ( e.target.classList.contains( _animationClassExit ) ) {
      e.target.classList.remove( _animationClassExit );
      _body.classList.remove( 'menu-open' );
    }
  };



})();
