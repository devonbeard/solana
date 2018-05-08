!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.BadgerAccordion=e()}(this,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}return Array.from||(Array.from=function(){var t=Object.prototype.toString,e=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},n=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e},i=Math.pow(2,53)-1,a=function(t){var e=n(t);return Math.min(Math.max(e,0),i)};return function(t){var n=this,i=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var s,r=arguments.length>1?arguments[1]:void 0;if(void 0!==r){if(!e(r))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(s=arguments[2])}for(var o,l=a(i.length),d=e(n)?Object(new n(l)):new Array(l),h=0;h<l;)o=i[h],d[h]=r?void 0===s?r(o,h):r.call(s,o,h):o,h+=1;return d.length=l,d}}()),function(t,e){var n=(t.body||t.documentElement).style,i="",a="";""==n.WebkitAnimation&&(i="-webkit-"),""==n.MozAnimation&&(i="-moz-"),""==n.OAnimation&&(i="-o-"),""==n.WebkitTransition&&(a="-webkit-"),""==n.MozTransition&&(a="-moz-"),""==n.OTransition&&(a="-o-"),Object.defineProperty(Object.prototype,"onCSSAnimationEnd",{value:function(t){var e=function e(n){t(),n.target.removeEventListener(n.type,e)};return this.addEventListener("webkitAnimationEnd",e),this.addEventListener("mozAnimationEnd",e),this.addEventListener("oAnimationEnd",e),this.addEventListener("oanimationend",e),this.addEventListener("animationend",e),(""!=i||"animation"in n)&&"0s"!=getComputedStyle(this)[i+"animation-duration"]||t(),this},enumerable:!1,writable:!0}),Object.defineProperty(Object.prototype,"onCSSTransitionEnd",{value:function(t){var e=function e(n){t(),n.target.removeEventListener(n.type,e)};return this.addEventListener("webkitTransitionEnd",e),this.addEventListener("mozTransitionEnd",e),this.addEventListener("oTransitionEnd",e),this.addEventListener("transitionend",e),this.addEventListener("transitionend",e),(""!=a||"transition"in n)&&"0s"!=getComputedStyle(this)[a+"transition-duration"]||t(),this},enumerable:!1,writable:!0})}(document,window),function(){function e(n,a){t(this,e);var s="string"==typeof n?document.querySelector(n):n;if(null!=s){var r={headerClass:".js-badger-accordion-header",panelClass:".js-badger-accordion-panel",panelInnerClass:".js-badger-accordion-panel-inner",hiddenClass:"-ba-is-hidden",get hidenClass(){return this.hiddenClass},initalisedClass:"badger-accordion--initalised",headerDataAttr:"data-badger-accordion-header-id",openMultiplePanels:!1,openHeadersOnLoad:[],headerOpenLabel:"Open accordion panel",headerCloseLabel:"Close accordion panel"};this.settings=i({},r,a),this.settings.hidenClass!==this.settings.hiddenClass&&(this.settings.hiddenClass=this.settings.hidenClass),this.container=s,this.headers=Array.from(this.container.querySelectorAll(this.settings.headerClass)),this.panels=Array.from(this.container.querySelectorAll(this.settings.panelClass)),this.toggleEl=void 0!==this.settings.toggleEl?Array.from(this.container.querySelectorAll(this.settings.toggleEl)):this.headers,this.states=[].map.call(this.headers,function(){return{state:"closed"}}),this.ids=[].map.call(this.headers,function(){return{id:Math.floor(1e6*Math.random()+1)}}),this.toggling=!1,this.container?this.init():console.log("Something is wrong with you markup...")}}return n(e,[{key:"init",value:function(){this._setupAttributes(),this._initalState(),this._setPanelHeight(),this._insertDataAttrs(),this._addListeners(),this._finishInitalisation()}},{key:"_initalState",value:function(){var t=this.settings.openHeadersOnLoad;t.length&&this._openHeadersOnLoad(t),this._renderDom()}},{key:"_insertDataAttrs",value:function(){var t=this;this.headers.forEach(function(e,n){e.setAttribute(t.settings.headerDataAttr,n)})}},{key:"_finishInitalisation",value:function(){this.container.classList.add(this.settings.initalisedClass),this.container.setAttribute("role","presentation")}},{key:"_addListeners",value:function(){var t=this;this.headers.forEach(function(e,n){e.addEventListener("click",function(){t.handleClick(e,n)})})}},{key:"handleClick",value:function(t,e){var n=this.settings.headerClass.substr(1);t.classList.contains(n)&&!1===this.toggling&&(this.toggling=!0,this.setState(e),this._renderDom())}},{key:"setState",value:function(t){var e=this,n=this.getState();this.settings.openMultiplePanels||n.filter(function(e,n){n!=t&&(e.state="closed")}),n.filter(function(n,i){if(i==t){var a=e.toggleState(n.state);return n.state=a}})}},{key:"_renderDom",value:function(){var t=this;this.states.filter(function(e,n){"open"===e.state&&t.open(n)}),this.states.filter(function(e,n){"closed"===e.state&&t.close(n)})}},{key:"open",value:function(t){this.togglePanel("open",t)}},{key:"close",value:function(t){this.togglePanel("closed",t)}},{key:"openAll",value:function(){var t=this;this.headers.forEach(function(e){t.togglePanel("open",e)})}},{key:"closeAll",value:function(){var t=this;this.headers.forEach(function(e){t.togglePanel("closed",e)})}},{key:"togglePanel",value:function(t,e){var n=this;if(void 0!==t&&void 0!==e)if("closed"===t){var i=this.headers[e],a=this.panels[e];a.classList.add(this.settings.hiddenClass),i.setAttribute("aria-expanded",!1),i.setAttribute("aria-label",this.settings.headerOpenLabel),a.onCSSTransitionEnd(function(){return n.toggling=!1})}else if("open"===t){var s=this.headers[e],r=this.panels[e];r.classList.remove(this.settings.hiddenClass),s.setAttribute("aria-expanded",!0),s.setAttribute("aria-label",this.settings.headerCloseLabel),r.onCSSTransitionEnd(function(){return n.toggling=!1})}}},{key:"getState",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length&&Array.isArray(e)?e.map(function(e){return t.states[e]}):this.states}},{key:"toggleState",value:function(t){if(void 0!==t)return"closed"===t?"open":"closed"}},{key:"_openHeadersOnLoad",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.length&&Array.isArray(e)&&e.filter(function(t){return void 0!=t}).forEach(function(e){return t.states[e].state="open"})}},{key:"_setupAttributes",value:function(){this._setupHeaders(),this._setupPanels(),this._insertDataAttrs()}},{key:"_setPanelHeight",value:function(){var t=this;this.panels.forEach(function(e){var n=e.querySelector(t.settings.panelInnerClass).offsetHeight;return e.style.maxHeight="".concat(n,"px")})}},{key:"_setupHeaders",value:function(){var t=this;this.headers.forEach(function(e,n){e.setAttribute("id","badger-accordion-header-".concat(t.ids[n].id)),e.setAttribute("aria-controls","badger-accordion-panel-".concat(t.ids[n].id)),e.setAttribute("aria-label",t.settings.headerOpenLabel)})}},{key:"_setupPanels",value:function(){var t=this;this.panels.forEach(function(e,n){e.setAttribute("id","badger-accordion-panel-".concat(t.ids[n].id)),e.setAttribute("aria-labeledby","badger-accordion-header-".concat(t.ids[n].id)),e.setAttribute("role","region")})}}]),e}()});

const accordions = document.querySelectorAll('.js-badger-accordion');

Array.from(accordions).forEach((accordion) => {
  const ba = new BadgerAccordion(accordion);
});


// FAQ Accordions
new BadgerAccordion('.js-badger-accordion')
new BadgerAccordion('.js-badger-accordion-2')
new BadgerAccordion('.js-badger-accordion-3')
new BadgerAccordion('.js-badger-accordion-4')

document.querySelector('.js-badger-accordion-header').click(() => {
  this.classList.add('active');
})


$('.panel-control').on('click', function(e) {
  var panelID = $(this).attr("id");
  $(this).addClass('active').siblings('.active').toggleClass('active');
  if ($(`#${panelID}-display`).hasClass('active')) {
    // do nothing
  } else {
    $(`#${panelID}-display`).toggleClass('active').siblings('.active').removeClass('active');
  }
});



// Header BG
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 100);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
      return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  console.log(st);
  if ( st < 200) {
    // Scroll Down
    $('.site-header').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('.site-header').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}
