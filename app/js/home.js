//Particle Load
particlesJS('particles-js',{
    "particles": {
      "number": {
        "value": 75,
        "density": {
          "enable": false,
          "value_area": 4734.885849793636
        }
      },
      "color": {
        "value": "#e8cfd6"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

// Parallax
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

//Stack
(function (window) {

  'use strict';

  /**
 * StackFx: The parent class.
 */
  function StackFx(el) {
      this.DOM = {};
      this.DOM.el = el;
      this.DOM.stack = this.DOM.el.querySelector('.stack');
      this.DOM.stackItems = [].slice.call(this.DOM.stack.children);
      this.totalItems = this.DOM.stackItems.length;
      this.DOM.img = this.DOM.stack.querySelector('.stack__figure > .stack__img');
      this.DOM.caption = this.DOM.el.querySelector('.grid__item-caption');
      this.DOM.title = this.DOM.caption.querySelector('.grid__item-title');
      this.DOM.columns = { left: this.DOM.caption.querySelector('.column--left'), right: this.DOM.caption.querySelector('.column--right') };
  }

  StackFx.prototype._removeAnimeTargets = function () {
      anime.remove(this.DOM.stackItems);
      anime.remove(this.DOM.img);
      anime.remove(this.DOM.title);
      anime.remove(this.DOM.columns.left);
      anime.remove(this.DOM.columns.right);
  };



  /************************************************************************
 * PolluxFx.
 ************************************************************************/
  function PolluxFx(el) {
      StackFx.call(this, el);
      this._initEvents();
  }

  PolluxFx.prototype = Object.create(StackFx.prototype);
  PolluxFx.prototype.constructor = PolluxFx;

  PolluxFx.prototype._initEvents = function () {
      var self = this;
      this._mouseenterFn = function () {
          self._removeAnimeTargets();
          self._in();
      };
      this._mouseleaveFn = function () {
          self._removeAnimeTargets();
          self._out();
      };
      this.DOM.stack.addEventListener('mouseenter', this._mouseenterFn);
      this.DOM.stack.addEventListener('mouseleave', this._mouseleaveFn);
  };

  PolluxFx.prototype._in = function () {
      var self = this;

      anime({
          targets: this.DOM.stackItems,
          duration: 1000,
          opacity: {
              value: function (target, index, cnt) {
                  return index !== cnt - 1 ? [0, 0.1 * index + 0.1] : 1
              },
              easing: 'linear',
              delay: function (target, index, cnt) {
                  return (cnt - index - 1) * 60;
              }
          },
          translateY: {
              value: function (target, index) {
                  return -1 * index * 10;
              },
              easing: 'easeInOutCubic'
          },
          rotateX: {
              value: 80,
              easing: 'easeInOutCubic'
          },
          rotateZ: {
              value: 360,
              easing: 'easeInOutCubic',
              delay: function (target, index, cnt) {
                  return (cnt - index - 1) * 60;
              }
          }
      });

      anime({
          targets: this.DOM.img,
          duration: 1000,
          easing: 'easeInOutCubic',
          scale: 0.7
      });

      anime({
          targets: this.DOM.title,
          rotate: [
      {
          value: [0, 10],
          duration: 300,
          delay: 300,
          easing: 'easeOutCubic',
      },
      {
          value: [-20, 0],
          duration: 300,
          easing: 'easeOutCubic',
      }
          ],
          opacity: [
      {
          value: [1, 0],
          duration: 100,
          delay: 300,
          easing: 'easeOutCubic'
      },
      {
          value: [0, 1],
          duration: 100,
          delay: 300,
          easing: 'easeOutCubic'
      }
          ]
      });
  };

  PolluxFx.prototype._out = function () {
      var self = this;

      anime({
          targets: this.DOM.stackItems,
          duration: 1000,
          opacity: {
              value: function (target, index, cnt) {
                  return index !== cnt - 1 ? 0 : 1
              },
              easing: 'linear',
              delay: function (target, index) {
                  return index * 60;
              },
          },
          translateY: {
              value: 0,
              easing: 'easeInOutCubic'
          },
          rotateX: {
              value: 0,
              easing: 'easeInOutCubic'
          },
          rotateZ: {
              value: 0,
              easing: 'easeInOutCubic',
              delay: function (target, index, cnt) {
                  return (cnt - index - 1) * 60;
              }
          }
      });

      anime({
          targets: this.DOM.img,
          duration: 1000,
          easing: 'easeInOutCubic',
          scale: 1
      });

      anime({
          targets: this.DOM.title,
          duration: 1000,
          easing: 'easeInOutCubic',
          rotate: 0,
          opacity: 1
      });
  };

  window.PolluxFx = PolluxFx;

})(window);